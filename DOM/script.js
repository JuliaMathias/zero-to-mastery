var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = ul.getElementsByTagName("li");
var deleteItem = document.getElementsByClassName("delete");

for(var i = 0; i < deleteItem.length; i++){
	deleteItem[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

//adding new items:

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

