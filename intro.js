//methods

var i = 8;
var addToList = function(e){
	var li = document.createElement('li');
	var node = document.createTextNode("item " + i);
	li.appendChild(node);
	var list = document.getElementById('thelist');
	list.appendChild(li);
	i++;
};

var changeHeading = function(e){
	var heading = document.createElement('h1');
	var node = document.createTextNode(this.innerHTML);
	heading.appendChild(node);
	var head = document.getElementById('h');
	
	head.replaceChild(heading,head.childNodes[0]);
};

var revertHeading = function(e){
	
};

var removeItem = function(e) {
	
};


// run function
var b = document.getElementById('b');
b.addEventListener('click',addToList);

var c = document.getElementsByTagName('li');
for (each of c) {
	each.addEventListener('mouseover',changeHeading);
	each.addEventListener('mouseleave',revertHeading);
	each.addEventListener('click',removeItem);
};