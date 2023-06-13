# App de Filmes
Este é um aplicativo simples de filmes construído usando React/Vite. Ele exibe uma lista de filmes de um arquivo JSON e os renderiza como cartões na tela.

https://prnt.sc/w8Pe8o304RSW


Instalação
Clone o repositório para a sua máquina local.
Navegue até o diretório do projeto.
Execute npm install para instalar as dependências necessárias.
Execute npm start para iniciar o aplicativo.
Abra o seu navegador e visite http://localhost:3000 para visualizar o aplicativo.
Uso
O aplicativo busca dados de filmes a partir de um arquivo JSON e exibe os filmes como cartões na tela. Cada cartão exibe o título do filme e uma imagem relacionada a ele.

Estrutura do Código
App.js: Este arquivo contém o componente principal do aplicativo. Ele faz uso dos componentes Container, Section_Flex e Card para renderizar a interface do usuário.
Styles.js: Este arquivo contém a definição de estilos usando a biblioteca styled-components. Ele exporta os componentes estilizados Container, Section_Flex, Img e Title.
db.json: Este arquivo contém os dados dos filmes no formato JSON. Cada filme possui um id, um key (título) e um value (caminho da imagem).
Card/index.jsx: Este arquivo contém o componente Card, que é usado para renderizar cada cartão de filme. Ele recebe as propriedades title (título do filme) e imgSrc (caminho da imagem) e renderiza o cartão correspondente.
Personalização
Você pode personalizar o aplicativo alterando os estilos definidos no arquivo Styles.js. Além disso, você pode adicionar mais filmes ao arquivo db.json para que sejam exibidos como cartões na tela.

Divirta-se explorando o aplicativo de filmes!


React.Js, Node.Js, JSON, Vite.js, Styled-components.
