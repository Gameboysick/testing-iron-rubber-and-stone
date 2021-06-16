class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
friction:0.9,
density:12,
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
			stroke("gray");
			fill("darkgray");
			//draw the ellipse here to display the rubber ball
              rect(0,0,this.width,this.height)
			pop()
	}

}