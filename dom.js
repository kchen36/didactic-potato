var i = 8;
var addToList = function(e){
    var li = document.createElement('li');
    var node = document.createTextNode("item " + i);
    li.appendChild(node);
    var list = document.getElementById('thelist');
    list.appendChild(li);
    i++;
};
var b = document.getElementById('b');
b.addEventLIstener('click',addToList);
