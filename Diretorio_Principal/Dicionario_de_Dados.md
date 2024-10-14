# Dicionário de Dados  - Sistema de Troca e Venda de Livros (Book Store)

## Entidades e Relacionamentos

### Usuário
- **Descrição**: Entidade que representa cada pessoa que interage com o sistema, seja para comprar, vender, trocar livros ou moderar o conteúdo.
- **Relacionamentos**:
  - **Possui**: Livro - Um usuário pode cadastrar um ou mais livros no sistema para troca ou venda.
  - **Realiza**: Transação - Um usuário pode realizar diversas transações de troca, venda, doação ou empréstimo de livros.
  - **Está inscrito em**: Lista de Espera - Um usuário pode se inscrever em uma ou mais listas de espera para livros que não estão atualmente disponíveis.
  - **Recebe**: Notificação - Um usuário pode receber várias notificações sobre disponibilidade de livros e atualizações de transações.
  - **Gera**: Relatório - Os usuários com perfil de administrador podem gerar relatórios sobre transações e atividades do sistema.

### Livro
- **Descrição**: Entidade que representa cada livro que está disponível para venda, troca, doação ou empréstimo no sistema.
- **Relacionamentos**:
  - **Possui**: Transação - Cada livro está associado a uma ou mais transações realizadas pelos usuários.
  - **Está na lista de**: Lista de Espera - Um livro que não está disponível pode estar em uma lista de espera, aguardando que esteja novamente acessível para os usuários interessados.

### Transação
- **Descrição**: Entidade que representa as operações de compra, troca, doação ou empréstimo de livros realizadas no sistema.
- **Relacionamentos**:
  - **Envolve**: Livro - Cada transação está ligada a um ou mais livros.
  - **Realizada por**: Usuário - Cada transação é realizada por um usuário registrado no sistema.

### Lista de Espera
- **Descrição**: Entidade que representa uma lista de espera de livros que não estão disponíveis atualmente.
- **Relacionamentos**:
  - **Contém**: Livro - Cada lista de espera está associada a um ou mais livros que não estão disponíveis.
  - **Inscrição**: Usuário - Cada usuário pode se inscrever em uma lista de espera para receber notificações sobre a disponibilidade do livro.

### Notificação
- **Descrição**: Entidade que armazena informações sobre as notificações enviadas aos usuários do sistema.
- **Relacionamentos**:
  - **Enviada para**: Usuário - Cada notificação é enviada para um usuário específico.

### Relatório
- **Descrição**: Entidade que representa os relatórios gerados pelo sistema, disponíveis apenas para administradores.
- **Relacionamentos**:
  - **Gera**: Usuário - Cada relatório é gerado por um usuário com perfil de administrador.

## Atributos Detalhados

### Usuário
- **ID_Usuário**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador único do usuário no sistema.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: PK, NOT NULL, AUTO INCREMENT.
  - **Relacionamentos**: Usado como chave estrangeira em outras entidades para associar ações ao usuário.

- **Nome**
  - **Tipo de dado**: Varchar (100 bytes)
  - **Descrição**: Nome completo do usuário.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Email**
  - **Tipo de dado**: Varchar (100 bytes)
  - **Descrição**: Endereço de email do usuário, utilizado para login e comunicação.
  - **Formato**: `email@exemplo.com`
  - **Restrições**: NOT NULL, UNIQUE.

- **Senha**
  - **Tipo de dado**: Varchar (100 bytes)
  - **Descrição**: Senha do usuário, armazenada de forma segura (criptografada).
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Endereço**
  - **Tipo de dado**: Varchar (255 bytes)
  - **Descrição**: Endereço residencial do usuário, utilizado para envio de livros.
  - **Formato**: Texto, contendo rua, número, bairro, cidade, estado e CEP.
  - **Restrições**: NOT NULL.

- **Telefone**
  - **Tipo de dado**: Varchar (15 bytes)
  - **Descrição**: Número de telefone para contato.
  - **Formato**: `(XX) XXXXX-XXXX`
  - **Restrições**: NOT NULL.

- **Tipo**
  - **Tipo de dado**: Varchar (10 bytes)
  - **Descrição**: Define o perfil do usuário: "Admin" ou "Cliente".
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

### Livro
- **ID_Livro**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador único do livro no sistema.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: PK, NOT NULL, AUTO INCREMENT.
  - **Relacionamentos**: Associado a transações e listas de espera.

- **Título**
  - **Tipo de dado**: Varchar (255 bytes)
  - **Descrição**: Título do livro.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Autor**
  - **Tipo de dado**: Varchar (100 bytes)
  - **Descrição**: Nome do autor do livro.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **ISBN**
  - **Tipo de dado**: Varchar (13 bytes)
  - **Descrição**: Código ISBN do livro para identificação única.
  - **Formato**: 13 dígitos numéricos.
  - **Restrições**: NOT NULL, UNIQUE.

- **Ano_Publicacao**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Ano de publicação do livro.
  - **Formato**: `AAAA`
  - **Restrições**: NOT NULL.

- **Idioma**
  - **Tipo de dado**: Varchar (50 bytes)
  - **Descrição**: Idioma em que o livro foi publicado.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Estado**
  - **Tipo de dado**: Varchar (20 bytes)
  - **Descrição**: Estado físico do livro: "Novo", "Boa Condição", etc.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Disponibilidade**
  - **Tipo de dado**: Varchar (20 bytes)
  - **Descrição**: Disponibilidade do livro: "Disponível" ou "Indisponível".
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

### Transação
- **ID_Transacao**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador único da transação.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: PK, NOT NULL, AUTO INCREMENT.
  - **Relacionamentos**: Associado a usuários e livros.

- **ID_Usuário**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador do usuário que realizou a transação.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: FK, NOT NULL.
  - **Relacionamentos**: Relacionado à entidade Usuário.

- **ID_Livro**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador do livro envolvido na transação.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: FK, NOT NULL.
  - **Relacionamentos**: Relacionado à entidade Livro.

- **Tipo_Transacao**
  - **Tipo de dado**: Varchar (10 bytes)
  - **Descrição**: Tipo da transação: "Troca", "Venda", "Doação", "Empréstimo".
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Data_Transacao**
  - **Tipo de dado**: Datetime (8 bytes)
  - **Descrição**: Data e hora em que a transação foi realizada.
  - **Formato**: `yyyy-mm-dd hh:mm:ss`
  - **Restrições**: NOT NULL.

- **Estado_Transacao**
  - **Tipo de dado**: Varchar (15 bytes)
  - **Descrição**: Estado atual da transação: "Pendente", "Concluída", "Cancelada".
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

### Lista de Espera
- **ID_Lista_Espera**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador único da lista de espera.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: PK, NOT NULL, AUTO INCREMENT.
  - **Relacionamentos**: Associado a usuários e livros.

- **ID_Usuário**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador do usuário inscrito na lista de espera.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: FK, NOT NULL.
  - **Relacionamentos**: Relacionado à entidade Usuário.

- **ID_Livro**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador do livro associado à lista de espera.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: FK, NOT NULL.
  - **Relacionamentos**: Relacionado à entidade Livro.

- **Data_Entrada**
  - **Tipo de dado**: Datetime (8 bytes)
  - **Descrição**: Data e hora em que o usuário foi inscrito na lista de espera.
  - **Formato**: `yyyy-mm-dd hh:mm:ss`
  - **Restrições**: NOT NULL.

### Notificação
- **ID_Notificacao**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador único da notificação.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: PK, NOT NULL, AUTO INCREMENT.
  - **Relacionamentos**: Associado a um usuário.

- **ID_Usuário**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador do usuário que receberá a notificação.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: FK, NOT NULL.
  - **Relacionamentos**: Relacionado à entidade Usuário.

- **Mensagem**
  - **Tipo de dado**: Varchar (255 bytes)
  - **Descrição**: Conteúdo da notificação enviada ao usuário.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Data_Envio**
  - **Tipo de dado**: Datetime (8 bytes)
  - **Descrição**: Data e hora em que a notificação foi enviada.
  - **Formato**: `yyyy-mm-dd hh:mm:ss`
  - **Restrições**: NOT NULL.

- **Lida**
  - **Tipo de dado**: Boolean (1 byte)
  - **Descrição**: Indica se a notificação foi lida pelo usuário: "Sim" ou "Não".
  - **Formato**: Booleano.
  - **Restrições**: NOT NULL.

### Relatório
- **ID_Relatorio**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador único do relatório.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: PK, NOT NULL, AUTO INCREMENT.
  - **Relacionamentos**: Associado a um usuário administrador.

- **ID_Usuario**
  - **Tipo de dado**: Inteiro (4 bytes)
  - **Descrição**: Identificador do usuário (administrador) que gerou o relatório.
  - **Formato**: Número inteiro positivo.
  - **Restrições**: FK, NOT NULL.
  - **Relacionamentos**: Relacionado à entidade Usuário.

- **Tipo_Relatorio**
  - **Tipo de dado**: Varchar (50 bytes)
  - **Descrição**: Tipo do relatório: "Transações", "Livros Disponíveis", etc.
  - **Formato**: Texto.
  - **Restrições**: NOT NULL.

- **Data_Criacao**
  - **Tipo de dado**: Datetime (8 bytes)
  - **Descrição**: Data e hora em que o relatório foi gerado.
  - **Formato**: `yyyy-mm-dd hh:mm:ss`
  - **Restrições**: NOT NULL.

## Restrições e Regras de Integridade

- **Email do Usuário**: Deve ser único no sistema e ter um formato válido.
- **Senha do Usuário**: Deve ser armazenada de forma criptografada para garantir a segurança dos dados.
- **ISBN do Livro**: Deve ser único no sistema para garantir a identificação correta de cada livro.
- **Transações**: Não podem ser realizadas se o livro estiver marcado como "Indisponível".
- **Notificações**: Cada notificação enviada deve ser registrada com a data e um indicador de leitura para controle.
