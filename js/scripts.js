var everything = ['.and', '.crybaby', '.refresh']
//show/hide content

$('h1').click(function(){
  $('h1').hide(10);
  $('figure, .back').fadeIn(3000);
  
});



//random number generator
var maxRand = 15;
var numRand = Math.floor( Math.random() * maxRand );
console.log(numRand);

//background colors
var bgcolor = [ '#c3ad91', '#c3ad91', '#cbbcaa', '#f5e7d5', '#c7a983', '#d9cec1', '#efe7dc', '#77644c', '#5a4b39', '#fff3e4', '#5d482d', '#2a231a', '#cb9d64', '#f7eee4', '#efc188']

console.log(bgcolor[numRand]);

//store color change function

$('h1').css('color', bgcolor[numRand]);
                           

// YOUR SCRIPTS GO HERE
// ACTIVATE GALLERY

$('figure').lightGallery({
    selector: 'a',
    thumbnail:true,
    zoom:true
    
});

