if (window.location.hostname == "edpuzzle.com") {
	var script = document.body.appendChild(document.createElement("script"));
	script.src = "https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js";
	script.remove();
} else {
	alert("Please run this on https://edpuzzle.com/assignments/[assignment_id]/watch")
}
