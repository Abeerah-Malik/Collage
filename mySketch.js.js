//variables for images
var bg;
var quote;
var building;
var birds;
var cloud;
var lilies;
var trees;
var butterflyOne;
var butterflyTwo;
var statue;

//x and y position variables for images
var xbg;
var ybg;

var xquote;
var yquote;

var xbuilding;
var ybuilding;

var xbirds;
var ybirds;

var xcloud;
var ycloud;

var xlilies;
var ylilies;

var xtrees;
var ytrees;

var xbutterflyOne;
var ybutterflyOne;

var xbutterflyTwo;
var ybutterflyTwo;

var xstatue;
var ystatue;


function preload() {
	
	//put all images according to layer order
	bg = loadImage('bg.jpg');
	quote = loadImage('quote.png');
	building = loadImage('building.png');
	letter = loadImage('letter.png');
	birds = loadImage('birds.png'); 
	cloud = loadImage('cloud.png');
	lilies = loadImage('lillies.png');
	trees = loadImage('trees.png');
	butterflyOne = loadImage('butterflyOne.png');
	butterflyTwo = loadImage('butterflyTwo.png');
	statue = loadImage('statue.png');	
}



function setup() {
	createCanvas(600, 800);
	
	//set x and y values for each image to create collage
	xbg = 0;                 //x and y of bg
	ybg = 0;
	
	xquote = 280;           //x and y of quote
	yquote = 380;
	
	xbuilding = 0;          //x and y of building
	ybuilding = 310;
	
	xletter = 490;          //x and y of letter
	yletter = 55;
	
	xbirds = 270;           //x and y of birds 
	ybirds = 650;
	
	xcloud = 20;            //x and y of cloud
	ycloud = 10;
	
	xlilies = 340;         //x and y of lilies
	ylilies = -10;
	
	xtrees = -80;           //x and y of trees
	ytrees = 545;
	
	xbutterflyOne = 80;    //x and y of bgbutterflyOne
	ybutterflyOne = 100;
	
	xbutterflyTwo = 110;   //x and y of butterflyTwo
	ybutterflyTwo = 170;
	
	xstatue = 400;        //x and y of statue
	ystatue = 425;
	
}

function draw() {

	//call the images to have them appear on canvas in specific order
	image(bg , xbg, ybg);                               //Draw bg
	image(quote , xquote, yquote);                      //Draw quote
	image(building,xbuilding,ybuilding);                //Draw building
	image(letter,xletter,yletter);                      //Draw letter 
	image(birds,xbirds,ybirds);                         //Draw birds
	image(cloud,xcloud,ycloud);                         //Draw cloud
	image(lilies,xlilies,ylilies);                      //Draw lilies
	image(trees,xtrees,ytrees);                         //Draw trees
	image(butterflyOne,xbutterflyOne,ybutterflyOne);    //Draw butterflyOne
	image(butterflyTwo,xbutterflyTwo,ybutterflyTwo);    //Draw butterflyTwo
	image(statue,xstatue,ystatue);                      //Draw statue
}


function keyPressed() {
	
	if (key == 'd' || key == 'D') {
		//set random x and y positions for images
		xquote = random(280,300);               //randomize x & y for quote
	  yquote = random(230,620);
		
		xbuilding = random(0,20);               //randomize x & y for building
	  ybuilding = random(210,310);
		
		xletter = random(350,540);              //randomize x & y for letter
	  yletter = random(0,200);
		
	  ybirds = random(500,650);              //randomize  y for birds
		
		xcloud = random(0,80);                 //randomize x & y for cloud
	  ycloud = random(0,80);
		
	  ylilies = random(-10,80);              //randomize y for lilies
	 
		ytrees = random(350,600);              //randomize x & y for trees
		
		xbutterflyOne = random(50,150);        //randomize x & y for butterflyOne
	  ybutterflyOne = random(50,150);
		
		xbutterflyTwo = random(50,100);        //randomize x & y for butterflyTwo
	  ybutterflyTwo = random(100,200);
		
		ystatue = random(350,400);             //randomize y for statue
	
	}
	
	if (key == 's' || key == 'S') {
		saveCanvas('Abeerah_Malik_Collage_assignment.jpg');
	}
	
	
	
	
	
	
}



















