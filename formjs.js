function particle(x,y) {
    let x1=this.x;
    let y1=this.y; 
    return x**2+y**2   
}
function object(x,y,name) {
    this.x=x;
    this.y=y;
    this.name=name;    
}
objectslist=[];
document.getElementById('foam').addEventListener('submit',validate);
function validate() {
    let x= document.getElementById('x').value;
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    console.log([x,name,age]);
    console.log( name.length >3 );
    if (name.length > 3) {
        let ol=(new object(x,age,name))
        let divHandle=document.getElementById('foam');
        var target= document.getElementById('foam')
        target.innerHTML+='<input type=radioButton" id="radua" name="radua">';
        console.log(ol)
        
    }

    
}    


let x= document.getElementById('x').value;
let name=document.getElementById('name').value;
let age=document.getElementById('age').value;

console.log(x);
console.log(typeof(x));
let ob1= new object();
ob1.x=x;
ob1.y=age;
ob1.name= name;
console.log(ob1);
console.log(particle(x,age))
