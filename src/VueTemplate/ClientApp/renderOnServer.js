const aspnetRenderer = require('aspnet-prerendering')
const path = require('path');

// Create the renderer
const vueRenderer = require('vue-server-renderer').createBundleRenderer(path.join(__dirname, '../wwwroot/dist/main-server.js'));

// Render the instance using aspnet's renderer
module.exports = aspnetRenderer.createServerRenderer(function(params){
    return new Promise(function(resolve, reject) {
        const context = { url: params.url };
        vueRenderer.renderToString()
            .then(html => {
                resolve({
                    html: html
                });
                console.log(app);
            })
            .catch(err => {
                console.error(err);
                reject();
            });
    })
});