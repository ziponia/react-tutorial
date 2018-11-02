const fs = require('fs');
const path = require('path');
const render = require('./render').default;

const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8' });

module.exports = ctx => {
    const location = ctx.path;
    const rendered = render(location);
    const page = template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    ctx.body = page;
}