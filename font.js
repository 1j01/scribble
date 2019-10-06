
/*
var PathNode={
    x: 0,
    y: 0,
    //x2: 0,
    //y2: 0,
    p: 1, //pressure!
    t: 10,//[optional] duration
    translate: function(x,y){
        this.x+=x; 
        this.y+=y;
    }
};
*/

var Path={
    nodes: [],
    x: 0,
    y: 0,
    fromText: function(text,font){
        this.nodes=[];
        //console.log(font);
        //console.log(JSON.stringify(font));
        //38,-190v0,-39,16,-66,51,-66v7,0,13,2,19,3r3,1r-3,19r-4,-1v-6,-1,-11,-2,-17,-2v-19,0,-28,15,-28,43r0,19r42,0r0,19r-42,0r0,155r-21,0r0,-155r-30,0r0,-19r30,0r0,-16
        var width=0,w=10;
        for(i=0; i<text.length; i++){
            var c=text[i];
            var g=font.glyphs[c];
            var gx=0;
            var gy=0;
            for(var j=0; j<g.length; j++){
                var n={x:g[j].x-gx,y:g[j].y-gy,p:g[j].p,t:g[j].t};
                /*if(j>0){
                    n.x-=g[j-1].x;
                    n.y-=g[j-1].y;
                }else{
                    n.x=1;
                    n.y=1;
                }*/
                this.addNode(n);
            }
            /*
            var g=font.glyphs[c].d;
            var w=font.glyphs[c].w;
            
            if(g && g.length){
                g=g.split(/[vrx]/);
                for(j=0; j<g.length; j++){
                    var n=g[j].split(",");
                    for(var _=0; _<n.length; _++){n[_]=parseInt(n[_],10);}
                    var node={};
                    
                    var err=false;
                    if(j===0){
                        if(n.length===2){
                            this.addNode({x:n[0],y:n[1],t:'M'});
                        }else{
                            err=true;
                        }
                    }else{
                        if(n.length===6){
                            //Approximation of quadratic beizer...
                            //this.addNode({x:n[0],y:n[1],t:'l'});
                            // var startX=n[0],
                            //     control1X=n[2],
                            //     control2X=n[4],
                            //     endX=n[6],
                            //     startY=n[1],
                            //     control1Y=n[3],
                            //     control2Y=n[5],
                            //     endY=n[7];
                            // var controlX = -0.25*startX + 0.75*control1X + 0.75*control2X -0.25*endX;
                            // var controlY = -0.25*startY + 0.75*control1Y + 0.75*control2Y -0.25*endY;
                            console.log(n);
                            this.addNode({x:n[0],y:n[1],x2:n[5],y2:n[6],t:'q'});
                            //this.addNode({x:n[2],y:n[3],x2:n[4],y2:n[5],t:'q'});
                            //this.addNode({x:n[0],y:n[1],x2:n[2],y2:n[3]});
                        }else if(n.length===2){
                            this.addNode({x:n[0],y:n[1],t:'t'});
                        }else if(n.length===0){
                            //this.addNode({t:'z'});
                            err=true;
                        }else{
                            err=true;
                        }
                    }
                    if(err){
                        this.addNode({t:'z'});
                        console.log("["+n.toString()+"].length==="+n.length+"  when it \"should\" be 2 or 6??? idk");
                    }
                }
                this.addBreak();
            }else{
                //console.log("No glyph for "+c);
            }
            */
            this.translate(-w);
            width+=w;
        }
        this.translate(width);
        //this.translate(-3500,-7500);
        //this.scale(0.3);
    },
    toSVG: function(svgElement){
        var curx=this.x, px=this.nodes[1].x,
            cury=this.y, py=this.nodes[1].y,
            d="M"+curx+" "+cury; //<svg:path d="${d}"></path>
            //thenMove=false;
            //Possible bug: moving after setting d to moved.
        for(var i=1; i<this.nodes.length; i++){
            var n=this.nodes[i];
            if(n.x && n.y && (n.p>0)){
                /*if(thenMove){
                    
                }else if(n.x2 && n.y2){
                    d+="q"+(n.x)+" "+(n.y)+" "+(n.x2)+" "+(n.y2)+"   ";
                    //d+="q"+n.x+" "+n.y+" "+n.x2+" "+n.y2+" ";
                }else{
                    d+="GORPGORPGORP"+(n.x)+" "+(n.y);
                    //d+="t"+n.x+" "+n.y;
                }*/
                //var nx=n.x-curx;
                //var ny=n.y-cury;
                //d += "l" +(nx)+ " " +(ny);
                //curx += n.x-px;
                //cury += n.y-py;
                //d += "L" + curx + " " + cury;
                d += "l"+n.x+" "+n.y;
            }else{
                if(d.match(/[qlt]/i)){
                    //d+="z";
                    //d+="m"
                    //console.log(d);
                    
                }
                
                //d="M"+curx+" "+cury;
                d += "M"+(curx+n.x)+" "+(cury+n.y);
            }
            px=n.x;
            py=n.y;
        }
        d += "z";
        //? str+="z";
        //return str;
        var path=document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttributeNS(null,"class","glyph");
        path.setAttributeNS(null,"d",d);
        //path.setAttributeNS(null,"fill","rgba(0,0,0,0)");
        //path.setAttributeNS(null,"stroke","black");
        svgElement.appendChild(path);
        //return d;
    },
    addNode: function(node){
        this.nodes.push(node);
    },
    addBreak: function(){
        var n=this.nodes[this.nodes.length-1];
        n.p=0;
        this.nodes.push(n);
    },
    scale: function(scale){
        for(var i in this.nodes){
            if(this.nodes[i].x) this.nodes[i].x*=scale;
            if(this.nodes[i].y) this.nodes[i].y*=scale;
        }
    },
    translate: function(dx,dy){
        /*for(var i in this.nodes){
            if(this.nodes[i].x && dx) this.nodes[i].x+=dx;
            if(this.nodes[i].y && dy) this.nodes[i].y+=dy;
        }*/
        for(var i in this.nodes){
            if((this.nodes[i].x || !dx) && (this.nodes[i].y || !dy)){
                this.nodes[i].x+=dx;                                
                this.nodes[i].y+=dy;
                break;
            }
        }
    },
    wobble: function(a){
        for(var i in this.nodes){
            if(this.nodes[i].x) this.nodes[i].x+=this.rand(a);
            if(this.nodes[i].y) this.nodes[i].y+=this.rand(a);
        }
    },
    
    rand: function(x){return (Math.random()*x)-x/2}
};

/*function Font(data) {
    var face = this.face = data.face, ligatureCache = [], wordSeparators = {
        ' ': 1,
        '\u00a0': 1,
        '\u3000': 1,
	};

	this.glyphs = (function(glyphs) {
        
		var key, fallbacks = {
			'\u2011': '\u002d',
			'\u00ad': '\u2011',
		};
		for (key in fallbacks) {
			if (!hasOwnProperty(fallbacks, key)) continue;
			if (!glyphs[key]) glyphs[key] = glyphs[fallbacks[key]];
		}
        
        if (!glyphs['\u2011']) glyphs['\u2011'] = glyphs['-'];
        if (!glyphs['\u00ad']) glyphs['\u00ad'] = glyphs['\u2011'];
		return glyphs;
	})(data.glyphs);

	this.w = data.w;
	this.baseSize = parseInt(face['units-per-em'], 10);

	this.family = face['font-family'].toLowerCase();
	this.weight = face['font-weight'];
	this.style = face['font-style'] || 'normal';

	this.viewBox = (function () {
		var parts = face.bbox.split(/\s+/);
		var box = {
			minX: parseInt(parts[0], 10),
			minY: parseInt(parts[1], 10),
			maxX: parseInt(parts[2], 10),
			maxY: parseInt(parts[3], 10)
		};
		box.width = box.maxX - box.minX;
		box.height = box.maxY - box.minY;
		box.toString = function() {
			return [ this.minX, this.minY, this.width, this.height ].join(' ');
		};
		return box;
	})();
    
	this.ascent = -parseInt(face.ascent, 10);
	this.descent = -parseInt(face.descent, 10);

	this.height = -this.ascent + this.descent;

	this.spacing = function(chars, letterSpacing, wordSpacing) {
		var glyphs = this.glyphs, glyph,
			kerning, k,
			jumps = [],
			width = 0, w,
			i = -1, j = -1, chr;
		while (chr = chars[++i]) {
			glyph = glyphs[chr] || this.missingGlyph;
			if (!glyph) continue;
			if (kerning) {
				width -= k = kerning[chr] || 0;
				jumps[j] -= k;
			}
			w = glyph.w;
			if (isNaN(w)) w = +this.w; // may have been a String in old fonts
			if (w > 0) {
				w += letterSpacing;
				if (wordSeparators[chr]) w += wordSpacing; //"\u00a0 \u3000"[chr]
			}
			width += jumps[++j] = ~~w; // get rid of decimals
			kerning = glyph.k;
		}
		jumps.total = width;
		return jumps;
	};
	this.applyLigatures = function(text, ligatures) {
		// find cached ligature configuration for this font
		for (var i=0, ligatureConfig; i<ligatureCache.length && !ligatureConfig; i++)
			if (ligatureCache[i].ligatures === ligatures)
				ligatureConfig = ligatureCache[i];

		// if there is none, it needs to be created and cached
		if (!ligatureConfig) {
			// identify letter groups to prepare regular expression that matches these
			var letterGroups = [];
			for (var letterGroup in ligatures) {
				if (this.glyphs[ligatures[letterGroup]]) {
					letterGroups.push(letterGroup);
				}
			}

			// sort by longer groups first, then alphabetically (to aid caching by this key)
			var regexpText = letterGroups.sort(function(a, b) {
				return b.length - a.length || a > b;
			}).join('|');

			ligatureCache.push(ligatureConfig = {
				ligatures: ligatures,
				// create regular expression for matching desired ligatures that are present in the font
				regexp: regexpText.length > 0 
					? regexpCache[regexpText] || (regexpCache[regexpText] = new RegExp(regexpText, 'g'))
					: null
			});
		}

		// return applied ligatures or original text if none exist for given configuration
		return ligatureConfig.regexp
			? text.replace(ligatureConfig.regexp, function(match) {
				return ligatures[match] || match;
			})
			: text;
	};
}
*/
