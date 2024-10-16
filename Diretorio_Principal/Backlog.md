# Backlog do Produto

## História 1: Cadastro de Usuário
*Descrição:*  
Como usuário não registrado, quero me cadastrar no sistema para ter acesso à plataforma de troca e venda de livros.

*Regras de Negócio:*  
- O sistema deve validar que o e-mail fornecido seja único e siga o formato correto.  
- As senhas devem ter no mínimo 8 caracteres e incluir letras e números.

*Critérios de Aceitação:*  
- O sistema deve permitir o cadastro via e-mail e senha.  
- O usuário deverá receber uma confirmação de cadastro por e-mail.  
- O sistema deve exibir mensagens de erro caso o e-mail já esteja em uso ou o formato da senha seja inválido.  
- O usuário deve ser capaz de fazer login após o cadastro.

---

## História 2: Login e Logout
*Descrição:*  
Como usuário cadastrado, quero fazer login e logout para acessar e sair do sistema de forma segura.

*Regras de Negócio:*  
- O usuário deve ser autenticado apenas com as credenciais válidas (e-mail e senha).  
- A sessão deve expirar automaticamente após um período de inatividade (30 minutos).

*Critérios de Aceitação:*  
- O sistema deve autenticar o usuário via email e senha.  
- O sistema deve permitir o logout a qualquer momento.  
- O sistema deve manter o usuário logado durante o tempo de sessão ativa.

---

## História 3: Adicionar Livros
*Descrição:*  
Como usuário registrado, quero adicionar livros para troca ou venda para disponibilizar meu acervo para outros usuários.

*Regras de Negócio:*  
- O usuário deve preencher todos os campos obrigatórios (título, autor, ISBN, estado) ao cadastrar um livro.  
- Cada livro deve ser associado a um único dono.

*Critérios de Aceitação:*  
- O sistema deve permitir que o usuário cadastre um livro com título, autor, ISBN, estado (novo/usado), e descrição.  
- O livro deve ser listado no catálogo após ser adicionado.  
- O sistema deve validar a existência de um ISBN válido para o livro.

---

## História 4: Buscar Livros
*Descrição:*  
Como usuário, eu quero buscar livros por filtros específicos para encontrar facilmente os livros de meu interesse.

*Regras de Negócio:*  
- O sistema deve permitir que os usuários busquem livros apenas com base nos filtros disponíveis (título, autor, ISBN, estado, etc.).

*Critérios de Aceitação:*  
- O sistema deve permitir a busca por título, autor, ISBN, estado do livro e categorias.  
- O resultado da busca deve exibir uma lista com os livros disponíveis, ordenados por relevância.

---

## História 5: Comprar ou Trocar Livros
*Descrição:*  
Como usuário registrado, eu quero comprar ou propor uma troca de livros para adquirir novos títulos de forma prática.

*Regras de Negócio:*  
- As transações de compra só podem ser realizadas se ambas as partes forem autenticadas no sistema.  
- Uma troca só pode ser completada se ambas as partes concordarem com os termos.

*Critérios de Aceitação:*  
- O sistema deve permitir a proposta de troca ou a compra de um livro.  
- O sistema deve notificar o usuário dono do livro sobre a proposta de troca.  
- O sistema deve registrar a transação após a facilidade de compra ou troca.

---

## História 6: Avaliar Transações
*Descrição:*  
Como usuário, quero avaliar as transações e deixar feedback para ajudar outros usuários com minha experiência.

*Regras de Negócio:*  
- A avaliação só pode ser feita após a conclusão da transação.  
- O feedback deve ser público e condicionado ao perfil do usuário.

*Critérios de Aceitação:*  
- O sistema deve permitir que o usuário avalie uma transação após sua conclusão.  
- O feedback deve ser visível para outros usuários.  
- O sistema deve exibir uma média de avaliações de cada usuário.

---

## História 7: Receber Notificações
*Descrição:*  
Como usuário, quero receber notificações sobre livros de interesse para ser avisado quando um livro estiver disponível.

*Regras de Negócio:*  
- O usuário deve ativar uma notificação de interesse para cada livro.  
- As notificações não podem ser enviadas com frequência superior a uma vez por dia.

*Critérios de Aceitação:*  
- O sistema deve notificar o usuário por e-mail ou via sistema quando um livro de interesse estiver disponível.  
- O usuário deve poder ativar ou desativar notificações para livros específicos.

---

## História 8: Gerenciar Perfil
*Descrição:*  
Como usuário registrado, quero editar minhas informações de perfil para manter meus dados atualizados.

*Regras de Negócio:*  
- O sistema deve permitir alterações apenas após a validação de segurança (confirmação de senha ou autenticação).

*Critérios de Aceitação:*  
- O sistema deve permitir a edição de dados como nome, email, senha e histórico de transações.  
- O sistema deve atualizar as informações do usuário após confirmação.  
- O sistema deve exibir mensagens de confirmação e de erros.

---

## História 9: Visualizar Histórico de Transações
*Descrição:*  
Como usuário registrado, quero visualizar meu histórico de compras e trocas para acompanhar minhas transações realizadas.

*Regras de Negócio:*  
- Apenas o usuário deve ter acesso ao seu histórico completo de transações.

*Critérios de Aceitação:*  
- O sistema deve exibir o histórico completo de transações (compra, venda e troca).  
- O usuário deve poder filtrar o histórico por data e tipo de transação.

---

## História 10: Moderação de Conteúdo (Administrador)
*Descrição:*  
Como administrador, quero moderar o conteúdo do sistema para garantir que apenas livros e transações legítimas sejam realizados.

*Regras de Negócio:*  
- O administrador tem poder para remover conteúdos que violem os termos de uso do sistema.  
- Todo conteúdo removido deve ser registrado no log de atividades do administrador.

*Critérios de Aceitação:*  
- O sistema deve permitir que o administrador remova livros ou usuários.  
- O administrador deve ser capaz de visualizar relatórios sobre transações suspeitas.

---

## História 11: Gerenciar Usuários (Administrador)
*Descrição:*  
Como administrador, eu quero gerenciar os usuários do sistema para garantir um ambiente seguro e organizado.

*Regras de Negócio:*  
- Somente administradores podem suspender ou remover usuários do sistema.  
- Todos os banimentos e exclusões devem ser registrados e associados a uma justificativa.

*Critérios de Aceitação:*  
- O sistema deve permitir ao administrador visualizar, editar e remover contas de usuários.  
- O sistema deve gerar relatórios de usuários ativos e inativos.

---

## História 12: Gerar Relatórios (Administrador)
*Descrição:*  
Como administrador, quero gerar relatórios sobre transações e atividades para monitorar o uso do sistema e tomar decisões estratégicas.

*Regras de Negócio:*  
- Os relatórios devem ser gerados apenas por administradores e para períodos de até 12 meses.

*Critérios de Aceitação:*  
- O sistema deve permitir a geração de relatórios sobre vendas, trocas e avaliações.  
- O administrador deve poder exportar os relatórios em formato PDF ou CSV.
