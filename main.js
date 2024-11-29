

//properties
/*---
console.log(document.head)
console.log(document.body)
console.log(document.title)
console.log(document.images)
console.log(document.links)
console.log(document.forms)
console.log(document.scripts)
-----*/

//methods
/*---1.document.getElementById("idname")

let x=document.getElementById("a")
console.log(x)

let y=document.getElementById("b")
console.log(y)
-----*/

/*---2.document.getElementByClassName("classname")
let x=document.getElementsByClassName("a")
console.log(x)
-----*/

/*---3.document.getElementsByTagName("tagname")
let x=document.getElementsByTagName("h1")
console.log(x)

let y=document.getElementsByTagName("p")
console.log(y)
-----*/

/*----4.document.querySelector("#id,.class,tagname")
let x=document.querySelector("#a")
console.log(x)

let y=document.querySelector(".a")
console.log(y)

let z=document.querySelector("a")
console.log(z)
----*/

/*----5.document.querySelectorAll(".class,#id,tagname")
let x=document.querySelectorAll("#a")
console.log(x)

let y=document.querySelectorAll(".a")
console.log(y)

let z=document.querySelectorAll("a")
console.log(z)
-----*/


/*----dom manipulatioms---*/
/*----createElement---

let n=document.createElement("p")
n.innerText="this is paragraph3"
console.log(n)
----*/

/*---appendChild
let n=document.createElement("p")
n.innerText="this is paragraph3"
console.log(n)

let p=document.getElementById("a")
p.appendChild(n)
----*/

/*----insertBefore
let n=document.createElement("p")
n.innerText="this is paragraph3"
console.log(n)

let p=document.getElementById("a")
p.appendChild(n)

let parent=document.getElementById("a")
let child=document.getElementById("b")
parent.insertBefore(n,child)
----*/

/*---remove()
let n=document.getElementById("b")
n.remove()
console.log(n)
----*/

/*---document.getElementByIdname(idname).innerhtml
let x=document.getElementById("a").innerHTML="Good morning"
console.log(x)

let y=document.getElementById("b").innerHTML="helloWorld!"
console.log(y)
----*/


document.getElementById("a").innerHTML="hello"
document.getElementById("a").style.color="red"    
document.getElementById("a").style.width="200px"
document.getElementById("a").style.border="1px solid blue"

document.getElementById("b").src="a1.png"