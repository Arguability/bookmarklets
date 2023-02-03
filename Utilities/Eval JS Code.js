javascript: void(() => {    try {        alert(eval(prompt('JavaScript code to evaluate:') ?? (function(){throw null;}())))    } catch (e) {        e && alert(e);    }})()
