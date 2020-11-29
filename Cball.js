class Cball
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var Cballpos=this.body.position;
        push();
        fill("red");
        translate(Cballpos.x,Cballpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}