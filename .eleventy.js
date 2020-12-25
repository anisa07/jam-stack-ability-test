require('dotenv').config();
module.exports = function(config) {

    config.setBrowserSyncConfig({
        https: {
            key: './keys/key.pem',
            cert: './keys/cert.pem'
        }
    });

    config.addPassthroughCopy("src/js")
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    }
}