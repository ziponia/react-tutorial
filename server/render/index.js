const fs = require('fs');
const path = require('path');
const render = require('./render').default;
const serialize = require('serialize-javascript');

const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8' });

module.exports = async ctx => {
    const location = ctx.path;
    const { html, state, helmet } = await render(location);
    const page = template.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__PRELOADED_STATE__=${serialize(state)}</script>`)
                            .replace('<meta helmet>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`);
    ctx.body = page;
}