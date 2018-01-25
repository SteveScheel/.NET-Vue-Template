const aspnetRenderer = require('aspnet-prerendering')
// Have a vue instance to run
const Vue = require('vue');
const app = new Vue({
    template: `<h1>Hello from Vue JS!</h1>`
});

// Create the renderer
const vueRenderer = require('vue-server-renderer').createRenderer();

// Render the instance using aspnet's renderer
module.exports = aspnetRenderer.createServerRenderer(function(params){
    return new Promise(function(resolve, reject) {
        vueRenderer.renderToString(app)
            .then(html => {
                resolve({
                    html: html
                });
            })
            .catch(err => {
                console.error(err);
            });
    })
});