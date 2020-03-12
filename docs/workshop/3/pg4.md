---
title: Criando a lógica no arquivo 'face-detection.js'
---

# Criando a lógica no arquivo 'face-detection.js'

Abram agora o arquivo `face-detection.js` e incluam o seguinte bloco de código abaixo:

* **arquivo: face-detection.js**

```js
/**
 * arquivo: src/facedetection.js
 * Data: 16/10/2019
 * Descrição: Arquivo responsável por realizar o reconhecimento facial usando o Face API & Node.js
 * Author: Glaucia Lemos
 */

'use strict';

const request = require('request');

require('dotenv').config();

const subscriptionKey = process.env.SUBSCRIPTION_FACE_API_KEY;
const uriBase = process.env.URI_BASE;
const imageUrl = 'https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/05/13/silvio_santos_reproducao_instagram_349201_36.jpg';

```

Aqui estamos fazendo o chamada de 2 pacotes: `request` e o `dotenv`. E logo abaixo, criando 3 variáveis para processar as informações geradas para nós no Portal Azure: `key`, `endpoint` e uma url de uma imagem que estaremos usando da internet! 

Notem que, nas variáveis `subscriptionKey` e `uriBase`, estamos criando uma espécie de variáveis secretas? É justamente aí que usaremos o pacote `dotenv`. Para isso, criem um arquivo chamado `.env`, fora da pasta `src` e vejam como ela deve ficar:

[![Screen-Shot-10-16-19-at-02-18-PM.png](https://i.postimg.cc/zXjBgXk2/Screen-Shot-10-16-19-at-02-18-PM.png)](https://postimg.cc/YhvMc7ZQ)

É justamente nesse arquivo que ficará guardado as informações mais sensíveis, tipo: keys, endpoints e tudo mais! Notem que, se vocês abrirem o arquivo `.gitignore` esse arquivo não será enviado para o GitHub. Justamente, para evitar de ser usado por outras pessoas!
 
Dando continuidade no nosso desenvolvimento, vamos agora concluir esse arquivo! Inclua o seguinte bloco de código no arquivo:

* **arquivo: face-detection.js**

```js
const params = {
  'returnFaceId': 'true',
  'returnFaceLandmarks': 'false',
  'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
  'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
  uri: uriBase,
  qs: params,
  body: '{"url": ' + '"' + imageUrl + '"}',
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key' : subscriptionKey
  }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error ao identificar a imagem: ', error);
    return;
  }

  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});
```

No bloco de código acima, estamos declarando algumas variáveis para justamente tratar de fazer a chamada da nossa API para que possamos realizar a identificação da imagem concedida via URL. Observem que, na variável `params`, temos inúmeros parâmetros que nos retornarão em forma de json. Esses parâmetros são padrão do Face API, que podem ser analisados **[AQUI](https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236?WT.mc_id=ai_nodejs-workshop-gllemos)**

[![Screen-Shot-10-16-19-at-03-22-PM.png](https://i.postimg.cc/Z5FjyQ7x/Screen-Shot-10-16-19-at-03-22-PM.png)](https://postimg.cc/68qCkMN8)

E por último ele, retornará um Json com todas as informações solicitadas na variável `params`.

Vamos testar a nossa aplicação agora?! Vejam no gif abaixo como testar:

[![02---face-api-nodejs.gif](https://s3.gifyu.com/images/02---face-api-nodejs.gif)](https://gifyu.com/image/k8tY)

Observem que a API retornou e identificou para nós que na imagem a pessoa é um homem, de cor marrom, não está usando óculos e até a dedução da idade foi nos dada!

Vejam o retorno abaixo para a imagem do `Silvio Santos`:

* **JSON Response**

```json
[
  {
    "faceId": "8b121a4e-407a-4b91-9b90-4ba2592a6329",
    "faceRectangle": {
      "top": 82,
      "left": 237,
      "width": 163,
      "height": 163
    },
    "faceAttributes": {
      "smile": 1,
      "headPose": {
        "pitch": -6.3,
        "roll": 4.4,
        "yaw": -7.5
      },
      "gender": "male",
      "age": 50,
      "facialHair": {
        "moustache": 0.1,
        "beard": 0.1,
        "sideburns": 0.1
      },
      "glasses": "NoGlasses",
      "emotion": {
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 1,
        "neutral": 0,
        "sadness": 0,
        "surprise": 0
      },
      "blur": {
        "blurLevel": "medium",
        "value": 0.42
      },
      "exposure": {
        "exposureLevel": "goodExposure",
        "value": 0.72
      },
      "noise": {
        "noiseLevel": "medium",
        "value": 0.46
      },
      "makeup": {
        "eyeMakeup": false,
        "lipMakeup": false
      },
      "accessories": [],
      "occlusion": {
        "foreheadOccluded": false,
        "eyeOccluded": false,
        "mouthOccluded": false
      },
      "hair": {
        "bald": 0.17,
        "invisible": false,
        "hairColor": [
          {
            "color": "brown",
            "confidence": 1
          },
          {
            "color": "black",
            "confidence": 0.85
          },
          {
            "color": "gray",
            "confidence": 0.48
          },
          {
            "color": "blond",
            "confidence": 0.1
          },
          {
            "color": "red",
            "confidence": 0.09
          },
          {
            "color": "other",
            "confidence": 0.05
          }
        ]
      }
    }
  }
]
```

Legal não é mesmo?! Mas, e se eu quiser ver a imagem e o retorno no browser?! Não tem problema! Criei uma outra aplicação, fazendo uso do: `demo-2`. Nessa aplicação fiz uso das seguintes stacks:

* **[Node.js](https://nodejs.org/en/)**
* **[Pug](https://pugjs.org/api/getting-started.html)**
* **[Express](https://expressjs.com/pt-br/)**
* **[Bootstrap](https://getbootstrap.com/)**

Vejam em ação aqui no gif abaixo:

[![03---face-api-nodejs.gif](https://s3.gifyu.com/images/03---face-api-nodejs.gif)](https://gifyu.com/image/k8DL)

Todo o código desenvolvido encontra-se **[AQUI](https://github.com/glaucia86/faceapi-node.js-demo)**. E lá no repositório explico como devem executar ambas as aplicações! ;)