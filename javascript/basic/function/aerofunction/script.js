()=>
{
    console.log("i am a aero function");
}

//expression 
const a=()=>{
    console.log("mansi is doing aerofunction work")
}
a();

//const a=(name)=>{}
// const a=name=>{}
 //const a=(a,b)=>{ return a+b}  
 // const a=(a,b)=> a+b;

 
 //callback function


 function add(a,b)
 {
    let x=a+5;
    let y=b+5;
    console.log(x+y);
 }
 function sum(m , n,jor)
 {
    let p=m*2;
    let q=n*2;
    jor(p,q);
 }
 sum(5,6,add);