//quotes array
var quotes = [
'Non ut iusto nihil sapiente aut quo amet vel.',
'Ea reprehenderit quis aut cupiditate ut.',
'Consequatur qui ea corporis enim dolorem non quas.',
'Cumque eum dicta deleniti.',
'Quis molestiae veritatis nihil rem ipsam.'
]

//image factory
var createImage = function(x, src, title) {
	var x = new Image();
	x.src = src;
	x.alt = title;
	x.title = title;
	return x;
}

//image array
var pics = [
]

//push images to array
pics.push(createImage("angelaDavis", "images/angelaDavis.jpeg", "angelaDavis"));
pics.push(createImage("assataShakur", "images/assataShakur.jpg", "assataShakur"));
pics.push(createImage("emmaGoldman", "images/emmaGoldman.jpeg", "emmaGoldman"));
pics.push(createImage("helenKeller", "images/helenKeller.jpeg", "helenKeller"));
pics.push(createImage("rosaLuxemborg", "images/rosaLuxemborg.jpeg", "rosaLuxemborg"));
pics.push(createImage("emilianoZapata", "images/emilianoZapata.jpeg", "emilianoZapata"));
pics.push(createImage("tarikaMatilaba", "images/tarikaMatilaba.png", "tarikaMatilaba"));
pics.push(createImage("thomasSankara", "images/thomasSankara.jpeg", "thomasSankara"));
pics.push(createImage("kathleenCleaver", "images/kathleenCleaver.png", "kathleenCleaver"));

//create canvas/info
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  
  //newQuote function: clear canvas, create RNG, print quotes+name to display, draw image
function newQuote() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	var quoteNum = Math.floor(Math.random() * (quotes.length));
	var picNum = Math.floor(Math.random() * (pics.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[quoteNum];
	document.getElementById('nameDisplay').innerHTML = pics[picNum].title;
   	context.drawImage(pics[picNum], 10, 10);
}