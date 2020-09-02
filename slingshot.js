class SlingShot{
	constructor(body,offsetX,offsetY)
	{
		  this.offsetX = offsetX;
            this.offsetY = offsetY;
		var options={
             bodyA:body,			
			 pointB    :{x:this.offsetX,y:this.offsetY},
			stiffness:0.07, 
			length:12
			
		}
		
		this.Slingshot = Constraint.create(options);
		World.add(world,this.Slingshot);
	}

 display()
	{
		if(this.Slingshot.bodyA)
	{
		var pointA = this.Slingshot.bodyA.position;
        var pointB = this.Slingshot.bodyB.position;

		var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
        var Anchor2X =  this.offsetX;
		var Anchor2Y =  this.offsetY;
		
			 strokeWeight(5);		
            //stroke('#301608');
			//line(this.Slingshot.bodyA.position.x,this.Slingshot.bodyA.position.y,this.pointB.x,this.pointB.y);
			line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
		}
	}

	attach(body)
	{
		this.Slingshot.bodyA=body;
	}

	fly()
	{
		this.Slingshot.bodyA=null;
	}
}