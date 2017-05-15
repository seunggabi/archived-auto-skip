function init() {
	console.log("AutoSkip load!");

	var youtube = document.querySelector(".ad-container");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var twitch = document.querySelector(".twitch-logo");
	var jobplanet = document.querySelector("#video_ad");

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutationRecord) {
			callback();
		});
	});

	youtube && (window.youtube = setInterval(callback, 1000));
	naver && observer.observe(naver, { attributes : true, attributeFilter : ["style"] });
	twitch && (window.twitch = setInterval(callback, 1000));
	jobplanet && (window.jobplanet = setInterval(callback, 1000));
}

function callback() {
	var youtube = document.querySelector(".videoAdUiSkipButton");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var twitch = document.querySelector(".player-video iframe");
	var jobplanet = document.querySelector("#video_ad iframe") &&
		document.querySelector("#video_ad iframe").contentWindow.document.querySelector(".skip");

	youtube && (youtube.click() || console.log("YouTube"));
	//naver && (naver.click() || console.log("Naver"));
	twitch && (clearInterval(window.twitch) || (twitch.src = "") || twitch.remove() || console.log("Twitch"));
	jobplanet && (jobplanet.click() || console.log("JobPlanet"));
}

(function(){
	window.onload = init;
	window.addEventListener("popstate", init);
})();
