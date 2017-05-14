function callback() {
	var youtube = document.querySelector(".videoAdUiSkipButton");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var twitch = document.querySelector(".player-video iframe");

	youtube && (youtube.click() || console.log("YouTube"));
	//naver && (naver.click() || console.log("Naver"));
	twitch && (twitch.src = "" || twitch.remove() || console.log("Twitch"));

	console.log("AutoSkip complete");
}

function init() {
	console.log("AutoSkip load!");

	var youtube = document.querySelector(".ad-container");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var twitch = document.querySelector(".twitch-logo");

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutationRecord) {
			callback();
		});
	});

	youtube && youtube.addEventListener("DOMSubtreeModified", callback);
	naver && observer.observe(naver, { attributes : true, attributeFilter : ["style"] });
	twitch && setTimeout(callback, 5000);
}

(function(){
	window.addEventListener("load", init);
	window.addEventListener("popstate", init);
})();
