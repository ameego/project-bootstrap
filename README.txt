––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        OVERVIEW
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

This boilerplate has the basics to kickstart quickly a project:

    –– Basic folder structure

    –– Working grunt file including the following tasks:

            ø Clean: removes folder/files,
            ø Concat: concatenates files together,
            ø Copy: copies files from one place to another,
            ø Compass: compiles sass files,
            ø Jshint: validates js code,
            ø Jasmine: exectutes unit-test
            ø Uglify: minifies & uglify code,
            ø Data-uri: converts image-path to data-uri for the embeded/ image folder
            ø Compression of images: compress jpg/png images,
            ø CSS Style guide: generates CSS Style Guide

    –– Structure for SASS, including:
            ø Sprite handling,
            ø Fonts handling,
            ø Common Mixins / Variables / Base styles,

    –– Basic index.html



––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        REASON BEING
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

This project is collaborative.

It must benefit from everybody's experiences and ideas.

It must be always up to date to make our life easier.



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

5. Run command in project directory `npm install` to get all the dependencies required to build the project.

TO RUN THE BUILD (has to be done from the folder of the project)
    $ grunt