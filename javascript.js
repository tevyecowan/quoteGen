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

//test image 
img = new Image();
img.src = "images/assataShakur.jpg";
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
  var canvas = document.getElementById('myCanvas'),
      width = +(canvas.width = 500),
      height = +(canvas.height = 500),
  	  context = canvas.getContext('2d');

  var testText = "this is sasdfasdfasdfasdfasdfasdf ome text to test the text wrap function"

//function to split text into lines/wrap text
function fragmentText(text, maxWidth) {
    var words = text.split(' '),
        lines = [],
        line = "";
    if (context.measureText(text).width < maxWidth) {
        return [text];
    }
    while (words.length > 0) {
        while (context.measureText(words[0]).width >= maxWidth) {
            var tmp = words[0];
            words[0] = tmp.slice(0, -1);
            if (words.length > 1) {
                words[1] = tmp.slice(-1) + words[1];
            } else {
                words.push(tmp.slice(-1));
            }
        }
        if (context.measureText(line + words[0]).width < maxWidth) {
            line += words.shift() + " ";
        } else {
            lines.push(line);
            line = "";
        }
        if (words.length === 0) {
            lines.push(line);
        }
    }
    return lines;
}

  
  //newQuote function: 
  //clear canvas, create RNGs, print quotes+name to display,
  // draw image, fill quote text on image
  //
function newQuote() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	var quoteNum = Math.floor(Math.random() * (quotes.length));
	var picNum = Math.floor(Math.random() * (pics.length));

	document.getElementById('quoteDisplay').innerHTML = quotes[quoteNum];
	document.getElementById('nameDisplay').innerHTML = pics[picNum].title;

   	chosenPic = pics[picNum];
   	chosenQuote = quotes[quoteNum];
   	context.drawImage(chosenPic, 0, 0);
	context.font = "12pt Verdana";
    //redraw image
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(chosenPic, 0, 0);
    //refill text
    context.fillStyle = "red";
    var lines = fragmentText(chosenQuote, 300 - parseInt(context.font,0));
    lines.forEach(function(line, i) {
    	console.log(i);
        context.fillText(line, 300 / 2, (i + 1) * parseInt(context.font,0));
    	});
    
}

	

