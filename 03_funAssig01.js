console.log("============step1==============");
function display(){
    console.log("I love Javascript because i learned from codemind");
}
display();

console.log("============step2==============");
function personalDetails(firstName,lastName,collegeName){
    console.log("My Name is: ",firstName      ,
    "\nlast name is: ", lastName      ,
    "\ncollege Name is: ",collegeName);
}
personalDetails("aditi","kale","DRK");

console.log("============step3==============");
function swapValues(arg1,arg2) {
    console.log("before Swap: \n",arg1 , "\n", arg2);
    var temp =arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After swap: \n",arg1 ,"\n", arg2);
}
swapValues("virat","Anushka");
swapValues(1000, 2000);

console.log("============step4==============");
function addThreeValues(para1,para2,para3) {
    
    console.log(para1+para2+para3);
    
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ","Good ","Morning")