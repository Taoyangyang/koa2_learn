const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function(ctx, next) {
	ctx.response.type = 'html';
	ctx.response.body = await fs.readFile('./html/01.html', 'utf8');
};

app.use(main);

app.listen(3000);