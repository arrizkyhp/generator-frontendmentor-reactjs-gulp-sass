const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    welcome() {
        this.log('Welcome to the reactjs gulp and Sass Generator!!');
    }

    writing() {
        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );
        this.fs.copy(
            this.templatePath('jsconfig.json'),
            this.destinationPath('jsconfig.json')
        );
        this.fs.copy(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath('src')
        );
    }

    end() {
        this.log(' ');
        this.log(' ');
        this.log('Finished generating!');
        this.log(' ');
        this.log(' ');
    }
}