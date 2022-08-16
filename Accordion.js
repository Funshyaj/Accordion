let bodyColor = document.querySelector("body")
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')


btn1.addEventListener("click", ()=> {
bodyColor.style.background = "yellow"
})    

btn2.addEventListener("click", ()=> {
bodyColor.style.background = "white"
})    


const accordion = document.getElementsByClassName("content-container")

console.log(accordion)

for (i= 0; i < accordion.length;i++){
	accordion[i].addEventListener("click", function(){
		this.classList.toggle('active');
	})
}