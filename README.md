# MobileFlashCard Project - MiniQuiz

Este é o projeto MobileFlashCard, do Nanodegree de React da Udacity. Turma Setembro/17

Este projeto foi desenvolvido e testado apenas em Android. 

Este projeto foi desenvolvido utilizando códigos nativo, com o comando react-native init.

## Preparando o ambiente
O ambiente de desenvolvimento requer alguns ajustes, como a instalação do react-native-cli, Java SE Development Kit (JDK),
Android SDK, além de configurar as variáveis de ambiente.

O processo é simples, e fortemente documentado em:
http://facebook.github.io/react-native/docs/getting-started.html

Obs: escolha a opção: Building Projects with Native Code

## Iniciando
Para iniciar o projeto:
* clone o projeto com `https://github.com/JosimarGomes/miniquiz.git`
* instale as dependências com `npm install`
* faça o link das dependências nativas com `react-native link`
* inicie o servidor de desenvolvimento com `npm start`
* conecte seu dispositivo ANDROID pelo cabo USB e habilite o modo desenvolvedor
* abra uma nova guia no terminal e digite `react-native run-android` 


## Adicione quiz de estudos
* Adicione quiz e aprimore seus estudos.
* Inicie um quiz e veja como está a sua evolução
* Obs: para excluir o quiz, basta pressioná-lo por alguns segundos
* Seja notificado no dia em que não estudar (para testar, basta passar o parâmetro true na função que chama a data. Isso faz com que a notificação seja disparada em 10 segundos)

