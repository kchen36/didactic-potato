//================== methods ==================

//
var i = 8;
var addToList = function(e){
	var li = document.createElement('li');
	var node = document.createTextNode("item " + i);
	li.appendChild(node);
	var list = document.getElementById('thelist');
	list.appendChild(li);
	i++;
	liEvents(li);
};

// changes heading to the item in the list the mouse is hovering over
var changeHeading = function(e){
	var head = document.getElementById('h');
	head.innerHTML = this.innerHTML;
};

//changes heading back to "Hello World!" when mouse isn't hovering over anything
var revertHeading = function(e){
	var head = document.getElementById('h');
	head.innerHTML = "Hello World!";
};


//removes item from list when mouse clicks on it
var removeItem = function(e) {
	var list = document.getElementById('thelist');
	list.removeChild(this);
};

var liEvents = function(e) {
	e.addEventListener('mouseover',changeHeading);
	e.addEventListener('mouseleave',revertHeading);
	e.addEventListener('click',removeItem);
}


//================== run function ==================
var b = document.getElementById('b');
b.addEventListener('click',addToList);

var c = document.getElementsByTagName('li');
for (each of c) {
	liEvents(each);
};
