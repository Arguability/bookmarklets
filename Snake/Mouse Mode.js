req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeMouseMode/main/mouse.js');
req.onload = function() {
	(1, eval)(this.responseText);
};
req.send();
