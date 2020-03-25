---
title: Introdução - O que é Face API?
---

# Introdução - O que é Face API?

[![face-api-cs.jpg](https://i.postimg.cc/50PDbW4R/face-api-cs.jpg)](https://postimg.cc/phFsJ7nf)

O **[Face API](https://azure.microsoft.com/services/cognitive-services/face/?WT.mc_id=ai_nodejs-workshop-gllemos)** é um **[Serviço Cognitivo](https://azure.microsoft.com/services/cognitive-services/?WT.mc_id=ai_nodejs-workshop-gllemos)** do Azure que permite detectar, reconhecer e analisar rostos humanos em imagens. Como ele faz isso? Por meio de algoritmos! E o Face API possui várias funções diferentes! Entre elas:

* ➡️ **[Reconhecimento Facial](https://docs.microsoft.com/azure/cognitive-services/face/overview?WT.mc_id=ai_nodejs-workshop-gllemos#face-detection)**: que permite reconhecer rostos humanos numa imagem. E extrae uma série de informações como: gênero, idade, emoção entre outros pontos.

* ➡️ **[Verificação Facial](https://docs.microsoft.com/azure/cognitive-services/face/overview?WT.mc_id=ai_nodejs-workshop-gllemos#face-verification)**: aqui a API irá avaliar se dois rostos pertencem à mesma pessoa.

* ➡️ **[Encontrar Rostos Semelhantes](https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a?WT.mc_id=ai_nodejs-workshop-gllemos)**: diferente da **Verificação Facial**, aqui a API irá procurar se há rostos semelhantes numa imagem e identificar para nós, por meio do `matchPerson`, que realiza uma filtragem da API **[Face - Verify](http://bit.ly/2MdKgsD)** e daí retorna uma lista de rostos que sejam parecidos e se pertencem a mesma pessoa.

* ➡️ **[Agrupamento Facial](https://docs.microsoft.com/azure/cognitive-services/face/overview?WT.mc_id=ai_nodejs-workshop-gllemos#face-grouping)**: como o próprio nome diz, aqui podemos ter um conjunto de rostos desconhecidos em vários grupos. Aqui se faz uso da API **[Face - Group](https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395238?WT.mc_id=ai_nodejs-workshop-gllemos)**

* ➡️ **[Identificação Pessoal](https://docs.microsoft.com/azure/cognitive-services/face/overview?WT.mc_id=ai_nodejs-workshop-gllemos#person-identification)**: aqui o uso da API é bem legal. Pois podemos identificar um rosto detectado e comparar com uma base de dados de pessoas.. Esse recurso é legal pois podemos fazer uso de gerenciamento de fotos. Se desejarem saberem mais a respeito dessa API, bastam acessar a documentação de referência na **[Face - Identify](https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239)**

Para mais informações a respeito do Face API, pode ter um overview com maiores detalhes **[AQUI](https://docs.microsoft.com/azure/cognitive-services/face/overview?WT.mc_id=ai_nodejs-workshop-gllemos)**.

## O que iremos desenvolver?

Nós iremos desenvolver uma aplicação em Node.js e usando o Face API. É uma aplicação onde podemos ter conhecimento necessário para aplicar a API em qualquer outro projeto. No final, iremos realizar o deploy dessa aplicação na nuvem através do Azure Storage Account.

Você está preparado(a)? Se a resposta é sim, então vamos!
