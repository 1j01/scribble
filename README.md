Scribble.js
===========
Scribble.js draws scribbly looking things. 

Scribblefonts.js
----------------
The most notable feature is the handwriting simulator contained in scribblefonts.js. It allows you to make handwriting far more belivable than regular fonts, even ones that choose between multiple glyphs per character.

Modules
-------
If scribble.js existed and used modules, it might look something like this:
Scribble.js uses modules: pens, contexts, and (when using scribblefonts.js) fonts. 
A context is an interface to something like a canvas or an svg. 
A pen is the bridge between the context and a drawing action. It has properties such as color size radius shape width height slant etc.
A font consists of a map of sets of paths handwritten and a function to iterate over it.

Use Cases
---------
Scribble.js could be used to stylize a game. That'd look pretty neat.

Scribble.js could be used in place of the unholy comic sans, if you are really set on handwriting and/or/um... can't find any other handwriting fonts? Well, I suppose this would still be better.

Scribble.js could be used in some poetry generator to make it look more like it was a recording say to help trick someone into reading a really long "composition".

font.json
---------
A sample font is given for testing, convinience, or whatever. Maybe you can find some other use for some, uh, typographic data. 

Not that it matters, but fonts are of this form: 
```json
{
    //Glyphs is a map of glyphs (characters) to Paths.
    glyphs: {
        "A":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        "B":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        "C":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        ...
        //Paths are arrays of PathNodes.
        //Nodes are objects with position and pressure.
    },
    
    //Optional metadata:
    name: "Hello World!", 
    authour: "All Of This Is Optional",
    otherMetaData: "whatever"
}
```
