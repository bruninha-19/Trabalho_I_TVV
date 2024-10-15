---

# Modelo C4 - Book Store System

O modelo C4 (Context, Container, Component, Code) é uma abordagem visual para descrever a arquitetura de software. Ele é dividido em quatro níveis, que ajudam a fornecer uma visão detalhada do sistema em diferentes perspectivas.

---

### 1. Diagrama de Contexto

O diagrama de contexto fornece uma visão geral do sistema e como ele interage com atores externos. Os principais atores externos do sistema são:

- **Usuários**: Pessoas que utilizam o sistema para comprar, vender ou trocar livros.
- **Banco de Dados**: Armazena informações sobre usuários e livros.
- **Sistema de Pagamento**: Facilita transações financeiras entre os usuários.

**Diagrama de Contexto**  
![BookStore- DiagramContext](https://github.com/user-attachments/assets/d560e897-00d2-48ed-8c9b-f5d8e478158c)

---

### 2. Diagrama de Contêiner

O diagrama de contêiner descreve a aplicação em um nível mais detalhado, mostrando como diferentes contêineres (aplicações ou serviços) interagem entre si. Cada contêiner representa uma parte do sistema, como a aplicação web, o banco de dados, ou a API.

**Diagrama de Contêiner**  
![BookStore- DiagramContainers](https://github.com/user-attachments/assets/ed15ff36-74fd-4422-942c-86a5fe7bab87)

---

### 3. Diagrama de Componente

O diagrama de componente detalha cada contêiner, mostrando os componentes internos e suas interações. Aqui estão dois exemplos de componentes dentro do sistema Book Store:

- **Diagrama da API**: Mostra os componentes que formam a API do sistema e suas interações.
  
  **Diagrama da API**  
  ![BookStore- DiagramAPIComponents](https://github.com/user-attachments/assets/e515ecfb-6601-4bc5-beb5-5c87b1352363)

- **Diagrama do WebApp**: Exibe os componentes da aplicação web e suas relações.

  **Diagrama do WebApp**  
  ![BookStore- DiagramWebAppComponents](https://github.com/user-attachments/assets/95d0455c-a6b1-4a9f-842a-7a024584e0bc)

---

### 4. Diagrama de Código

O diagrama de código fornece uma visão detalhada das classes e suas interações, representando a implementação de cada componente. Ele mostra como os componentes são implementados em nível de código, incluindo classes, métodos e interações entre elas.

**Diagrama de Código**  
![BookStore- DiagramCodeSystem](https://github.com/user-attachments/assets/c05bb03e-4c85-47de-abee-7b25f57148ff)

---
