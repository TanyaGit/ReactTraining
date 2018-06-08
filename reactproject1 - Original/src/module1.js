//export default class Point{
    export class Point{

    constructor(x,y){
        this.x=x; //this.x = Instance Variable & x= local variable
        this.y=y;
    }
    display(){
        console.log(this.x + ":" + this.y);
    }
}

export default Point; // Another way to define Export as default.

export class Point3D extends Point{

    constructor(x,y,z){
        super(x,y);
        this.z=z; //this.x = Instance Variable & x= local variable
        
        }
        display(){
            super.display(); // displays only x & Y values
            console.log(this.x + ":" + this.y + ":" + this.z);
        }
    }