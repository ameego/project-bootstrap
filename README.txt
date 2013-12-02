––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        OVERVIEW
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

This boilerplate holds all the basic things we need to kickstart quickly a project:

    –– Basic folder structure

    –– Working grunt file including the following tasks:

            ø Clean: removes folder/files,
            ø Concat: concatenates files together,
            ø Copy: copies files from one place to another,
            ø Compass: compiles sass files,
            ø Jshint: validates code,
            ø Jasmine: exectutes unit-test
            ø Uglify: minifies & uglify code,
            ø Data-uri: converts image-path to data-uri,
            ø Minification of images: minifies jpg/png images,
            ø CSS Style guide: generates CSS Style Guide

    –– Structure for SASS, including:
            ø Sprite handling,
            ø Fonts handling,
            ø Common Mixins / Variables / Base styles,

    –– Basic index.html

    –– Basic folder structure for scripts

    –– Basic folder structure for unit-test

    –– Basic folder structure for Robot


––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        HOW TO SET UP THE PROJECT ?
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

0. Uninstall previous version of Grunt
    npm uninstall -g grunt

1. Install grunt-cli
    npm install -g grunt-cli

2. Install / Update node
	http://nodejs.org/download/

<WINDOWS ONLY>
    Install Ruby
    http://rubyinstaller.org/downloads/
</WINDOWS ONLY>

3. Install Compass
	sudo gem install compass

4. Install Sass
	sudo gem install sass

5. Get all the dependencies required to build the project. Run command in project directory.
    npm install

TO RUN THE BUILD (has to be done from the folder of the project)
    $ grunt