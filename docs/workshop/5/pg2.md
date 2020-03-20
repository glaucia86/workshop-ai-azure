---
title: Criando Aplicação de Tradução com Translator Text & Node.js
---

# Criando Aplicação de Tradução com Translator Text & Node.js

A partir de agora, vamos criar a nossa aplicação, quaisquer dúvidas que vocês tiverem em relação ao código desenvolvido poderão conferir **[AQUI](https://github.com/glaucia86/translatortext-nodejs-demo)** e caso tenham dúvidas em relação ao projeto criado, peço a todos vocês que criem uma **[ISSUE AQUI](https://github.com/glaucia86/translatortext-nodejs-demo/issues)** que muito en pronto estarei tirando todas as dúvidas de todos(as) vocês.

## Mãos à obra!

Bom... falar é bom, mas vamos começar a codar! Para isso, vamos precisar de alguns recursos necessários. Entre eles:

* **[Node.js](https://nodejs.org/en/)**
* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=ai_nodejs-workshop-gllemos)**
* **[Conta Gratuita - Azure](https://azure.microsoft.com/free/?WT.mc_id=ai_nodejs-workshop-gllemos)**

Caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/free/students/?WT.mc_id=ai_nodejs-workshop-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/free/students/?WT.mc_id=ai_nodejs-workshop-gllemos)**

Depois de instalar e criar uma conta Azure aí sim poderemos prosseguir com o nosso tutorial.

## Criando Recurso do Translator Text

Bom, o primeiro passo que vamos precisar é criar um **[Recurso do Translator Text](https://docs.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account?WT.mc_id=ai_nodejs-workshop-gllemos)** no **[Portal Azure](https://azure.microsoft.com/?WT.mc_id=ai_nodejs-workshop-gllemos)**. 

Para isso, bastam seguir o passo a passo como no gif abaixo:

[![01-gif-translator-nodejs.gif](https://s3.gifyu.com/images/01-gif-translator-nodejs.gif)](https://gifyu.com/image/k96E)

Notem que, quando concluímos em criar um Recurso do Translator Text, ele nos gera uma **key** e um **endpoint**:

[![01-image.png](https://i.postimg.cc/Hn7vYQGt/01-image.png)](https://postimg.cc/n9pGT9hs)

Guardem essa **key** e **endpoint**, pois durante o desenvolvimento da aplicação, vamos precisar dessas informações!

## Criando Chave de Ambiente

Agora que já temos a nossa **key**, agora é importante criarmos uma variável de ambiente. Pois, dessa forma, poderemos armazenar a `key` do recurso recém criados no Portal Azure. E é justamente isso que iremos fazer agora. Para isso, abre o seu prompt de comando e executem o seguinte comando:

```bash
> setx TRANSLATOR_TEXT_SUBSCRIPTION_KEY "sua-key"

> setx TRANSLATOR_TEXT_ENDPOINT https://api.cognitive.microsofttranslator.com
```

Observem que, não usaremos o `endpoint` do Portal Azure. Mas, sim do seguinte endpoint: `https://api.cognitive.microsofttranslator.com`

Vejam na imagem abaixo:

[![img-01.png](https://i.postimg.cc/L6LXd0s0/Screen-Shot-10-05-19-at-12-53-AM.png)](https://postimg.cc/9rXVZbZG)

Se aparecer como na mensagem acima é porque conseguimos configurar corretamente a nossa chave e endpoint na variável de ambiente localmente. Caso desejam executar esse comando em outro Sistema Operacional, bastam digitar os comandos:

* **Linux**

```bash
> export TRANSLATOR_TEXT_SUBSCRIPTION_KEY=sua-key

> export TRANSLATOR_TEXT_ENDPOINT https://api.cognitive.microsofttranslator.com

> source ~/.bashrc
```

* **MacOs**

```bash
> export TRANSLATOR_TEXT_SUBSCRIPTION_KEY=sua-key

> export TRANSLATOR_TEXT_ENDPOINT https://api.cognitive.microsofttranslator.com

> source ~/.bashrc
```

Ao terminar, seria bom fechar o seu prompt de comando e abrir novamente! #ficaadica

Bom, agora está tudo configurado. Vamos agora criar/desenvolver a nossa aplicação em Node.js