const aspnetRenderer = require('aspnet-prerendering')
const createApp = require('./app');

// Create the renderer
const vueRenderer = require('vue-server-renderer').createRenderer();

// Render the instance using aspnet's renderer
module.exports = aspnetRenderer.createServerRenderer(function(params){
    return new Promise(function(resolve, reject) {
        const context = { url: params.url };
        const app = createApp(context);
        
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