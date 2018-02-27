var add = document.getElementById("add-button");
var input = document.getElementById("input-field");
var wrapper = document.getElementById("item-wrapper");

function addHandler() {
	var item = document.createElement("li");
	item.innerHTML = input.value;
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
	e.target.classList.toggle("done");
}

add.onclick = addHandler;