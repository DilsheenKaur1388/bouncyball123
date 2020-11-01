class Ground{
    constructor(){
        var options= {
            isStatic :true
        }
        this.body = Bodies.rectangle(200,380,500,10,options);
        this.width = 500;
        this.height= 10;
        World.add(world, this.body);

    }
    display()
        { push ();
            strokeWeight(9)
            stroke("brown")
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y, this.width,this.height);
            pop ();
        }
    
}