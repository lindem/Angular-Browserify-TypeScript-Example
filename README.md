# Angular with TypeScript and Browserify example
> You need node.js to run this. I wrote this with IDEA and its TS plugin on
> Linux, but it was reported to work on windows as well; thanks to 
> [@HansS](https://github.com/HansS) for that. 

This example does nothing useful, it's purely for structure illustration
purposes.

The following structure is provided for your amusement:

    +--- /browser
    |    |
    |    +--- main.js & index.html
    |
    +--- /src
    |    |
    |    +--- TestApp.ts
    |    +--- TestCtrl.ts
    |    +--- TestItemsService.ts
    |
    +--- package.json
    |
    +--- Gruntfile.js

to build the example, directly after cloning, run

    npm install
    grunt

in the repository directory. This will create a couple of `.js` files in `src`
and the `build.js` file in `browser`.

You can then start a webserver using

    grunt connect

Suggestions welcome.
