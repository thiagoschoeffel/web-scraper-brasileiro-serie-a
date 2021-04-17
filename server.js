const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/tabela/:league', async (request, response) => {
    const { league } = request.params;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://globoesporte.globo.com/futebol/${league}/`);

    const teamList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('.tabela__equipes .classificacao__tabela--linha');
        const teamArray = [...nodeList];
        
        const teamList = teamArray.map((team) => ({
            name: team.querySelector('.classificacao__equipes--nome').innerHTML,
            position: team.querySelector('.classificacao__equipes--posicao').innerHTML
        }));

        return teamList
    });

    await browser.close();

    response.send(teamList);
});

const port = 3000;

server.listen(port, () => {
    console.log(`
        🚀 Servidor iniciado com sucesso! acesse http://localhost:${port}
    `);
});