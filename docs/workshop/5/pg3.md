---
title: Desenvolvendo o Código
---

# Desenvolvendo o código

Abrem agora o seu **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=ai_nodejs-workshop-gllemos)** e digite o seguinte comando abaixo:

```bash
> npm init -y
```

Esse comando irá criar um arquivo chamado **package.json** padrão para nós! Abrem ele e inclua o seguinte bloco de código abaixo:

**arquivo: package.json**

```json
{
  "name": "demo-api-translator-nodejs",
  "version": "1.0.0",
  "description": "Demo responsável por ",
  "main": "src/tradutor-texto.js",
  "scripts": {
    "dev": "node src/tradutor-texto.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/glaucia86/translatortext-nodejs-demo.git"
  },
  "keywords": [
    "nodejs",
    "javascript",
    "azure",
    "cognitive-services",
    "translator-text"
  ],
  "author": "Glaucia Lemos",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/glaucia86/demo-api-translator-nodejs/issues"
  },
  "homepage": "https://github.com/glaucia86/demo-api-translator-nodejs#readme"
}
```

## Criando a estrutura do projeto

Vamos montar a seguinte estrutura do projeto conforme a imagem abaixo:

[![img-01.png](https://i.postimg.cc/TP3gzrvK/Screen-Shot-10-04-19-at-06-54-PM.png)](https://postimg.cc/BjRjDP63)

Notem que, o arquivo `tradutor-texto.js` está dentro da pasta `src`. É nesse arquivo que iremos desenvolver a lógica da nossa aplicação.

## Desenvolvendo o projeto

Antes de mais nada, vamos instalar alguns pacotes que precisaremos usar no nosso projeto. Para isso, abram o prompt de comando e digitam o seguinte comando:

```bash
> npm install request uuidv4
```

Agora notem que, o nosso `package.json` sofrerá mudanças e incluirá no bloco `dependencies` os dois pacotes acima: `request` e `uuidv4`.

* **arquivo: package.json**

```json
{
  "name": "demo-api-translator-nodejs",
  "version": "1.0.0",
  "description": "Demo responsável por ",
  "main": "src/tradutor-texto.js",
  "scripts": {
    "dev": "node src/tradutor-texto.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/glaucia86/translatortext-nodejs-demo.git"
  },
  "keywords": [
    "nodejs",
    "javascript",
    "azure",
    "cognitive-services",
    "translator-text"
  ],
  "author": "Glaucia Lemos",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/glaucia86/demo-api-translator-nodejs/issues"
  },
  "homepage": "https://github.com/glaucia86/demo-api-translator-nodejs#readme",
  "dependencies": {
    "request": "^2.88.0",
    "uuidv4": "^5.0.1"
  }
}
```

Agora, abram o arquivo `tradutor-texto.js` e incluam o seguinte bloco de código abaixo:

```javascript
/**
 * 
 * Arquivo: src/tradutor-texto.js
 * Descrição: arquivo responsável por traduzir textos usando o Translator Text API.
 * Data: 03/10/2019
 * Author: Glaucia Lemos
 * 
 */

const request = require('request');
const uuidv4 = require('uuid/v4');
```

Beleza, agora vamos continuar o nosso desenvolvimento. Incluam o seguinte bloco abaixo:

```javascript
/**
 * 
 * Arquivo: src/tradutor-texto.js
 * Descrição: arquivo responsável por traduzir textos usando o Translator Text API.
 * Data: 03/10/2019
 * Author: Glaucia Lemos
 * 
 */

const request = require('request');
const uuidv4 = require('uuid/v4');

let chave_translator = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';

//==> Se não encontrar uma variável de ambiente' enviar mensagem de erro!
if (!process.env[chave_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + chave_translator);
}

let subscriptionKey = process.env[chave_translator];

let endpoint_translator = 'TRANSLATOR_TEXT_ENDPOINT';

if (!process.env[endpoint_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + endpoint_translator);
}

let endpoint = process.env[endpoint_translator];
```

Observem a importância de configurarmos localmente as nossas variáveis de ambiente para que, quando se executem a aplicação não venha a dar erro!

Vamos dar continuidade!

## Configurando as requisições

Estamos quase chegando ao final do desenvolvimento do nosso código! Para isso, vamos configurar as requisições para realizar a chamada da API do Translator Text. Para isso, incluam o seguinte bloco de código abaixo:

* **arquivo: tradutor-texto.js**

```javascript
(...)

function traduzirTexto() {
  // ==> Aqui vamos configurar os requests
  let options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': ['en', 'es']
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
      'text': 'Olá Desenvolvedor!'
    }],
    json: true,
  }
};
```

Perfeito! Agora vamos imprimir a nossa requisição! Para isso, incluam o seguinte bloco de código abaixo:

* **arquivo: tradutor-texto.js**

```javascript
(...)

function traduzirTexto() {
  // ==> Aqui vamos configurar os requests
  let options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': ['en', 'es']
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
      'text': 'Olá Desenvolvedor!'
    }],
    json: true,
  }

  // ==> Aqui vamos imprimir a nossa requisição
  request(options, (err, res, body) => {
    console.log(JSON.stringify(body, null, 4));
  })
};

// Aqui vamos chamar a função para que possa realizar
// a tradução via API
traduzirTexto();
```

Agora está tudo pronto! Vamos executar a nossa aplicação e ver se vai realmente traduzir a frase: **Olá Desenvolvedor** para `inglês` e `espanhol`?!

Para isso, abrem o prompt de comando e vamos executar o comando:

```bash
> npm run dev
```

[![img-01.png](https://i.postimg.cc/5yZSXkcR/Screen-Shot-10-05-19-at-01-05-AM.png)](https://postimg.cc/vxtVjhZr)

Só para vocês verem em ação, vejam agora com uma outra frase: `Oi! Como você se chama?` traduzindo do `português` para o `inglês` e `espanhol`:

![02-gif-translator-nodejs.gif](https://s3.gifyu.com/images/02-gif-translator-nodejs.gif)

Legal, não é mesmo?!

Se desejarem ver a versão em vídeo desse projeto desenvolvido, incluso para realizar tradução de idiomas orientais, fiz um live coding ensinando passo a passo como fazer.

[![sddefault.jpg](https://i.postimg.cc/jqFFLPPx/sddefault.jpg)](https://youtu.be/IzSVw1e2AxI)

