 const inputBox = document.getElementById("input-box")
 const button = document.getElementById("button")
 const listContainer = document.getElementById("list-container");

 const unchecked = '<img src="/img/unchecked.png" alt="">'
 const checked = '<img src="/img/checked.png" alt="">';

 button.addEventListener("click", function(){
    if( inputBox.value === ''){
        alert("You must add a task");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = unchecked + inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ""
 })

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        console.log(e.target.tagName);
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
 }, false)