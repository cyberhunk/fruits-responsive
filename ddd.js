// function frame(){
//     this.height=33;
//     this.width=63;
//     this.color="gray";

// }
// var a =new frame();
// var b =new  frame();
// var c =new frame();


// THIS IS IFFI FUNCTION WE CAN USE INSITE FUNCTION 
// var iifi=(function(){
    // var a = 20;
    // return {}

    // var b = a;
    // console.log(a)
// }) ()



// THIS IS INHERITANCE Function---
var human = {
    talk: true,
    walk: true,
    eat: true,
    fly:false

}
var bird= {
    talk: false,
    walk:true,
    fly:true
}
bird.__proto__=human;