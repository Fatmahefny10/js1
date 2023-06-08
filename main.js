// create afunction to calculate average to agroup of number at least 10
function average(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10){
    return (x1+x2+x3+x4+x5+x6+x7+x8+x9+x10)/10 ;
}
 console.log(average(1,2,3,4,5,6,7,8,9,10)); 
 document.getElementById("de").innerHTML="the average = " + (average(1,2,3,4,5,6,7,8,9,10));
document.getElementById("de").style.color="red";




// craete afunction  that takes rhe base and hight of atriangle and return its area;
function area(base,height){
    return 0.5*base*height;
}
 console.log(area (5,4));
 document.getElementById("d").innerHTML="the area = " + (area (5,4));
document.getElementById("d").style.color="green";



// craet function that takes the age in years and return  the age in days and print it on console

function age(years){
    return years*365;
    
}
console.log(age(30));
document.getElementById("di").innerHTML="the days = " + (age(30));
document.getElementById("di").style.color="blue";




//create afunction take two number and return the sum
function sum(x,y){
    return x+y;
}

console.log(sum(5,6));
document.getElementById("dio").innerHTML="the sum = " + (sum(5,6));
document.getElementById("dio").style.color="red";


// create afunction that takes 10 names and return the first

function na(){
    const x =["ahmed","mai","shimaa","revan","razan"];

return x[0];
}
console.log(na());
document.getElementById("a").innerHTML="the first name = "+ (na()); 
document.getElementById("a").style.color="green";



//create function shows my name in html;
function myname(num){

return num;
}

//document.write(myname('fatma hefny khodary'));

//alert (myname('fatma hefny khodary'));
console.log(myname('FATMA HEFNY KHODARYsss'));
document.getElementById("demo").innerHTML=(myname('Fatma Hefny Khodary'));
document.getElementById("demo").style.color="blue";


//crate function that takes hours and return seconds;
function hour(u){
    return u*60*60;

}
console.log(hour(2));
document.getElementById("dion").innerHTML="the seconds = " +(hour(2));

//create afunction take four number if the sum of the number true false
function num_sum(x,y,z,a){
    const total=x+y+z+a;
    if (total == 320){
        return true;
    console.log(true);  
}
   
else {
    return false;
    console.log(false);
}
}

document.getElementById('diok').innerHTML=" if the number 10,100,200,10  the statue " + num_sum(100,200,10,10);
document.getElementById('diok').style.color="red";
document.getElementById('diok').style.fontSize="20px";

document.getElementById('tr').innerHTML=" if the number 50,100,30,20 the statue " + num_sum(50,100,30,20);
document.getElementById('tr').style.color="green";
document.getElementById('tr').style.fontSize="20px";



//alert (num_sum(10,20,30,40));
//document.getElementById("demo").innerHTML="i love you";
 //const my_name='fatmallllllllll';
 //document.getElementById('div').innerHTML=my_name;
 //document.getElementById('div').style.color="red";
