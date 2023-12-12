# Projeto de Cadastro de Cores em React TS

Este é um projeto front-end desenvolvido em React TS para cadastrar cores no formato RGB. A aplicação interage com um back-end disponível em [Prova A Back-end](https://github.com/arleysouza/prova-a-back).

## Objetivo

Desenvolver uma aplicação front-end em React TS para cadastrar cores no formato RGB. A aplicação deve atender aos seguintes requisitos funcionais e não funcionais.

### Requisitos Funcionais

1. **Cores Iniciais:** As cores salvas no servidor devem ser carregadas na tela ao iniciar a aplicação.
2. **Exibição de Cores:** Cada registro de cor deve ser exibido numa linha, com a cor de fundo igual ao valor da cor (no formato #rrggbb).
3. **Cor do Texto:** A cor do texto deve ser igual ao inverso da cor.
4. **Remoção de Cor:** Ao clicar sobre a linha de um registro, ele deve ser removido no servidor, e a tela deve ser atualizada.
5. **Cadastro de Nova Cor:** Ao clicar no botão cadastrar, um novo registro de cor deve ser criado no servidor, e a tela deve ser atualizada.

### Requisitos Não Funcionais

1. **Integridade do Back-end:** A aplicação servidora não pode ser alterada.
2. **Organização do Código:** As requisições devem estar num pacote chamado `service`.
3. **Comunicação entre Componentes:** Utilize Context e Hooks para a comunicação entre os componentes.
4. **Estrutura de Componentes e Estilos:** Defina os componentes e estilos no pacote `components`.

### Como Iniciar o Projeto

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute o projeto com `npm start`

### Como Usar

1. Acesse a aplicação no navegador.
2. As cores iniciais serão carregadas automaticamente.
3. Cada linha representa um registro de cor, com cor de fundo e texto conforme especificado.
4. Clique em uma linha para remover o registro no servidor e atualizar a tela.
5. Clique no botão "Cadastrar" para adicionar uma nova cor no servidor e atualizar a tela.
