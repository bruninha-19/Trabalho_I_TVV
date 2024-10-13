const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs");

const app = express();

// Configurando o diretório público
app.use(express.static(path.join(__dirname, "public")));

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurando Handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);
app.set("view engine", "handlebars");

// Adicionando o helper personalizado para Handlebars
const handlebars = require("handlebars");

handlebars.registerHelper("ifEqual", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

// Configurando a conexão com o MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "BookStore",
});

// Conectando ao banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL");
});

// Configurando sessões
app.use(
  session({
    secret: "seu_segredo",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Use 'true' se estiver usando HTTPS
  })
);

// Middleware para definir o usuário localmente
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Verificando e criando o diretório para as imagens dos livros, se necessário
const imgDir = path.join(__dirname, "public", "imagens", "livros");
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Configurando multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/imagens/livros");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Middleware para verificar se o usuário está logado
function checkAuth(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    res.redirect("/login");
  }
}

// Rota principal
app.get("/", (req, res) => {
  const sqlDestaques = "SELECT * FROM books WHERE destaque = 1";
  const sqlTodosLivros = "SELECT * FROM books";

  db.query(sqlDestaques, (err, destaques) => {
    if (err) {
      console.error("Erro ao buscar livros em destaque:", err);
      res.status(500).send("Erro ao buscar livros em destaque");
      return;
    }

    db.query(sqlTodosLivros, (err, todosLivros) => {
      if (err) {
        console.error("Erro ao buscar todos os livros:", err);
        res.status(500).send("Erro ao buscar todos os livros");
        return;
      }

      res.render("index", { destaques: destaques, all_books: todosLivros });
    });
  });
});

// Rota para tela de cadastro
app.get("/cadastro", (req, res) => {
  res.render("tela_cadastro");
});

// Rota para processar cadastro
app.post("/cadastro", async (req, res) => {
  const {
    nome,
    sobrenome,
    email,
    telefone,
    whatsapp,
    password,
    confirma_password,
  } = req.body;

  // Verifica se as senhas coincidem
  if (password !== confirma_password) {
    return res.status(400).send("As senhas não coincidem");
  }

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Inserir dados no banco de dados
  const sql =
    "INSERT INTO users (nome, sobrenome, email, telefone, whatsapp, password) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [nome, sobrenome, email, telefone, whatsapp, hashedPassword],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir dados no banco de dados:", err);
        res.status(500).send("Erro ao cadastrar usuário");
        return;
      }
      res.send("Usuário cadastrado com sucesso!");
    }
  );
});

// Rota para tela de login
app.get("/login", (req, res) => {
  res.render("tela_login");
});

// Rota para processar login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Erro ao buscar usuário no banco de dados:", err);
      return res.render("tela_login", { error: "Erro ao fazer login. Tente novamente mais tarde." });
    }

    if (results.length === 0) {
      return res.render("tela_login", { error: "Usuário não encontrado." });
    }

    const user = results[0];

    // Verifica a senha
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Configura a sessão do usuário
      req.session.user = user;
      return res.redirect("/usuario");
    } else {
      return res.render("tela_login", { error: "Senha incorreta." });
    }
  });
});



// Rota para a tela do usuário (protegida)
app.get("/usuario", checkAuth, (req, res) => {
  const sql = "SELECT * FROM books WHERE user_id = ?";
  db.query(sql, [req.session.user.id], (err, results) => {
    if (err) {
      console.error("Erro ao buscar livros do usuário:", err);
      res.status(500).send("Erro ao buscar livros do usuário");
      return;
    }
    req.session.user.books = results;
    res.render("tela_usuario", { user: req.session.user });
  });
});

// Rota para adicionar livro (protegida)
app.get("/adicionar-livro", checkAuth, (req, res) => {
  res.render("tela_adicionar_livro");
});

app.post("/adicionar-livro", checkAuth, upload.single("imagem"), (req, res) => {
  const {
    titulo,
    autor,
    editora,
    ano,
    isbn,
    descricao,
    paginas,
    estado,
    preco,
    categoria,
  } = req.body;
  const imagem = "/imagens/livros/" + req.file.filename;

  const sql =
    "INSERT INTO books (titulo, autor, editora, ano, isbn, descricao, paginas, estado, imagem, user_id, preco, categoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      titulo,
      autor,
      editora,
      ano,
      isbn,
      descricao,
      paginas,
      estado,
      imagem,
      req.session.user.id,
      preco,
      categoria,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao adicionar livro:", err);
        res.status(500).send("Erro ao adicionar livro");
        return;
      }
      res.redirect("/usuario");
    }
  );
});

// Rota para renderizar o formulário de edição de livro (protegida)
app.get("/editar-livro/:id", checkAuth, (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM books WHERE id = ? AND user_id = ?";

  db.query(sql, [id, req.session.user.id], (err, result) => {
    if (err) {
      console.error("Erro ao buscar livro para edição:", err);
      res.status(500).send("Erro ao buscar livro para edição");
      return;
    }

    if (result.length === 0) {
      res
        .status(404)
        .send("Livro não encontrado ou você não tem permissão para editá-lo");
      return;
    }

    res.render("editar_livro", { livro: result[0] });
  });
});

// Rota para processar o formulário de edição de livro
app.post(
  "/editar-livro/:id",
  checkAuth,
  upload.single("imagem"),
  (req, res) => {
    const {
      titulo,
      autor,
      editora,
      ano,
      isbn,
      descricao,
      paginas,
      estado,
      preco,
      categoria,
    } = req.body;
    const id = req.params.id;
    let sql =
      "UPDATE books SET titulo = ?, autor = ?, editora = ?, ano = ?, isbn = ?, descricao = ?, paginas = ?, estado = ?, preco = ?, categoria = ?";
    const values = [
      titulo,
      autor,
      editora,
      ano,
      isbn,
      descricao,
      paginas,
      estado,
      preco,
      categoria,
    ];

    if (req.file) {
      const imagem = "/imagens/livros/" + req.file.filename;
      sql += ", imagem = ?";
      values.push(imagem);
    }

    sql += " WHERE id = ? AND user_id = ?";
    values.push(id, req.session.user.id);

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao editar livro:", err);
        res.status(500).send("Erro ao editar livro");
        return;
      }
      res.redirect("/usuario");
    });
  }
);

// Rota para exibir todos os livros
app.get("/livros", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao buscar livros:", err);
      res.status(500).send("Erro ao buscar livros");
      return;
    }
    res.render("livros", { livros: results });
  });
});

// Rota para remover livro (protegida)
app.post("/remover-livro/:id", checkAuth, (req, res) => {
  const livroId = req.params.id;
  const sql = "DELETE FROM books WHERE id = ? AND user_id = ?";
  db.query(sql, [livroId, req.session.user.id], (err, result) => {
    if (err) {
      console.error("Erro ao remover livro:", err);
      res.status(500).send("Erro ao remover livro");
      return;
    }
    res.redirect("/usuario");
  });
});

// Rota para marcar um livro como destaque (protegida)
app.post("/marcar-destaque/:id", checkAuth, (req, res) => {
  const livroId = req.params.id;
  const sql = "UPDATE books SET destaque = 1 WHERE id = ? AND user_id = ?";
  db.query(sql, [livroId, req.session.user.id], (err, result) => {
    if (err) {
      console.error("Erro ao marcar livro como destaque:", err);
      res.status(500).send("Erro ao marcar livro como destaque");
      return;
    }
    res.redirect("/usuario");
  });
});

// Rota para desmarcar um livro como destaque (protegida)
app.post("/desmarcar-destaque/:id", checkAuth, (req, res) => {
  const livroId = req.params.id;
  const sql = "UPDATE books SET destaque = 0 WHERE id = ? AND user_id = ?";
  db.query(sql, [livroId, req.session.user.id], (err, result) => {
    if (err) {
      console.error("Erro ao desmarcar livro como destaque:", err);
      res.status(500).send("Erro ao desmarcar livro como destaque");
      return;
    }
    res.redirect("/usuario");
  });
});

// Rota para deslogar
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erro ao destruir a sessão:", err);
      res.status(500).send("Erro ao deslogar");
      return;
    }
    res.redirect("/");
  });
});

// Rota para tela de informações
app.get("/informacoes", (req, res) => {
  res.render("informacoes");
});

// Rota para exibir informações de um livro específico
app.get("/livro/:id", (req, res) => {
  const livroId = req.params.id;
  const sql = "SELECT * FROM books WHERE id = ?";
  db.query(sql, [livroId], (err, results) => {
    if (err) {
      console.error("Erro ao buscar informações do livro:", err);
      res.status(500).send("Erro ao buscar informações do livro");
      return;
    }
    if (results.length === 0) {
      res.status(404).send("Livro não encontrado");
      return;
    }
    const livro = results[0];

    // Buscar livros relacionados na mesma categoria, exceto o atual
    const sqlRelacionados =
      "SELECT * FROM books WHERE categoria = ? AND id != ? LIMIT 5";
    db.query(
      sqlRelacionados,
      [livro.categoria, livroId],
      (err, relacionados) => {
        if (err) {
          console.error("Erro ao buscar livros relacionados:", err);
          res.status(500).send("Erro ao buscar livros relacionados");
          return;
        }
        res.render("informacoes", { livro, destaques: relacionados });
      }
    );
  });
});

// Rota para tela de categoria
app.get("/categoria", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar livros:", err);
      res.status(500).send("Erro ao buscar livros");
      return;
    }

    // Agrupa os livros por categoria
    const categorias = {
      romance: [],
      ficcao: [],
      fantasia: [],
      biografia: [],
      historico: [],
      suspense: [],
      aventura: [],
      infantil: [],
    };

    result.forEach((livro) => {
      if (categorias[livro.categoria]) {
        categorias[livro.categoria].push(livro);
      }
    });

    res.render("categoria", { categorias });
  });
});

// Rota protegida para negociação
app.get("/negociar", checkAuth, (req, res) => {
  const whatsappNumber = req.session.user.whatsapp; // Assumindo que o número do WhatsApp está no objeto req.session.user
  res.redirect(`https://wa.me/55${whatsappNumber}`);
});

// Rota para exibir o formulário de edição de dados do usuário (protegida)
app.get("/editar-usuario", checkAuth, (req, res) => {
  res.render("editar_usuario", { user: req.session.user });
});

// Rota para processar o formulário de edição de dados do usuário (protegida)
app.post("/editar-usuario", checkAuth, async (req, res) => {
  const {
    nome,
    sobrenome,
    email,
    telefone,
    whatsapp,
    password,
    confirma_password,
  } = req.body;
  const userId = req.session.user.id;

  // Verifica se as senhas coincidem (se foram preenchidas)
  if (password && password !== confirma_password) {
    return res.status(400).send("As senhas não coincidem");
  }

  // Atualizar dados no banco de dados
  let sql =
    "UPDATE users SET nome = ?, sobrenome = ?, email = ?, telefone = ?, whatsapp = ?";
  const values = [nome, sobrenome, email, telefone, whatsapp];

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    sql += ", password = ?";
    values.push(hashedPassword);
  }

  sql += " WHERE id = ?";
  values.push(userId);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erro ao atualizar dados do usuário:", err);
      res.status(500).send("Erro ao atualizar dados do usuário");
      return;
    }

    // Atualiza os dados do usuário na sessão
    req.session.user.nome = nome;
    req.session.user.sobrenome = sobrenome;
    req.session.user.email = email;
    req.session.user.telefone = telefone;
    req.session.user.whatsapp = whatsapp;

    res.redirect("/usuario");
  });
});

// Rota para tela "Sobre"
app.get("/sobre", (req, res) => {
  res.render("tela_sobre");
});


// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
