
# 🌤️ Clima em Tempo Real

Este projeto é uma aplicação web simples que permite ao usuário buscar informações meteorológicas em tempo real de qualquer cidade, utilizando a API da OpenWeatherMap.

## 📂 Estrutura dos Arquivos

- `index.html`: Página principal do site. Contém a estrutura HTML com um campo para digitar a cidade e um botão para buscar o clima.
- `style.css`: Estilos da aplicação. Deixa o layout limpo, centralizado e responsivo.
- `script.js`: Script em JavaScript que realiza a requisição à API da OpenWeatherMap e exibe os dados do clima na tela.

## 🚀 Funcionalidades

- Busca do clima atual por cidade.
- Retorno da temperatura, descrição do clima, cidade e país.
- Interface responsiva e moderna.
- Exibe mensagens de erro amigáveis caso a cidade não seja encontrada.

## 🔧 Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Digite o nome de uma cidade e clique em "Buscar".
4. Os dados climáticos atuais serão exibidos abaixo.

## 🔑 Observação

A chave de API está atualmente definida no arquivo `script.js`:
```js
const apiKey = "7a6b628c3cb47abfb93e4b1ab733df83";
```
> ⚠️ Recomenda-se **substituir por sua própria chave** da [OpenWeatherMap](https://openweathermap.org/api) para evitar limites ou problemas de segurança.

## 📄 Licença

Este projeto é de uso livre para fins educacionais.
