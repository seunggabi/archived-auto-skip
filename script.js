function init() {
	console.log("AutoSkip load!");

	var hostname = document.location.hostname;
	var youtube = hostname === "www.youtube.com";
	var twitch = hostname === "www.twitch.tv";
	var jobplanet = hostname === "www.jobplanet.co.kr";
	var naver = hostname === "tv.naver.com";

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutationRecord) {
			callback();
		});
	});

	youtube && (window.youtube = setInterval(callback, 300));
	twitch && (window.twitch = setInterval(callback, 300));
	jobplanet && (window.jobplanet = setInterval(callback, 300));
	naver && observer.observe(naver, { attributes : true, attributeFilter : ["style"] });
}

function callback() {
	var youtube = document.querySelector(".videoAdUiSkipButton");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var twitch = document.querySelector(".player-video iframe");
	var jobplanet = document.querySelector("#video_ad iframe") &&
		document.querySelector("#video_ad iframe").contentWindow.document.querySelector(".skip");

	youtube && (youtube.click() || console.log("YouTube"));
	naver && (naver.click() || console.log("Naver"));
	twitch && (clearInterval(window.twitch) || (twitch.src = "") || twitch.remove() || console.log("Twitch"));
	jobplanet && (jobplanet.click() || console.log("JobPlanet"));
}

(function(){
	window.addEventListener("load", init);
	window.addEventListener("popstate", init);
})();
