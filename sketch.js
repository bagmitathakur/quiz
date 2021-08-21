var bg,bg2,form,system,code,question;
var score=0;


function setup() {
  createCanvas(2000,900);
  system = new System()
  question = new Question()
}

function draw() {
  background("lightgrey");
  
  clues();
  question.display();
  textSize(20);
  fill(79);
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background("green")
    fill("black")
    textSize(40);
    text("Game Competed",250, 200);
  }

  drawSprites();
}