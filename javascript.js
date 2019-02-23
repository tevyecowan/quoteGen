//quotes array
var quotes = [
'\"Non ut iusto nihil sapiente aut quo amet vel.\"',
'\"Ea reprehenderit quis aut cupiditate ut.\"',
'\"Consequatur qui ea corporis enim dolorem non quas.\"',
'\"Cumque eum dicta deleniti.\"',
'\"Quis molestiae veritatis nihil rem ipsam.\"'
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
pics.push(createImage("angelaDavis", "images/angelaDavis.jpeg", "Angela Davis"));
pics.push(createImage("assataShakur", "images/assataShakur.jpg", "Assata Shakur"));
pics.push(createImage("emmaGoldman", "images/emmaGoldman.jpeg", "Emma Goldman"));
pics.push(createImage("helenKeller", "images/helenKeller.jpeg", "Helen Keller"));
pics.push(createImage("rosaLuxemborg", "images/rosaLuxemborg.jpeg", "Rosa Luxemborg"));
pics.push(createImage("emilianoZapata", "images/emilianoZapata.jpeg", "Emiliano Zapata"));
pics.push(createImage("tarikaMatilaba", "images/tarikaMatilaba.png", "Tarika Matilaba"));
pics.push(createImage("thomasSankara", "images/thomasSankara.jpeg", "Thomas Sankara"));
pics.push(createImage("kathleenCleaver", "images/kathleenCleaver.png", "Kathleen Cleaver"));

//create canvas/info
var layer1;
var layer2;
var ctx1;
var ctx2;
var WIDTH = 500;
var HEIGHT = 500;

function init() {
layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
setInterval(drawAll, 20);
}

function drawAll() {
draw1();
draw2();
}

function draw1() {
  ctx1.clearRect(0, 0, WIDTH, HEIGHT);
  ctx1.font = "24pt arial";
    //redraw image
  ctx1.drawImage(chosenPic, 0, 0);
    //refill text
  ctx1.fillStyle = "red", 74;
   
  var lines = fragmentText((chosenQuote + "- " + chosenPic.title), 300 - parseInt(ctx1.font,0));
  lines.forEach(function(line, i) {
    console.log(i);
    ctx1.fillText(line, 25 / 2, (i + 10) * parseInt(ctx1.font,0));
  });
}

function draw2() {
  ctx2.clearRect(0, 0, WIDTH, HEIGHT);
  ctx2.globalAlpha = 0.35;
  ctx2.fillStyle = "grey";
  ctx2.fillRect(5, 8* parseInt(ctx1.font,0), 300 - parseInt(ctx1.font,0), 175 - parseInt(ctx1.font,0));
}




//function to split text into lines/wrap text
function fragmentText(text, maxWidth) {
    var words = text.split(' '),
        lines = [],
        line = "";
    if (ctx1.measureText(text).width < maxWidth) {
        return [text];
    }
    while (words.length > 0) {
        while (ctx1.measureText(words[0]).width >= maxWidth) {
            var tmp = words[0];
            words[0] = tmp.slice(0, -1);
            if (words.length > 1) {
                words[1] = tmp.slice(-1) + words[1];
            } else {
                words.push(tmp.slice(-1));
            }
        }
        if (ctx1.measureText(line + words[0]).width < maxWidth) {
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

	var quoteNum = Math.floor(Math.random() * (quotes.length));
	var picNum = Math.floor(Math.random() * (pics.length));

 	chosenPic = pics[picNum];
 	chosenQuote = quotes[quoteNum];

  init();
  
      
    
}

	

