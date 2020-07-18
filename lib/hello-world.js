const Plugin = require('@quarkboard/quarkboard-plugin');

class HelloWorld extends Plugin {
    init() {
        this.once('plugin-loading', (plugin, opts) => {
            if (this.is(plugin)) {
                opts.push(['', 'hello-world', 'Print "Hello World"']);
            }
        });
    }

    load() {
        if (this.app.options['hello-world']) {
            this.emit('exit', '>>> Hello, World');
            return;
        }
    }

    scripts() {
        return ['hello.js'];
    }

    styles() {
        return ['hello.css'];
    }
}

module.exports = HelloWorld;
