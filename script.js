function init() {
	console.log("AutoSkip load!");
	var hostname = document.location.hostname;

	var youtube = hostname === "www.youtube.com";
	var twitch = hostname === "www.twitch.tv";
	var jobplanet = hostname === "www.jobplanet.co.kr";
	var naver = hostname.indexOf("naver.com") != -1;
	var kakao = hostname.indexOf("kakao.com") != -1;
	var afreeca = hostname === "play.afreecatv.com";
	var dramalink = hostname === "dramalink.net";

	youtube && (window.youtube = setInterval(callback, 300));
	twitch && (window.twitch = setInterval(callback, 300));
	jobplanet && (window.jobplanet = setInterval(callback, 300));
	naver && (window.naver = setInterval(callback, 300));
	kakao && (document.domain = "kakao.com") && (window.kakao = setInterval(callback, 300));
	afreeca && (window.afreeca = setInterval(callback, 300));
	dramalink && (window.dramalink = setInterval(callback, 300))
}

function callback() {
	var youtube = document.querySelector(".videoAdUiSkipButton");
	var twitch = document.querySelector(".player-video iframe");
	var jobplanet = document.querySelector("#video_ad iframe") &&
		document.querySelector("#video_ad iframe").contentWindow.document.querySelector(".skip");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var kakao = document.querySelector("#player_iframe iframe") &&
		document.querySelector("#player_iframe iframe").contentWindow.document.querySelector("#adSkipBtn");
	var afreeca = document.querySelector("#promotion_btn_skip");
	var dramalink = document.querySelector(".dmp_AdSkipButton-icon");

	youtube && (youtube.click() || console.log("YouTube"));
	twitch && (clearInterval(window.twitch) || (twitch.src = "") || twitch.remove() || console.log("Twitch"));
	jobplanet && (jobplanet.click() || console.log("JobPlanet"));
	naver && naver.style.display !== "none" && (naver.click() || (naver.style.display = "none") && console.log("Naver"));
	kakao && kakao.className.indexOf("hide") === -1 && (kakao.click() || (kakao.className += "hide") && console.log("Kakao"));
	afreeca && afreeca.style.display !== "none" && afreeca.childElementCount === 1 && (afreeca.click() || console.log("Afreeca"));
	dramalink && (dramalink.click() || console.log("DramaLink"));
}

(function(){
	init();
})();
