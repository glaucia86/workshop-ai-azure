---
title: Criando Aplicação de Reconhecimento Facial com Face API & Node.js
---

# Criando Aplicação de Reconhecimento Facial com Face API & Node.js

A partir de agora, vamos criar a nossa aplicação, quaisquer dúvidas que vocês tiverem em relação ao código desenvolvido poderão conferir **[AQUI](https://github.com/glaucia86/faceapi-nodejs-demo)** e caso tenham dúvidas em relação ao projeto criado, peço a todos vocês que criem uma **[ISSUE AQUI](https://github.com/glaucia86/workshop-ai-azure/issues)** que muito pronto estarei sanando todas as dúvidas de todos vocês.

## Mãos à obra!

Sim, esse aquele momento em que vamos começar a codar e criar a aplicação em Node.js usando o Face API. Para isso, utilizaremos:

* **[Node.js](https://nodejs.org/en/)**
* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=ai_nodejs-workshop-gllemos)**
* **[Conta Gratuita - Azure](https://social-linker.azurewebsites.net/#/)**
* **[Azure Storage Account - Deploy](https://docs.microsoft.com/azure/javascript/tutorial-vscode-static-website-node-01?WT.mc_id=ai_nodejs-workshop-gllemos)**

E caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/free/students/?WT.mc_id=ai_nodejs-workshop-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/free/students/?WT.mc_id=ai_nodejs-workshop-gllemos)**

Todo o código desenvolvido desse artigo encontra-se disponível **[AQUI](https://github.com/glaucia86/faceapi-node.js-demo)**. Depois de instalar e criar uma conta Azure aí sim poderemos prosseguir com o nosso tutorial.

## Criando Recurso do Face API no Azure

Antes de mais nada, precisamos criar um **[Recurso do Face API](https://docs.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account?WT.mc_id=ai_nodejs-workshop-gllemos)** no **[Portal Azure](https://azure.microsoft.com/?WT.mc_id=ai_nodejs-workshop-gllemos)**. Após isso, aí sim, poderemos começar a desenvolver a nossa aplicação. Caso não saibam, bastam seguir o passo a passo conforme o gif abaixo:

[![01---face-api-nodejs.gif](https://s3.gifyu.com/images/01---face-api-nodejs.gif)](https://gifyu.com/image/k4Ei)

Observem na imagem abaixo que, após criarmos o nosso Recurso dentro do Portal Azure, que nos gera uma `key` e `endpoint`. Guardem essa `key`, pois precisaremos dela para o próximo passo.

[![Screen-Shot-10-14-19-at-04-16-PM.png](https://i.postimg.cc/rF29nFLF/Screen-Shot-10-14-19-at-04-16-PM.png)](https://postimg.cc/vDX9DyBp)





