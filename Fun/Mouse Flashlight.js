krazete: var style = document.createElement("style"),
	canvas = (document.body.appendChild(style), document.createElement("canvas")),
	context = (canvas.id = "canvas", document.body.appendChild(canvas), canvas.getContext("2d"));

function outlineBounds() {
	context.clearRect(0, 0, window.innerWidth, window.innerHeight), context.beginPath(), Array.from(document.querySelectorAll("*")).map(function(t) {
		return t.getBoundingClientRect()
	}).filter(function(t) {
		var n = window.scrollY < t.bottom || t.top < window.scrollY + window.innerHeight,
			t = window.scrollX < t.right || t.left < window.scrollX + window.innerWidth;
		return n && t
	}).forEach(function(t) {
		context.rect(t.left, t.top, t.right - t.left, t.bottom - t.top)
	}), context.stroke()
}

function fillBounds() {
	context.clearRect(0, 0, window.innerWidth, window.innerHeight), context.fillStyle = "#00000011%22,Array.from(document.querySelectorAll(%22*%22)).map(function(t){return%20t.getBoundingClientRect()}).filter(function(t){var%20n=window.scrollY%3Ct.bottom||t.top%3Cwindow.scrollY+window.innerHeight,t=window.scrollX%3Ct.right||t.left%3Cwindow.scrollX+window.innerWidth;return%20n&&t}).forEach(function(t){context.fillRect(t.left,t.top,t.right-t.left,t.bottom-t.top)})}function%20resizeCanvas(){style.innerHTML=%60#canvas%20{%20position:%20fixed;%20left:%200;%20top:%200;%20width:%20100%25;%20height:%20100%25;%20z-index:%209999;%20pointer-events:%20none;%20}%60,canvas.width=window.innerWidth,canvas.height=window.innerHeight,fillBounds()}resizeCanvas(),window.addEventListener(%22scroll%22,fillBounds),window.addEventListener(%22resize%22,resizeCanvas);var%20pixelSize=8,halfPixel=Math.floor(pixelSize/2);function%20drawPixel(t,n,e,i,o,r){context.fillStyle=%22rgba(%22+[e,i,o,r].join(%22,%20%22)+%22)%22,context.fillRect(t-halfPixel,n-halfPixel,pixelSize,pixelSize)}function%20distanceSquared(t,n){var%20e=n.x-t.x,n=n.y-t.y;return%20e*e+n*n}function%20main(t){fillBounds();var%20n=context.getImageData(0,0,context.canvas.width,context.canvas.height).data;context.clearRect(0,0,context.canvas.width,context.canvas.height);for(var%20e=0;e%3Ccontext.canvas.width;e+=pixelSize)for(var%20i=0;i%3Ccontext.canvas.height;i+=pixelSize){var%20o={x:e,y:i},r=1/distanceSquared(o,t),a=0,l=255,c=255,o=1/distanceSquared(o,{x:window.innerWidth-t.x,y:window.innerHeight-t.y}),d=255,w=0,s=0,h=r+o,a=Math.floor((a*r+d*o)/h),d=Math.floor((l*r+w*o)/h),l=Math.floor((c*r+s*o)/h);1e-6%3Ch&&(w=256*h*(256-n[4*(e+i*window.innerWidth)+3]),drawPixel(e,i,Math.floor(a*w),Math.floor(d*w),Math.floor(l*w),1-w))}}window.addEventListener(%22mousemove%22,main);
