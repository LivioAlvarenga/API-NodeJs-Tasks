<h1 align="center"> 
	API REST em Node.js puro para CRUD de tarefas
</h1>
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-instalação">Instalações</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;
<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

🚀 Desenvolver uma API REST para realizar o CRUD de suas tasks (tarefas). Usei Node.js focado nos fundamentos da tecnologia, sem frameworks ou bibliotecas externas. Aprenderemos sobre módulos internos do Node.js como HTTP, Crypto e File System e sobre fundamentos HTTP como requests, respondes, headers, status code, route e query parameters, etc. Também daremos profundidade em Streams no Node.js e como aplica-las para realizarmos operações assíncronas e parciais em nosso back-end.

### Rotas e regras de negócio

Estrutura (propriedades) que uma task deve ter:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

Rotas:

- `POST - /tasks`
    
    Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
    
    Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
    
- `GET - /tasks`
    
    Deve ser possível listar todas as tasks salvas no banco de dados.
    
    Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
    
- `PUT - /tasks/:id`
    
    Deve ser possível atualizar uma task pelo `id`.
    
    No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
    
    Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
    
    Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    
- `DELETE - /tasks/:id`
    
    Deve ser possível remover uma task pelo `id`.
    
    Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    
- `PATCH - /tasks/:id/complete`
    
    Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado “normal”.
    
    Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

- Validar se as propriedades `title` e `description` das rotas `POST` e `PUT` estão presentes no `body` da requisição.

- Nas rotas que recebem o `/:id`, além de validar se o `id` existe no banco de dados, retornar a requisição com uma mensagem informando que o registro não existe.

Criação via CSV com Stream:

>Vamos utilizar a lib [csv-parse](https://csv.js.org/), utilizando o exemplo de [iterador async](https://csv.js.org/parse/api/async_iterator/). 

Crie um arquivo a parte para realizar a leitura do arquivo CSV.

Deve ser feito a leitura do CSV e para cada linha, realize uma requisição para a rota `POST - /tasks`, passando os campos necessários.

Formato do CSV:

    title,description
    Task 01,Descrição da Task 01

&nbsp;

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/01-NodeFundamentos?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/01-NodeFundamentos/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/01-NodeFundamentos" alt="issue site 01-NodeFundamentos" /></a>
  <a href="https://github.com/LivioAlvarenga/01-NodeFundamentos"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/01-NodeFundamentos" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/01-NodeFundamentos"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/01-NodeFundamentos" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/01-NodeFundamentos"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/01-NodeFundamentos" alt="repository size" /></a>
<p>

&nbsp;

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                                      |
| --------------------- | ------------------------------------ |
| :sparkles: Nome       | **API RESTful com Node.js**          |
| :label: Tecnologias   | NodeJs, JavaScript, Insomnia |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://insomnia.rest/"><img alt="Insomnia badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=4000BF&logo=Insomnia&label=HTTP client&message=Insomnia&color=4000BF"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
</p>

---

&nbsp;
<a id="-instalação"></a>

## ⚙️ Instalações

### Criando projeto NodeJs

```bash
# Criando projeto NodeJs com o npm init -y (-y para não precisar responder as perguntas)
npm init -y

# Adicionando o type module para o NodeJs reconhecer o import/export em vez do require do CommonJS
# Adicionar no arquivo package.json no campo "type"
"type": "module",
```

&nbsp;

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo `id`
- Remover uma task pelo `id`
- Marcar pelo `id` uma task como completa
- Importação de tasks em massa por um arquivo CSV

&nbsp;

### 🧭 Rodando a aplicação web (Modo desenvolvimento)

```bash
# Clone este repositório
git clone https://github.com/livioalvarenga/01-NodeFundamentos.git
# Acesse a pasta do projeto no seu terminal/cmd
cd 01-NodeFundamentos
# Instale as dependências
npm install
# Execute a aplicação em modo de desenvolvimento
npm run server
# A aplicação será aberta na porta:3333 - acesse http://localhost:3333
```

### 🧭 Rodando a aplicação server (Modo desenvolvimento)

```bash
npm run server
# A aplicação será aberta na porta:3333 - acesse http://0.0.0.0:3333/

http localhost:3333
# testando a aplicação com o HTTPie

```

&nbsp;

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
