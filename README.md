Scribble.js
===========
Scribble.js draws scribbly looking things. 

Scribblefonts.js
----------------
The most notable feature is the handwriting simulator contained in scribblefonts.js. It allows you to make handwriting far more belivable than regular fonts, even ones that choose between multiple glyphs per character.

Modules
-------
Scribble.js uses modules: pens, contexts, and in the case of scribblefonts.js, fonts. 
A context is something like a canvas or svg interface. 
A pen is bridges between a context and a drawing action. It has properties such as color size radius shape width height slant etc.
A font consists of recorded data and a function to iterate over it.

Use Cases
---------
Scribble.js could be used in some poetry generator to help trick someone into reading a long composition.
Scribble.js could be used to stylize a game. That'd look pretty neat.
Scribble.js could be used in place of the unholy comic sans, if you are really set on handwriting and/or/um... can't find any other handwriting fonts.
