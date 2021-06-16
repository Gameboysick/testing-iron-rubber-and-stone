class Iron{
	constructor(x,y,width,height)
	{

        
	var options = {
friction:3,
density:30,
restitution:0.8

	}
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(x,y,width,height,options)
		World.add(world, this.body);

	}
	display()
	{
        var pos = this.body.position;
        var angle = this.body.angle;
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("darkgray");
			//draw the ellipse here to display the rubber ball
              rect(0,0,this.width,this.height)
			pop()
	}
}