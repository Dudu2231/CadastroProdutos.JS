# Aplicativo de Cadastro de Produtos e Autenticação

## Visão Geral
Esta é uma aplicação web desenvolvida com **Node.js** e **Express.js** que permite o cadastro de produtos e o gerenciamento de usuários, utilizando autenticação baseada em tokens e cookies. O projeto é modular, escalável e integra diversas funcionalidades modernas para facilitar a manutenção e a extensão.

---

## Funcionalidades Principais

- **Cadastro de Produtos**: Os usuários podem cadastrar, editar e gerenciar produtos de forma dinâmica.
- **Autenticação e Autorização**:
  - Uso de cookies para autenticar e proteger rotas.
  - Middleware personalizado para verificar permissões de acesso.
- **Conexão com Banco de Dados**: Utiliza uma função de conexão (`connectDb`) para garantir armazenamento persistente dos dados.
- **Middleware Avançado**:
  - Tratamento centralizado de erros com `errorHandler`.
  - Integração com `method-override` para suporte a métodos HTTP como PUT e DELETE.
- **Renderização de Páginas Dinâmicas**: Motor de templates **EJS** configurado para renderizar views localizadas na pasta `views`.
- **Serviço de Arquivos Estáticos**: Configuração para servir arquivos como CSS, JavaScript e imagens a partir da pasta `static`.

---

## Tecnologias Utilizadas

- **Node.js** e **Express.js**: Backend e servidor.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **cookie-parser**: Manipulação de cookies para autenticação.
- **method-override**: Suporte a métodos HTTP PUT e DELETE em formulários HTML.
- **EJS**: Motor de templates para renderização dinâmica.

---

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Dudu2231/CadastroProdutos.JS
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   PORT=5000
   DATABASE_URL=sua_url_do_banco
   SECRET_KEY=sua_chave_secreta
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

---

## Estrutura do Projeto

```plaintext
/
|-- config/           # Configurações gerais (e.g., conexão com banco de dados)
|-- middleware/       # Middlewares personalizados (e.g., errorHandler)
|-- routes/           # Arquivos de rotas modulares
|-- static/           # Arquivos estáticos (CSS, JS, imagens)
|-- views/            # Templates EJS para renderização dinâmica
|-- .env              # Variáveis de ambiente (não incluir no repositório público)
|-- app.js            # Arquivo principal do servidor
```

---

## Como Contribuir

1. Realize um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/sua-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Descrição das mudanças"
   ```
4. Envie suas alterações:
   ```bash
   git push origin feature/sua-feature
   ```
5. Abra um Pull Request no repositório original.

---

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Contato
Em caso de dúvidas ou sugestões, entre em contato pelo e-mail: **dezinhamorta@gmail.com**.

