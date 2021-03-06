module.exports = {
    html: {
        src: ['d:/wamp/www/phaser/README.md'],
        options: {
            configure: 'tasks/jsdoc-conf.json',
            /* The destination and private options must be redefined event if there are always in the configure file otherwise, grunt-jsdoc overwrite it with its default values */
            destination: 'docs',
            private: false
        }
    },
    json: {
        src: [],
        options: {
            configure: 'tasks/jsdocexportjson-conf.json',
            /* The destination options must be redefined event if there is always in the configure file otherwise, grunt-jsdoc overwrite it with its default value */
            destination: './out'
        }
    }
};