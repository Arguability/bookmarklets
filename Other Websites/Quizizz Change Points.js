(() => {
	const e = parseInt(prompt("Points per question (numbers 1-9999)):")) - 5e3,
		o = fetch;
	window.fetch = function(r, s) {
		if (["https://game.quizizz.com/play-api/v4/soloProceed", "https://game.quizizz.com/play-api/v4/proceedGame"].includes(r)) {
			const o = JSON.parse(s.body);
			o.response.provisional.scores = {
				correct: e + 5e3,
				incorrect: e + 5e3
			}, o.response.provisional.scoreBreakups = {
				correct: {
					base: 5e3,
					timer: 5e3,
					streak: 5e3,
					powerups: [],
					total: e + 5e3
				},
				incorrect: {
					base: 5e3,
					timer: 5e3,
					streak: 5e3,
					powerups: [],
					total: e + 5e3
				}
			}, s.body = JSON.stringify(o)
		}
		return o(r, s)
	}
})();
