---
title: Desenvolvendo o código
---

# Desenvolvendo o código

Agora que já temos a nossa `key`, vamos agora criar a aplicação em Node.js para fazer uso do Face API. Para isso, abre o seu **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=ai_nodejs-workshop-gllemos)** e dentro da pasta que você criou para o seu projeto, digite o seguinte comando, para criar um arquivo padrão do `package.json` no nosso projeto: 

```bash
> npm init -y
```

Com esse comando, criará um arquivo padrão do `package.json`. Porém, abre o Visual Studio Code e altere o arquivo conforme o código abaixo:

* **arquivo: package.json**

```json
{
  "name": "faceapi-node.js-demo",
  "version": "1.0.0",
  "description": "Demo para realizar reconhecimento de imagem via Face API & Node.js",
  "main": "face-detection.js",
  "scripts": {
    "dev": "node src/face-detection.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/glaucia86/faceapi-node.js-demo.git"
  },
  "keywords": [
    "nodejs",
    "cognitive-services",
    "azure",
    "face-api",
    "javascript"

  ],
  "author": "Glaucia Lemos",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/glaucia86/faceapi-node.js-demo/issues"
  },
  "homepage": "https://github.com/glaucia86/faceapi-node.js-demo#readme"
}
```

Perfeito! Agora, crie a estrutura do projeto conforme a imagem abaixo:`src -> face-detection.js`

[![Screen-Shot-10-16-19-at-01-49-PM.png](https://i.postimg.cc/GmvPkR6B/Screen-Shot-10-16-19-at-01-49-PM.png)](https://postimg.cc/CRLfg3hY)

E no arquivo `.gitignore`, inclua o seguinte bloco de código

* **arquivo: .gitignore**

```js
node_modules
lib
.env
```

Show! Vamos agora instalar as dependências no nosso projeto. Precisaremos de 2:

* **[request](https://www.npmjs.com/package/request)**: esse pacote nos ajudará a realizar requisições no Face API de maneira muito fácil via código.

* **[dotenv](https://www.npmjs.com/package/dotenv)**: esse pacote será de grande ajuda, pois como estaremos incluindo chaves dos serviços Azure na aplicação e para que não fiquem expostas essas chaves, esse pacote nos ajudará a criar variáveis de ambiente sem precisar 'setar' localmente na nossa máquina.

Para isso, vamos instalar esse dois pacotes com o seguinte comando no prompt:

```bash
> npm i request dotenv
```

No final, o nosso arquivo `package.json` ficará da seguinte maneira:

```json
{
  "name": "faceapi-node.js-demo",
  "version": "1.0.0",
  "description": "Demo para realizar reconhecimento de imagem via Face API & Node.js",
  "main": "face-detection.js",
  "scripts": {
    "dev": "node src/face-detection.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/glaucia86/faceapi-node.js-demo.git"
  },
  "keywords": [
    "nodejs",
    "cognitive-services",
    "azure",
    "face-api",
    "javascript"
  ],
  "author": "Glaucia Lemos",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/glaucia86/faceapi-node.js-demo/issues"
  },
  "homepage": "https://github.com/glaucia86/faceapi-node.js-demo#readme",
  "dependencies": {
    "dotenv": "^8.2.0",
    "request": "^2.88.0"
  }
}
```

Agora, vamos criar a lógica para realizar o reconhecimento de imagem via Face API & Node.js.
