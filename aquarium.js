//Put your name here. Be sure to name the object  as well
//with your first name and last name


var brianSchott = {
    //Place all of your variables here that define the values of your shapes
    
    ellx: 10,
    elly: 10,
    ellw: 10,
    ellh: 10,
    
    
    create: function() {
        //Place all the functions here (ellipse, rect, triangle) to draw your fish
        
        ellipse(this.ellx, this.elly, this.ellw, this.ellh); //draws an ellipse
        
        
    },
    
    move: function() {
      //Place all of your statements to move the fish here  
        
        this.ellx += 2; //this should move it horizontally
        
    }
}

//Everything below here, do NOT copy+paste in your submission. Use only for testing purposes.

function preload() {
    //preloads background file before fish draw in
    background = loadImage("aquarium-background.jpg");
}

function setup() {
    createCanvas(1920, 1080); //draws canvas to size of background
}

function draw() {
    clear(); //clears the previous frame
    image(background,0,0); //loads background after canvas created, starts it at (0,0)

    //This section is for creating all of the fish
    brianSchott.create();
    
    //This section is for moving all of the fish
    brianSchott.move();
    
}
