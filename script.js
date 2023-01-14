let myheros = ["thor", "spiderman", "monkeyman"]
let azheros =['batman','superman']


let heropower ={
    thor:"hnerr",
    spiderman:"bling",

    getSpiderPower: function(){
        console.log(`spidy power is : ${this.spiderman}`);
    }
}

// console.log(heropower);

Object.prototype.azhar = function(){
    console.log(`azhar is present in all objects`);
}

Array.prototype.heyazhar =function(){
    console.log(`azhar say hello to all`);
}

myheros.azhar()

// inheritance

const user ={
    name:"top name",
    email:"topuser@gmail.com"
}

const Teacher ={
    makVideos:true
}

const TeachingSupport ={
    IsAvailable: false
}

const TSAssistant ={
    makeAssignment : 'JS Assignmnet',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user


// Modern sytax

Object.setPrototypeOf(TeachingSupport, Teacher)

// Goal:Get True leng/th og String
let myname ="azhar   "

String.prototype.truelength= function(){
    console.log(`True length is : ${this.trim().length}`);
}

