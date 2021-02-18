// ==UserScript==
// @name        Auto claim channel points chest - Twitch.tv
// @namespace   https://github.com/Nearata
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.0
// @author      Nearata
// @description Auto claim the channel points chest when available.
// ==/UserScript==
(function () {
	const observer = new MutationObserver(function () {
		const chest = document.querySelector('.claimable-bonus__icon');

		if (chest) {
			chest.click();
		}
	});

	observer.observe(document.body, { childList: true, subtree: true });
})();
