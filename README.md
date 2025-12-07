# 📚 INDICA+

Uma plataforma completa de recomendações de obras culturais — incluindo livros, filmes, séries e documentários.

---

## 🚀 Sobre o Projeto

O **INDICA+** é um projeto fullstack desenvolvido com o objetivo de permitir que usuários indiquem obras culturais e compartilhem suas opiniões.  
A plataforma inclui:

- Cadastro e login de usuário
- CRUD de recomendações
- Sistema de categorias
- Upload de imagens (banner da obra)
- Avaliação pessoal da obra
- Listagem geral e filtrada de recomendações
- Painel com recomendações feitas pelo próprio usuário

O foco inicial é o aprendizado de **JavaScript puro no front-end**, e posteriormente a migração para **React**, mantendo o back-end sólido com **Node.js + Express + Prisma**.

---

## 🛠️ Tecnologias Utilizadas

### **Back-end**

- Node.js
- Express.js
- Prisma ORM
- NeonDB (PostgreSQL Serverless)
- JWT para autenticação
- Bcrypt para hash de senhas
- Multer / UploadThing para upload de imagens
- Zod (opcional) para validações

### **Front-end**

- HTML5
- CSS3
- JavaScript Puro (ES6+)
- Fetch API
- LocalStorage para persistência do token

---

## 📁 Arquitetura do Projeto

### **Back-end**

---

## 🧩 Modelagem de Dados (Lógica)

### **User**

- id
- name
- email
- password
- avatar (opcional)
- createdAt

### **Recommendation**

- id
- title
- summary
- imageUrl
- rating
- categoryId
- userId
- createdAt

### **Category**

- id
- name
- icon (opcional)

---

## 🔐 Autenticação

O usuário pode:

- Criar conta
- Fazer login
- Receber JWT
- Acessar rotas protegidas
- Ver suas próprias recomendações

---

## 📦 Funcionalidades Principais

### ✔ Usuários

- Criar conta
- Login
- Visualizar perfil

### ✔ Recomendações

- Criar recomendação
- Listar recomendações
- Filtrar por categoria
- Mostrar recomendações de um usuário específico
- Editar
- Excluir

### ✔ Categorias

- Listar categorias
- (Opcional) CRUD de admin

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento**  
Este repositório será atualizado conforme novas funcionalidades forem implementadas.

---

## 🤝 Contribuições

Pull Requests são bem-vindos!  
Você pode abrir issues com sugestões, bugs ou melhorias.

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Wesley Filho**  
Projeto criado para estudos de JavaScript, Node.js, arquitetura e boas práticas de desenvolvimento web.
