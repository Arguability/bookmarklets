(function() % 7 B % 2 F % 2 F % 3 D % 3 DUserScript % 3 D % 3 D % 0 A % 2 F % 2 F % 40n ame Wordle - Word Reveal Hack % 0 A % 2 F % 2 F % 40n amespace q1k % 0 A % 2 F % 2 F % 40 version 1.6 .1 % 0 A % 2 F % 2 F % 40 description This script adds an element to the bottom of the page with the daily word.Simply hover % 26 click and the daily word is revealed.Always "guess"
	the word in the first
	try and impress your friends. % 0 A % 2 F % 2 F % 40 author q1k % 0 A % 2 F % 2 F % 40 match * % 3 A % 2 F % 2 Fwww.nytimes.com % 2 Fgames % 2 Fwordle % 2 F * % 0 A % 2 F % 2 F % 40 run - at document - idle % 0 A % 2 F % 2 F % 3 D % 3 D % 2 FUserScript % 3 D % 3 D % 0 A % 0 Avar mydiv % 3 D document.createElement("div") % 3 B % 0 Amydiv.setAttribute("id" % 2 C "word-reveal") % 3 B % 0 Avar styles % 3 D document.createElement("style") % 3 B % 0 Astyles.innerHTML % 3 D "*%7Bbox-sizing%3Aborder-box%3B%7D %23game%7Bmax-width%3A100%25%3B%7D %23game>*%7Bmin-width%3Avar(--game-max-width)%3Bmargin%3A0 auto%3B%7D %23word-reveal%7Bwidth%3A100vw%3Bmargin-left%3A-100%25%3Bmargin%3A0%3B background%3A%23555%3Bcolor%3A%23555%3Btext-align%3Acenter%3Bline-height%3A1.5em%3Buser-select%3Anone%3B%7D %23word-reveal%3Ahover%7Bcolor%3Awhite%3B%7D .game-id%7Bdisplay%3Anone%3B%7D" % 3 B % 0 A % 0 Avar game % 3 D document.querySelector("game-app").shadowRoot.querySelector("%23game") % 3 B % 0 Agame.appendChild(styles) % 3 B % 0 Agame.appendChild(mydiv) % 3 B % 0 A % 0 Amydiv.addEventListener('click' % 2 Cfunction(e) % 7 B % 0 A mydiv.textContent % 3 D "Today's word%3A " % 2 B JSON.parse(localStorage % 5 B 'nyt-wordle-state' % 5 D).solution.toUpperCase() % 3 B % 0 A % 7 D) % 3 B % 0 Amydiv.innerHTML % 3 D "Click to reveal today's word" % 3 B % 7 D)() % 3 B
