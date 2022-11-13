console.log("Hellow World lol?");
console.log('i hate javascript (for now)');

//accept user input and display the same:
/*let age;
age = window.prompt("Etner your age:");
console.log("your age is: ", age);*/

//----------------start of age calculator--------------------

let y1, y2, m1, m2, d1, d2, yr, mon, dat;
let date = new Date();
let date2;
y1 = Number(date.getFullYear());
m1 = Number(date.getMonth()) + 1;
d1 = Number(date.getDate());
console.log(y1, m1, d1);

document.getElementById("first").onclick = function(){
    date2 = document.getElementById("ele").value;
    y2 = Number(date2.slice(0, 4));
    m2 = Number(date2.slice(5, 7));
    d2 = Number(date2.slice(8,));
    console.log(y2, m2, d2);

    yr = Math.abs(y1 - y2);
    mon = Math.abs(m1 - m2);
    dat = Math.abs(d1 - d2);

    function myfirstfunction(){
        mon -= 1;
        if(m2 == 1 || m2 == 3 || m2 == 5 || m2 == 7 || m2 == 8 || m2 == 10 || m2 == 12){
            dat = 31 - dat;
        }
        else if(m2 == 4 || m2 == 6 || m2 == 9 || m2 == 11){
            dat = 30 - dat;
        }
        else{
            dat = 28 - dat;
        }
    }

    if(m1 >= m2){
        if(d2 > d1){
            myfirstfunction();
        }
    }

    if(m2 > m1){
        yr -= 1;
        if(d2 > d1){
            mon += 2;
            myfirstfunction();
        }
        mon = 12 - mon;
    }

    document.getElementById("firstop").innerHTML = "You are " + yr + " year(s), " + mon + " month(s), " + dat + " day(s) old.";
}

//----------------end of age calculator--------------------

//----------------start of dice rolls----------------------

let rand;
document.getElementById("dicebtn").onclick = function(){
    document.getElementById("r1c1").innerHTML = "";
    document.getElementById("r1c3").innerHTML = "";
    document.getElementById("r2c1").innerHTML = "";
    document.getElementById("r2c2").innerHTML = "";
    document.getElementById("r2c3").innerHTML = "";
    document.getElementById("r3c1").innerHTML = "";
    document.getElementById("r3c3").innerHTML = "";
    rand = Math.floor((Math.random()*6) + 1);
    if(rand == 1){
        document.getElementById("r2c2").innerHTML = "•";
    }
    else if(rand == 2){
        document.getElementById("r2c1").innerHTML = "•";
        document.getElementById("r2c3").innerHTML = "•";
    }
    else if(rand == 3){
        document.getElementById("r1c1").innerHTML = "•";
        document.getElementById("r2c2").innerHTML = "•";
        document.getElementById("r3c3").innerHTML = "•";
    }
    else if(rand == 4){
        document.getElementById("r1c1").innerHTML = "•";
        document.getElementById("r1c3").innerHTML = "•";
        document.getElementById("r3c1").innerHTML = "•";
        document.getElementById("r3c3").innerHTML = "•";
    }
    else if(rand == 5){
        document.getElementById("r1c1").innerHTML = "•";
        document.getElementById("r1c3").innerHTML = "•";
        document.getElementById("r2c2").innerHTML = "•";
        document.getElementById("r3c1").innerHTML = "•";
        document.getElementById("r3c3").innerHTML = "•";     
    }
    else{
        document.getElementById("r1c1").innerHTML = "•";
        document.getElementById("r1c3").innerHTML = "•";
        document.getElementById("r2c1").innerHTML = "•";
        document.getElementById("r2c3").innerHTML = "•";
        document.getElementById("r3c1").innerHTML = "•";
        document.getElementById("r3c3").innerHTML = "•";
    }
}

//----------------end of dice rolls-------------------------
/*
let xyz = "39804";
console.log(xyz.slice(-2));
*/
//----------------damn it works!----------------------------

