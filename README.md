# Consulta de CEP

Este é um projeto de consulta de CEP desenvolvido em HTML, CSS e JavaScript, permitindo que o usuário insira um CEP e receba informações detalhadas, como logradouro, complemento, bairro, cidade, estado e outras informações associadas.

## Funcionalidades

- **Consulta de Endereço**: O usuário insere o CEP e recebe automaticamente informações como logradouro, complemento, bairro, cidade, estado, IBGE e DDD.
- **Interface Responsiva**: O layout é adaptável para dispositivos desktop e móveis, com um design intuitivo e fácil de usar.
- **Validação de Entrada**: Garante que o CEP inserido pelo usuário tenha 8 dígitos antes de realizar a consulta, exibindo mensagens de erro se a entrada for inválida.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização e responsividade do layout.
- **JavaScript (Fetch API)**: Consulta à API [ViaCEP](https://viacep.com.br/) para obter dados de endereço a partir do CEP inserido pelo usuário.

## Estrutura do Código

- **HTML**: Estrutura básica da interface, incluindo campos de entrada, botão de pesquisa e exibição de resultados.
- **CSS**: Estilos e ajustes responsivos para desktop e mobile.
- **JavaScript**:
  - Função `getCep(cep)`: Realiza a requisição à API ViaCEP e exibe os resultados.
  - Função `searchCep()`: Valida o CEP inserido e aciona a função de busca.
  - Função `showElement(id)`: Controla a exibição da tabela de resultados.

## Exemplo de Uso

Ao inserir o CEP no campo de texto e pressionar o botão "Search", a aplicação realiza a busca e exibe o endereço correspondente na tabela de resultados.
##
![image](https://github.com/user-attachments/assets/c1038edf-68b8-4e05-85cc-7f46ceb0bf6f)
