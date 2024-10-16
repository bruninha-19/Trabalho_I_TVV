# Dicionário de Dados - Sistema de Troca e Venda de Livros (Book Store)

## Dicionário de Dados em Tabela (Formato GitHub)

| Nome do Dado       | Tipo de Dado       | Descrição                                     | Formato                      | Restrições                          |
|--------------------|--------------------|-----------------------------------------------|------------------------------|-------------------------------------|
| ID_Usuário         | Inteiro (4 bytes)  | Identificador único do usuário no sistema.    | Número inteiro positivo      | PK, NOT NULL, AUTO INCREMENT       |
| Nome               | Varchar (100 bytes)| Nome completo do usuário.                     | Texto                        | NOT NULL                            |
| Email              | Varchar (100 bytes)| Endereço de email do usuário.                 | email@exemplo.com            | NOT NULL, UNIQUE                    |
| Senha              | Varchar (100 bytes)| Senha do usuário, armazenada de forma segura. | Texto                        | NOT NULL                            |
| Endereço           | Varchar (255 bytes)| Endereço residencial do usuário.              | Texto, contendo rua, número, bairro, cidade, estado e CEP | NOT NULL                            |
| Telefone           | Varchar (15 bytes) | Número de telefone para contato.              | (XX) XXXXX-XXXX              | NOT NULL                            |
| Tipo               | Varchar (10 bytes) | Define o perfil do usuário: "Admin" ou "Cliente". | Texto                    | NOT NULL                            |
| ID_Livro           | Inteiro (4 bytes)  | Identificador único do livro no sistema.      | Número inteiro positivo      | PK, NOT NULL, AUTO INCREMENT       |
| Título             | Varchar (255 bytes)| Título do livro.                              | Texto                        | NOT NULL                            |
| Autor              | Varchar (100 bytes)| Nome do autor do livro.                       | Texto                        | NOT NULL                            |
| ISBN               | Varchar (13 bytes) | Código ISBN do livro para identificação única.| 13 dígitos numéricos         | NOT NULL, UNIQUE                    |
| Ano_Publicacao     | Inteiro (4 bytes)  | Ano de publicação do livro.                   | AAAA                         | NOT NULL                            |
| Idioma             | Varchar (50 bytes) | Idioma em que o livro foi publicado.          | Texto                        | NOT NULL                            |
| Estado             | Varchar (20 bytes) | Estado físico do livro: "Novo", "Boa Condição", etc. | Texto                    | NOT NULL                            |
| Disponibilidade    | Varchar (20 bytes) | Disponibilidade do livro: "Disponível" ou "Indisponível". | Texto                   | NOT NULL                            |
| ID_Transacao       | Inteiro (4 bytes)  | Identificador único da transação.             | Número inteiro positivo      | PK, NOT NULL, AUTO INCREMENT       |
| ID_Usuário         | Inteiro (4 bytes)  | Identificador do usuário que realizou a transação. | Número inteiro positivo  | FK, NOT NULL                       |
| ID_Livro           | Inteiro (4 bytes)  | Identificador do livro envolvido na transação.| Número inteiro positivo      | FK, NOT NULL                       |
| Tipo_Transacao     | Varchar (10 bytes) | Tipo da transação: "Troca", "Venda", "Doação", "Empréstimo". | Texto               | NOT NULL                            |
| Data_Transacao     | Datetime (8 bytes) | Data e hora em que a transação foi realizada. | yyyy-mm-dd hh:mm:ss          | NOT NULL                            |
| Estado_Transacao   | Varchar (15 bytes) | Estado atual da transação: "Pendente", "Concluída", "Cancelada". | Texto             | NOT NULL                            |
| ID_Lista_Espera    | Inteiro (4 bytes)  | Identificador único da lista de espera.       | Número inteiro positivo      | PK, NOT NULL, AUTO INCREMENT       |
| Data_Entrada       | Datetime (8 bytes) | Data e hora em que o usuário foi inscrito na lista de espera. | yyyy-mm-dd hh:mm:ss     | NOT NULL                            |
| ID_Notificacao     | Inteiro (4 bytes)  | Identificador único da notificação.           | Número inteiro positivo      | PK, NOT NULL, AUTO INCREMENT       |
| Mensagem           | Varchar (255 bytes)| Conteúdo da notificação enviada ao usuário.   | Texto                        | NOT NULL                            |
| Data_Envio         | Datetime (8 bytes) | Data e hora em que a notificação foi enviada. | yyyy-mm-dd hh:mm:ss          | NOT NULL                            |
| Lida               | Boolean (1 byte)   | Indica se a notificação foi lida pelo usuário: "Sim" ou "Não". | Booleano                | NOT NULL                            |
| ID_Relatorio       | Inteiro (4 bytes)  | Identificador único do relatório.             | Número inteiro positivo      | PK, NOT NULL, AUTO INCREMENT       |
| Tipo_Relatorio     | Varchar (50 bytes) | Tipo do relatório: "Transações", "Livros Disponíveis", etc. | Texto               | NOT NULL                            |
| Data_Criacao       | Datetime (8 bytes) | Data e hora em que o relatório foi gerado.    | yyyy-mm-dd hh:mm:ss          | NOT NULL                            |

## Restrições e Regras de Integridade

- **Email do Usuário**: Deve ser único no sistema e ter um formato válido.
- **Senha do Usuário**: Deve ser armazenada de forma criptografada para garantir a segurança dos dados.
- **ISBN do Livro**: Deve ser único no sistema para garantir a identificação correta de cada livro.
- **Transações**: Não podem ser realizadas se o livro estiver marcado como "Indisponível".
- **Notificações**: Cada notificação enviada deve ser registrada com a data e um indicador de leitura para controle.
