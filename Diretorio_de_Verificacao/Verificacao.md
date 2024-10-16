
# Atividades de Verificação de Defeitos

### Issue 1: Erro na moderação de conteúdo pelo administrador.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-001                                                                           |
| **Descrição**            | O administrador não consegue moderar corretamente os livros e transações, resultando na presença de conteúdo inadequado. |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Administração                                                                |
| **Artefato**             | Moderação de Conteúdo                                                                  |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Alta (High)                                                                            |
| **Severidade**           | Crítica (Critical)                                                                     |
| **Probabilidade**        | Alta (High)                                                                            |
| **Efeito**               | Conteúdos e transações inadequadas afetam a experiência dos usuários e a integridade do sistema. |
| **Tipo**                 | Lógica                                                                                 |
| **Modo**                 | Implementação incompleta na atualização de status de conteúdos moderados               |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste Funcional                                                                        |
| **Referência(s) de falha**| ID-001, Conteúdo Inadequado                                                           |
| **Referência de Alteração**| CR-2024-010                                                                         |
| **Disposição**           | Correção planejada para versão v1.1                                                    |

---

### Issue 2: Erro ao gerenciar usuários no sistema.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-002                                                                           |
| **Descrição**            | Falhas ao aplicar banimento ou restrições em usuários cadastrados.                     |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Administração                                                                |
| **Artefato**             | Gerenciamento de Usuários                                                              |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Alta (High)                                                                            |
| **Severidade**           | Alta (High)                                                                            |
| **Probabilidade**        | Média (Medium)                                                                         |
| **Efeito**               | Usuários inadequados podem continuar ativos no sistema.                                |
| **Tipo**                 | Lógica                                                                                 |
| **Modo**                 | Falha na aplicação de restrições de conta                                              |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Inspeção                                                                               |
| **Referência(s) de falha**| ID-002, Ações Não Aplicadas                                                           |
| **Referência de Alteração**| CR-2024-002                                                                         |
| **Disposição**           | Correção incluída na versão v2.1                                                       |

---

### Issue 3: Relatórios de transações não estão sendo gerados.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-003                                                                           |
| **Descrição**            | Relatórios de transações e atividades não estão sendo criados corretamente.            |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Relatórios                                                                   |
| **Artefato**             | Geração de Relatórios                                                                  |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Alta (High)                                                                            |
| **Severidade**           | Alta (High)                                                                            |
| **Probabilidade**        | Alta (High)                                                                            |
| **Efeito**               | Falta de relatórios impacta a tomada de decisões estratégicas.                         |
| **Tipo**                 | Lógica                                                                                 |
| **Modo**                 | Implementação incompleta na criação de relatórios                                      |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste Funcional                                                                        |
| **Referência(s) de falha**| ID-003, Falhas em Relatórios                                                          |
| **Referência de Alteração**| CR-2024-003                                                                         |
| **Disposição**           | Será resolvido na versão v2.1                                                          |

---

### Issue 4: Falha ao editar informações de perfil de outros usuários.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-004                                                                           |
| **Descrição**            | Alterações de perfil não estão sendo salvas corretamente.                              |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Administração                                                                |
| **Artefato**             | Gerenciamento de Perfis                                                                |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Média (Medium)                                                                         |
| **Severidade**           | Alta (High)                                                                            |
| **Probabilidade**        | Média (Medium)                                                                         |
| **Efeito**               | Perfis não são atualizados corretamente, comprometendo dados dos usuários.             |
| **Tipo**                 | Lógica                                                                                 |
| **Modo**                 | Falha na gravação de dados no banco                                                    |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste Funcional                                                                        |
| **Referência(s) de falha**| ID-004, Inconsistências de Perfil                                                     |
| **Referência de Alteração**| CR-2024-004                                                                         |
| **Disposição**           | Corrigido na versão v2.1                                                               |

---

### Issue 5: Usuários não conseguem visualizar histórico de trocas.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-005                                                                           |
| **Descrição**            | Usuários enfrentam erros ao tentar visualizar o histórico de trocas.                   |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Histórico de Transações                                                      |
| **Artefato**             | Visualização de Histórico                                                              |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Média (Medium)                                                                         |
| **Severidade**           | Média (Medium)                                                                         |
| **Probabilidade**        | Média (Medium)                                                                         |
| **Efeito**               | Usuários não conseguem acompanhar suas trocas realizadas.                              |
| **Tipo**                 | Interface                                                                              |
| **Modo**                 | Erro de carregamento na interface de histórico                                         |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste Funcional                                                                        |
| **Referência(s) de falha**| ID-005, Histórico Inacessível                                                         |
| **Referência de Alteração**| CR-2024-005                                                                         |
| **Disposição**           | Corrigido na versão v2.1                                                               |

---

### Issue 6: Falha ao adicionar livros para troca ou venda.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-006                                                                           |
| **Descrição**            | Erros no salvamento de livros adicionados para troca ou venda.                         |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Adição de Livros                                                             |
| **Artefato**             | Cadastro de Livros                                                                     |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Alta (High)                                                                            |
| **Severidade**           | Alta (High)                                                                            |
| **Probabilidade**        | Alta (High)                                                                            |
| **Efeito**               | Usuários não conseguem disponibilizar livros para troca ou venda.                      |
| **Tipo**                 | Lógica                                                                                 |
| **Modo**                 | Falha no salvamento de dados no banco                                                  |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste Funcional                                                                        |
| **Referência(s) de falha**| ID-006, Erro ao Adicionar Livros                                                      |
| **Referência de Alteração**| CR-2024-006                                                                         |
| **Disposição**           | Corrigido na versão v2.1                                                               |

---

### Issue 7: Notificações não estão sendo enviadas para transações.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-007                                                                           |
| **Descrição**            | O serviço de notificação não está funcionando corretamente, impedindo que alertas de transações sejam enviados aos usuários. |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Notificações                                                                 |
| **Artefato**             | Envio de Notificações                                                                  |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Alta (High)                                                                            |
| **Severidade**           | Média (Medium)                                                                         |
| **Probabilidade**        | Alta (High)                                                                            |
| **Efeito**               | Os usuários não são notificados sobre suas atividades, o que pode gerar insatisfação e confusão. |
| **Tipo**                 | Comunicação                                                                            |
| **Modo**                 | Falha na integração com o serviço de notificações                                      |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste de Integração                                                                    |
| **Referência(s) de falha**| ID-007, falha nas Notificações                                                        |
| **Referência de Alteração**| CR-2024-007                                                                         |
| **Disposição**           | Corrigido na versão v2.1                                                               |

---

### Issue 8: Falha ao processar pagamentos no sistema.

| **Atributo**            | **Exemplo preenchido**                                                                 |
|-------------------------|----------------------------------------------------------------------------------------|
| **ID de Defeito**        | DEF-2024-008                                                                           |
| **Descrição**            | O sistema de pagamento não está processando transações corretamente, impedindo a conclusão de compras. |
| **Status**               | Aberto (Open)                                                                          |
| **Ativo**                | Módulo de Pagamentos                                                                   |
| **Artefato**             | Processamento de Transações                                                            |
| **Versão detectada**     | v2.0                                                                                   |
| **Versão corrigida**     | v2.1                                                                                   |
| **Prioridade**           | Crítica (Critical)                                                                     |
| **Severidade**           | Crítica (Critical)                                                                     |
| **Probabilidade**        | Alta (High)                                                                            |
| **Efeito**               | Transações financeiras não são concluídas, afetando a receita da plataforma e a confiança dos usuários. |
| **Tipo**                 | Lógica                                                                                 |
| **Modo**                 | Falha na integração com o gateway de pagamento                                         |
| **Atividade de Inserção**| Codificação (Programming)                                                              |
| **Atividade de Detecção**| Teste de Integração                                                                    |
| **Referência(s) de falha**| ID-008, Transações Falhas                                                             |
| **Referência de Alteração**| CR-2024-008                                                                         |
| **Disposição**           | Corrigido na versão v2.1                                                               |

---

Agora todas as tabelas estão com o mesmo formato e número de colunas, mantendo consistência e clareza.
