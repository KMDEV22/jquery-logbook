function addListeners(){
    // debugger
$("button").on("click", (event)=>{
    alert(event.target.textContent)
})

}
addListeners()