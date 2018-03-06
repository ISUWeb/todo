var add = document.getElementById("add-button");
var input = document.getElementById("input-field");
var wrapper = document.getElementById("item-wrapper");

function addHandler() {
	var item = document.createElement("li");
	item.setAttribute("id", "todo-item");
	item.innerHTML = input.value + '<i id="delete" class="fa fa-trash" aria-hidden="true"></i>';
	input.value = "";
	wrapper.appendChild(item);
	console.log(item);
}

input.onkeyup = function(e) {
	if(e.keyCode === 13) {
		addHandler();
		console.log("Enter was entered");
	}
}

wrapper.onclick = function(e) {
	if(e.target.getAttribute("id") === "todo-item") {
		e.target.classList.toggle("done");
	} else {
		wrapper.removeChild(e.target.parentElement);
	}
}

add.onclick = addHandler;