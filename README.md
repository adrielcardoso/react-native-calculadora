Plano de Teste
Objetivo do Teste
O objetivo é validar as funcionalidades básicas de uma calculadora, garantindo que os resultados das operações sejam precisos e que a interface funcione corretamente.
Escopo
A calculadora deve realizar as seguintes operações:
Adição, subtração, multiplicação e divisão.
Validação de entradas inválidas, como divisão por zero.
Tipos de Testes
Teste Funcional
Verifica se as operações matemáticas retornam resultados precisos.
Exemplo: Validar se a entrada "2 + 3" gera o resultado "5".
Teste de Interface do Usuário (UI)
Avalia a interação do usuário com os botões e o visor.
Exemplo: Verificar se pressionar "=" exibe o resultado esperado.

Casos de Teste

Caso de Teste 1: Adição Simples
Objetivo: Garantir que a calculadora realiza adições corretamente.
Passos:
Inserir "2".
Pressionar o botão "+".
Inserir "3".
Pressionar o botão "=".
Resultado Esperado: O visor exibe "5".

Caso de Teste 2: Validação de Divisão por Zero
Objetivo: Garantir que a calculadora lida adequadamente com divisões por zero.
Passos:
Inserir "10".
Pressionar o botão "÷".
Inserir "0".
Pressionar o botão "=".
Resultado Esperado: O visor exibe "Erro: divisão por zero".

Caso de Teste 3: Multiplicação
Objetivo: Validar a funcionalidade de multiplicação.
Passos:
Inserir "6".
Pressionar o botão "×".
Inserir "7".
Pressionar o botão "=".
Resultado Esperado: O visor exibe "42".

Caso de Teste 4: Operações Encadeadas
Objetivo: Garantir que a calculadora respeita a ordem de precedência das operações.
Passos:
Inserir "5".
Pressionar o botão "+".
Inserir "3".
Pressionar o botão "×".
Inserir "2".
Pressionar o botão "=".
Resultado Esperado: O visor exibe "11".

Resultados dos Testes
Caso de Teste
Status
Observações
Adição Simples
Aprovado
O resultado exibido foi correto.
Validação de Divisão por Zero
Aprovado
A mensagem de erro foi exibida.
Multiplicação
Aprovado
O cálculo foi realizado com precisão.
Operações Encadeadas
Aprovado
Ordem de precedência respeitada.

Conclusão
Os testes foram realizados com sucesso, validando que a calculadora básica funciona conforme os requisitos. As operações matemáticas e a interface atendem aos critérios esperados.
 
