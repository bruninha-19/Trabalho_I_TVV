---

# Diagrama de Classes - Book Store

### Estrutura do Diagrama:

Este diagrama de classes modela a arquitetura do sistema **Book Store**, que permite compra, venda e troca de livros, além de funcionalidades de gerenciamento de usuários e transações.


![Diagrama de Classes](https://drive.google.com/uc?export=view&id=1olRa39JMaRGpBY0ZYmnknJ00-Kxy6blh)


### Principais Classes e suas Interações:

1. **Usuário**
   - **Atributos**: `id`, `nome`, `email`, `senha`
   - **Métodos**:
     - `registrar()`: Permite o registro de um novo usuário.
     - `login()`: Método para login no sistema.
     - `procurarLivros()`: Busca por livros no sistema.

   A classe **Usuário** é a base para outros tipos de usuários no sistema, como **Usuário Registrado** e **Administrador**.

2. **Usuário Registrado**
   - **Atributos**: `livrosCadastrados` (lista de livros do usuário)
   - **Métodos**:
     - `adicionarLivroParaVenda()`: Adiciona um livro à venda.
     - `adicionarLivroParaTroca()`: Adiciona um livro para troca.
     - `compartilharLivro()`, `trocarLivro()`, `gerenciarPerfil()`: Métodos de interação com livros e gerenciamento de perfil.

   **Usuário Registrado** herda de **Usuário**, e pode realizar ações adicionais como vender e trocar livros.

3. **Administrador**
   - **Atributos**: `permissoesAdmin` (lista de permissões de administrador)
   - **Métodos**:
     - `gerenciarUsuarios()`: Método para gerenciar os usuários do sistema.
     - `gerenciarLivrosNoSistema()`: Método para gerenciar o catálogo de livros.
     - `gerarRelatorios()`: Cria relatórios sobre as atividades no sistema.

   **Administrador** é uma subclasse de **Usuário**, com permissões adicionais para gerenciar o sistema.

4. **Perfil**
   - **Atributos**: `usuario`, `informacoesPessoais`
   - **Métodos**:
     - `editarInformacoes()`: Permite ao usuário atualizar suas informações de perfil.

   O **Perfil** é associado a um **Usuário**, permitindo que ele gerencie suas informações pessoais.

5. **Livro**
   - **Atributos**: `id`, `titulo`, `autor`, `descricao`, `estado`, `isbn`
   
   O **Livro** é um objeto central, representando os livros cadastrados para venda ou troca no sistema.

6. **LivroVenda**
   - **Atributos**: `preco`, `disponibilidade`
   - **Métodos**:
     - `comprar()`: Permite que um usuário compre um livro.

   **LivroVenda** está relacionado a **Livro**, representando a possibilidade de venda de livros no sistema.

7. **LivroTroca**
   - **Atributos**: `condicaoTroca`
   - **Métodos**:
     - `iniciarTroca()`: Inicia uma troca de livros.
     - `confirmarTroca()`, `visualizarHistoricoTroca()`: Gerencia o processo de troca.

   **LivroTroca** também está relacionado a **Livro**, mas voltado para a troca em vez de venda.

8. **Transação**
   - **Atributos**: `id`, `livro`, `usuarioComprador`, `data`, `status`
   - **Métodos**:
     - `processarTransacao()`: Processa uma transação (compra ou troca).
     - `atualizarStatus()`: Atualiza o status de uma transação.

   **Transação** é responsável por gerenciar as operações de compra ou troca no sistema, associada a **Usuário** e **Livro**.

9. **SistemaPagamento**
   - **Atributos**: `provedor`
   - **Métodos**:
     - `realizarPagamento()`: Realiza a operação de pagamento.

   **SistemaPagamento** está diretamente relacionado às transações de venda, permitindo a finalização das compras.

10. **ServicoNotificacao**
    - **Atributos**: `provedor`
    - **Métodos**:
      - `enviarNotificacao()`: Envia notificações sobre eventos importantes para os usuários.

    O **ServicoNotificacao** envia alertas e informações relevantes, como a conclusão de transações.

---
