console.log("hi")
console.log("hello world")

var a=10
var b=20
console.log("a+b")
console.log(a+b)
console.log(a/b)
console.log(a%b)

//console.log("a+b= "+ number(a+b))

function submit(){
    let text=prompt("enter age","xxx");
    if(text!=null){
        console.log("hello"+age)
    }
}

//var inp=document.getElementById("demo").innerText
//console.log(inp)
var w=document.getElementById("demo").innerHTML="hello"
console.log(w)

//pi*r*r

const pi=3.14
function area(r){
    console.log("area of circle= "+ pi*r*r)
}
function add(){
    let val=document.getElementById("num").innerHTML //val=0
    let num=Number(val)+1 //num = val+1
    document.getElementById("num").innerHTML=num
}

function sub(){
    let val=document.getElementById("num").innerHTML
    let num=Number(val)-1
    document.getElementById("num").innerHTML=num
}
...a.toFixed.apply.callvl
cidj