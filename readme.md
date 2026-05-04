# Portfólio Pessoal

Portfólio desenvolvido para apresentar trajetória acadêmica, habilidades técnicas, certificações e projetos realizados ao longo da formação em Desenvolvimento de Software Multiplataforma.

---

## Sobre o Projeto

O projeto tem como objetivo centralizar informações profissionais e acadêmicas em uma página web responsiva, organizada e de fácil navegação. A proposta é destacar os trabalhos desenvolvidos, competências adquiridas e objetivos profissionais de forma clara e acessível.

---

## Tecnologias Utilizadas

- **HTML5** — estruturação e semântica da página
- **CSS3** — estilização, responsividade e layout
- **JavaScript** — interatividade e manipulação do DOM
- **Bootstrap 5.3** — componentes e grid system
- **Glide.js** — carrossel de projetos

---
## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

### Passo a passo

```bash
# 1. Clone o repositório ou extraia os arquivos do projeto
# 2. Acesse a pasta da API
cd portfolio-api

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
node index.js
```

O servidor será iniciado em `http://localhost:3000`.

### Testando as requisições

Utilize ferramentas como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou [Thunder Client](https://www.thunderclient.com/) para realizar as requisições.

**Exemplo de requisição POST para `/projetos`:**

```json
{
  "nome": "Meu Projeto",
  "descricao": "Descrição do projeto",
  "link": "https://meu-projeto.vercel.app"
}
```

---

## Estrutura de Arquivos

```
portfolio/
├── index.html        # Página principal do portfólio
├── style.css         # Estilização
├── script.js         # Scripts de interatividade
├── readme.md         # Documentação do projeto
└── portfolio-api/
    ├── index.js      # Servidor Express com todas as rotas
    └── package.json  # Dependências do projeto
```

---

## Autora

Desenvolvido por **Gabriela Santos**  
[LinkedIn](https://www.linkedin.com/in/gabriela-santos-b762a9399) • [GitHub](https://github.com/GabSantt)
