Scribble.js
===========
Scribble.js draws scribbly looking things. 
[Live here.](http://1j01.github.io/scribble/font-recorder)


Handwriting Simulator
---------------------
The most notable (most existing) feature is the handwriting simulator contained in scribblefonts.js. It allows you to make handwriting far more belivable than regular fonts, even ones that choose between multiple glyphs per character.

Modules
-------
If scribble.js existed and used modules and was a thing, it might look something like this:

Scribble.js uses modules: pens, contexts, and (when using scribblefonts.js) fonts.

A context is an interface to something like a canvas or an svg.

A pen is the bridge between the context and a drawing action. It has properties such as color size radius shape width height slant etc.

A font consists of a map of sets of paths handwritten and a function to iterate over it.


font.json
---------
A sample font is given for testing, convinience, or whatever. Maybe you can find some other use for some, uh, typographic data. 

Not that it matters, but fonts are of this form: 
```js
var sudoFont = {
    
    name: "Hello World",
    //Glyphs is a map of glyphs (characters) to Paths.
        //Paths are arrays of PathNodes.
            //PathNodes are objects with position and pressure.
    glyphs: {
        "A":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        "B":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        "C":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        ...
    },
    
    //Optional metadata:
    metaData: "This stuff Is Optional",
    otherMetaData: "whatever"
};
```
