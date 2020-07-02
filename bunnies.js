class Bunnies{
    constructor() {
        console.log("zaraz this u nas takuy: ", this)
        this.sex = this.getGender()
        this.color = this.getColor()
        this.age = 0
        this.name = this.getName()
    }

    getColor() {
        let colorArr = [`black`,`white`, `brown`,`red`];
        let color_rand = Math.floor(Math.random()*colorArr.length);
        return colorArr[color_rand]
    }


    getGender(){
        const sexArr = ['female', 'male'];
        let sex_rand = Math.floor(Math.random()*sexArr.length);
        return sexArr[sex_rand]
    }

    getName(){
        const femaleName = ['anna', 'ella', 'yul','kat', 'tan'];
        const maleName = ['mark', 'max', 'rom','bon', 'mad'];
        console.log(this)
        console.log(this.name)
        if (this.sex=== 'male'){
            let name_rand = Math.floor(Math.random()*maleName.length);
            return maleName[name_rand]
        } else {
            let name_rand = Math.floor(Math.random()*femaleName.length);
            return femaleName[name_rand]
        }
    }

    incrementValue(){

    }
   /* myFunction(){
        let text="";
        for(let i = 0; i<5; i++){
            text += "the number is " + i + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    }*/

}


let Bunnies1 = new Bunnies();
console.log(Bunnies1);
let Bunnies2 = new Bunnies();
let Bunnies3 = new Bunnies();
let Bunnies4 = new Bunnies();
let Bunnies5 = new Bunnies();

console.log(new Bunnies())

/*
   let arr=[];
    arr.push(Bunnies1,Bunnies2,Bunnies3,Bunnies4,Bunnies5);
    arr.forEach(el=>{
        document.writeln('Bunnies: ' + el.sex  + ' ' + el.name + ' ' + el.color + ' ' + 'age:' + el.year + '<br/>')
    })

*/
//Bunnies1.age++
console.log(++Bunnies1.age);
let i=0 ; let j=0;
console.log("i++: ", i++, i,  "++j: ", ++j, j)
function printBunnies(){
    let arr=[];
    arr.push(Bunnies1,Bunnies2,Bunnies3,Bunnies4,Bunnies5);
   /* for(let key in arr){
        bun.innerHTML += arr[key]
    }*/
    arr.forEach(el=>{
        document.write('Bunnies: ' + el.sex  + ' ' + el.name + ' ' + el.color + ' ' + 'age:' + el.year + '<br/>')
    })


}

Bunnies1.getName()
Bunnies2.getName()
Bunnies3.getName()
/*increment value
function incrementValue(){
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value
}*/










function bunniesColor(){
    document.getElementById('bunnies').style.backgroundColor="red"
}

/*
function myFunction(){
    let text="";
    for(let i = 0; i<5; i++){
        text += "the number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}*/


function addOne(){
    /*let foo = document.getElementById('thisone').innerHTML;
    foo++;
    document.getElementById('thisone').innerHTML = foo;*/
    let age = Bunnies.age
    console.log("dsdsadadsa");

}