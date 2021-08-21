class Question{
    constructor(){
        this.title=createElement('h2');
        this.title.html("{GREETINGS TO THE CONTESTANTS}");
        this.title.position(750, 50);
        this.title.style('font-size', '33px');
        this.title.style("color","black");
       
        this.access1=createInput("ans");
        this.access1.position(100,390);
        this.access1.style("background","white");

        this.button1=createButton("check");
        this.button1.position(100,420);
        this.button1.style("background","lightgrey");

        this.access2=createInput("ans");
        this.access2.position(1310,500);
        this.access2.style("background","white");

        this.access3=createInput("ans");
        this.access3.position(700,500);
        this.access3.style("background","white");
       

        this.button2=createButton("check");
        this.button2.position(1300,550);
        this.button2.style("background","lightgrey");
        
        this.button3=createButton("check");
        this.button3.position(700,550);
        this.button3.style("background","lightgrey");

    
    }
    hide(){
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();

    this.access1.hide();
    this.access3.hide();
    this.access2.hide();
    }
    display(){
       this.button1.mousePressed(()=>{
       if(system.authentication(accessCode1,this.access1.value())){
           this.button1.hide();
           this.access1.hide();
           score+=1;
           fill("green");
           stroke(255);
           strokeWeight(16);
           textSize(20);
           text("Correct!",100,650);
       }
       })

        this.button2.mousePressed(()=>{
            if(system.authentication(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score+=1;
                fill ("green");
            stroke (255);
            strokeWeight (16);
            textSize(20);
            text("Correct!",1300,640);

            }
        })

        this.button3.mousePressed(()=>{
            if(system.authentication(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score+=1;
                fill ("green");
                stroke ("white")
                strokeWeight(16);
                textSize(20);
                text ("Correct!",700,640);
                
            }
        })
    
}}