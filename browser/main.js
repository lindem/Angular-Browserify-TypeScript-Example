/*
 Of course one could do this "glue" file in TS as well. I went with JS because
 it's just me droning on uninterestingly in comments and what, two statements.

 We don't use module.exports from the other module, as angular is just
 concerned about having its methods called and there isn't a handler for
 DOMContentLoaded as there would be with jQuery. I will provide a handler for
 an example below.

 Here, you just tell browserify that the module in question is required in
 this script. This is perfectly within semantics of CommonJS, by the way --
 the file will be evaluated without offering exports.
 */

require("../src/TestApp.js");

/*
 example handler for your DOMContentLoaded. Doesn't run in old IEs because of
 console object being used. Oh well. Most of the time you don't need this
 anyway, because angular is supposed to take control.
 */

window.addEventListener("load", function () {
    // props to everyone who gets this reference
    console.log("THERE IS ANOTHER SYSTEM");
});

