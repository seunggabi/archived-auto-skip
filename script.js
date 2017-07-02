function init() {
	var hostname = document.location.hostname;

	var youtube = hostname === "www.youtube.com";
	var twitch = hostname === "www.twitch.tv";
	var jobplanet = hostname === "www.jobplanet.co.kr";
	var naver = hostname.indexOf("naver.com") != -1;
	var kakao = hostname.indexOf("kakao.com") != -1;
	var afreeca = hostname === "play.afreecatv.com";
	var dramalink = hostname === "dramalink.net";
	var dailymotion = hostname === "www.dailymotion.com";

	youtube && (window.youtube = setInterval(callback, 300));
	twitch && (window.twitch = setInterval(callback, 300));
	jobplanet && (window.jobplanet = setInterval(callback, 300));
	naver && (window.naver = setInterval(callback, 300));
	kakao && (document.domain = "kakao.com") && (window.kakao = setInterval(callback, 300));
	afreeca && (window.afreeca = setInterval(callback, 300));
	dramalink && (location.href = document.querySelector("iframe").src);
	dailymotion && (window.dramalink = setInterval(callback, 300))
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
	var dailymotion = document.querySelector(".dmp_AdSkipButton-icon");

	youtube && youtube.click();
	twitch && (clearInterval(window.twitch) || (twitch.src = "") || twitch.remove());
	jobplanet && jobplanet.click();
	naver && (naver.style.display !== "none" && naver.click() || (naver.style.display = "none"));
	kakao && (kakao.className.indexOf("hide") === -1 && kakao.click() || (kakao.className += "hide"));
	afreeca && (afreeca.style.display !== "none" && afreeca.childElementCount === 1 && afreeca.click());
	dailymotion && dailymotion.click();
}

(function(){
	init();
})();
