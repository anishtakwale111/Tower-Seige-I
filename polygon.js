class Polygon {
    constructor(x,y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r ,options) ;
        this.x =x;
        this.y = y;
        this.radius = r;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        fill(255,0,120);
        ellipseMode(RADIUS);
        ellipse(0, 0,this.radius);
    pop();
    }
}