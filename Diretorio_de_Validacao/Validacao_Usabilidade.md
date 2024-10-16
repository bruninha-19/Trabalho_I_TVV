## Avaliação Heurística

**Autores**: Wellython Salmo, Carlos Breno, Bruna Miranda, Julia Fárias

### Descrição
A **avaliação heurística** é uma técnica de inspeção de usabilidade usada para identificar problemas de interface em um sistema. Ela se baseia nas 10 heurísticas de usabilidade de Jakob Nielsen, que são princípios de design fundamentais para garantir a boa experiência do usuário. Nesta avaliação, foram analisados aspectos como visibilidade do status do sistema, controle do usuário, consistência e prevenção de erros.

### Tabela de Heurísticas

| **ID** | **Heurística**                                      | **Descrição**                                                                                                     |
|--------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 1      | **Visibilidade do status do sistema**               | O sistema deve manter os usuários sempre informados sobre o que está acontecendo, oferecendo feedback apropriado e no tempo correto. |
| 2      | **Compatibilidade entre o sistema e o mundo real**  | O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares, em vez de jargões técnicos.                |
| 3      | **Controle e liberdade do usuário**                 | Os usuários frequentemente escolhem funções por engano e precisam de uma maneira fácil de desfazer ou cancelar ações.                  |
| 4      | **Consistência e padrões**                          | Os usuários não devem se perguntar se diferentes palavras, situações ou ações significam a mesma coisa. Seguir convenções de plataforma. |
| 5      | **Prevenção de erros**                              | Evitar que erros aconteçam. Melhor do que fornecer boas mensagens de erro é um design cuidadoso que previne erros antes que ocorram.     |
| 6      | **Reconhecimento em vez de lembrança**              | Minimizar a carga de memória do usuário tornando visíveis os objetos, ações e opções. O usuário não deve ter que lembrar informações entre diferentes partes do sistema. |
| 7      | **Flexibilidade e eficiência de uso**               | O sistema deve permitir que usuários experientes usem atalhos e aceleradores, possibilitando maior eficiência para os usuários avançados. |
| 8      | **Estética e design minimalista**                   | O design deve conter apenas as informações essenciais, sem sobrecarregar o usuário com elementos irrelevantes ou raramente necessários.  |
| 9      | **Ajudar os usuários a reconhecer, diagnosticar e corrigir erros** | As mensagens de erro devem ser expressas em uma linguagem simples, indicando claramente o problema e sugerindo soluções.                |
| 10     | **Ajuda e documentação**                            | Mesmo que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação acessível.                        |

---

## Avaliação Heurística - Wellython Salmo


---


| **Heurística**                          | **Descrição da Heurística**                                                                                     | **Problema Identificado**                                                                                | **Local do Problema** | **Gravidade (1-4)** | **Solução Sugerida**                                                                                     |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------|---------------------|----------------------------------------------------------------------------------------------------------|
| **1. Visibilidade do status do sistema** | O sistema deve sempre manter o usuário informado sobre o que está acontecendo, com feedback apropriado e no tempo. | O sistema não fornece feedback visível para o usuário sobre o andamento de ações, como carregamentos ou processamentos. | Todas as telas       | 4                   | Implementar indicadores de status como barras de progresso, ícones de carregamento e mensagens de feedback em tempo real para ações importantes. |
| **2. Compatibilidade entre o sistema e o mundo real** | O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares.                        |                                                                                                           |                      |                     |                                                                                                              |
| **3. Controle e liberdade do usuário**   | Os usuários frequentemente escolhem funções por engano e precisam de uma “saída de emergência” fácil.              | O sistema não oferece a opção de cancelar ações em progresso ou voltar para uma etapa anterior nas telas.   | Todas as telas       | 4                   | Incluir botões de "Cancelar" e "Voltar" em todas as telas, permitindo que o usuário cancele ou retorne para ajustar ações sem comprometer o processo. |
| **4. Consistência e padrões**            | Os usuários não devem ter que se perguntar se diferentes palavras, situações ou ações significam a mesma coisa.    |                                                                                                           |                      |                     |                                                                                                              |
| **5. Prevenção de erros**                | Evitar que erros aconteçam ao invés de apenas fornecer boas mensagens de erro.                                     |                                                                                                           |                      |                     |                                                                                                              |
| **6. Reconhecimento em vez de recordação**| Minimizar a carga de memória do usuário, tornando visíveis os objetos, ações e opções.                             | O sistema não oferece elementos visuais suficientes para ajudar o usuário a se lembrar de onde está ou do que já fez, o que aumenta a carga cognitiva. | Todas as telas       | 2                   | Adicionar elementos como breadcrumbs (trilhas de navegação), dicas contextuais e sugestões automáticas para facilitar a navegação e reduzir a necessidade de memorização por parte do usuário. |
| **7. Flexibilidade e eficiência de uso** | O sistema deve permitir que usuários experientes usem atalhos e aceleradores para maior eficiência.                | O sistema não possui atalhos ou opções de navegação rápida, o que dificulta a eficiência para usuários avançados. | Todas as telas       | 3                   | Implementar atalhos de teclado e navegação rápida para ações comuns, permitindo que usuários mais experientes realizem tarefas de forma mais ágil. |
| **8. Estética e design minimalista**     | Diálogos e telas não devem conter informações irrelevantes ou raramente usadas.                                    |                                                                                                           |                      |                     |                                                                                                              |
| **9. Ajudar os usuários a reconhecerem, diagnosticar e corrigir erros** | As mensagens de erro devem ser expressas em linguagem simples e sugerir soluções.                                  |                                                                                                           |                      |                     |                                                                                                              |
| **10. Ajuda e Documentação**             | Mesmo que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação.            | O sistema não oferece uma seção de ajuda ou documentação clara para orientar os usuários em caso de dúvidas. | Todas as telas       | 3                   | Implementar uma seção de ajuda acessível diretamente do sistema, com FAQs, tutoriais e documentação detalhada sobre as funcionalidades. |

---

## Avaliação Heurística - Carlos Breno
## Avaliação Heurística - Bruna Miranda
## Avaliação Heurística - Julia Fárias
