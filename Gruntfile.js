/**
 * This file is part of the default package recommendation.
 * (c) 2013 Timo Lindemann, Sol Venetus Software GmbH
 *
 */

module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            options: {
                compile: true,
                target: "es5",
                module: "commonjs",
                sourceMap: true
            },
            build: {
                src: ["src/*.ts"]
            }
        }, clean: {
            buildclean: ["src/*.js", "src/*.map"],
            browser: ["browser/build.js"]
        }, browserify: {
            build: {
                files: {
                    "browser/build.js": ["browser/main.js"]
                }
            }
        },
        connect: {
            default: {
                options: {
                    port: 8000,
                    base: "./browser",
                    debug: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.registerTask("default", [
        "clean:buildclean",
        "clean:browser",
        "ts:build",
        "browserify:build"
    ]);
};