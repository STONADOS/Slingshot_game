class boxes{
    constructor(x, y){
        var options = {
            density:1.2,
            friction:1.7
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
}