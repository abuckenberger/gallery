//random number generator
var maxRand = 15;
var numRand = Math.floor( Math.random() * maxRand );
console.log(numRand);

//background colors
var bgcolor = [ '#c3ad91', '#c3ad91', '#cbbcaa', '#f5e7d5', '#c7a983', '#d9cec1', '#efe7dc', '#77644c', '#5a4b39', '#fff3e4', '#5d482d', '#2a231a', '#cb9d64', '#f7eee4', '#efc188']

console.log(bgcolor[numRand]);

//store color change function

var colorchange = function(){('body').css('background-color', bgcolor[numRand]);
                            };

// YOUR SCRIPTS GO HERE
// ACTIVATE GALLERY

$('figure').lightGallery({
    selector: 'a',
    thumbnail:true,
    zoom:true
    
});

//On h1 click the content appears

$('h1').click(function(){
    
 $('figure').fadeIn('1s'); 
  
});


//On each h1 click the background changes 















