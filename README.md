# Web Scraping Tabelas Futebol

Uma API básica desenvolvida para fins de aprendizado de web scraping com *JavaScript*, *express* e *puppeteer*.

## 🧰 Instalação

Para rodar esta aplicação você deve ter instalado o NodeJS <https://nodejs.org/en/> e um gerenciador de pacotes, 
sendo *NPM* ou *Yarn*.

`git clone https://github.com/thiagoschoeffel/web-scraper-brasileiro-serie-a.git`

Após clonar o repositório, basta abrir a pasta do projeto no terminal e executar `npm install` ou 
se estiver usando o *Yarn* basta executar `yarn`. Esses comandos instalarão as dependências necessárias para
que o projeto funcione corretamente.

Agora ainda dentro da pasta do projeto no terminal basta executar `npm start` se estiver usando *NPM* ou
então `yarn start` se estiver usando *Yarn*.

## 📚 Funcionamento

Requisitando com o método *GET* o **endpoint /schedule/nome-do-cameonato** e passando como parâmetro o nome do campeonato que deseja 
ver a tabela é devolvido um JSON com um Array de objetos, contendo o nome e a posição atual do time na classificação. 

Um exemplo simples seria: **http://localhost:3000/schedule/brasileirao-serie-a**

Hoje os campeonatos possíveis para consulta passando como parâmetro são:

* brasileirao-serie-a
* brasileirao-serie-b
* brasileirao-serie-c

Todas as informações são coletadas por web scraping, sendo que a consulta é realizada na página do __globoesporte.globo.com__.