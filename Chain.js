class Chain{
    constructor(body1,body2){
        var chain_options= {
            bodyA:body1,
            bodyB:body2,
            stiffness:1,
            length:10,
        }
        this.body= Constraint.create(chain_options)
        World.add(world, this.body);
        console.log(this.body);
    }
    display(){
        var positionA= this.body.bodyA.position; 
        var positionB= this.body.bodyB.position;
        strokeWeight(4);
        line(positionA.x,positionA.y, positionB.x,positionB.y)
        
    }
}