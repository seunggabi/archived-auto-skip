function init() {
	var hostname = document.location.hostname;

	var youtube = hostname === "www.youtube.com";
	var twitch = hostname === "www.twitch.tv";
	var naver = ~hostname.indexOf("naver.com");
	var jobplanet = hostname === "www.jobplanet.co.kr";
	var kakao = ~hostname.indexOf("kakao.com");
	var afreeca = hostname === "play.afreecatv.com";
	var dailymotion = hostname === "www.dailymotion.com";

	youtube && (window.youtube = setInterval(callback, 300));
	twitch && (window.twitch = setInterval(callback, 300));
	naver && (window.naver = setInterval(callback, 300));
	jobplanet && (window.jobplanet = setInterval(callback, 300));
	kakao && (document.domain = "kakao.com") && (window.kakao = setInterval(callback, 300));
	afreeca && (window.afreeca = setInterval(callback, 300));
	dailymotion && (window.dramalink = setInterval(callback, 300))
}

function callback() {
	var autoSkipDisable = getCookie("AutoSkipDisable");
	if(autoSkipDisable === "true") {
		return;
	}

	var youtube = document.querySelector(".videoAdUiSkipButton") || document.querySelector(".ytp-ad-skip-button");
	var twitch = document.querySelector(".player-video iframe");
	var naver = document.querySelector(".u_rmc_btn_skip") || document.querySelector(".skipBtn");
	var jobplanet = document.querySelector("#extensionSkip") || document.querySelector("#video_ad iframe")
		&& document.querySelector("#video_ad iframe").contentWindow.document.querySelector(".skip");
	var kakao = document.querySelector("#player_iframe iframe") &&
		document.querySelector("#player_iframe iframe").contentWindow.document.querySelector("#adSkipBtn");
	var afreeca = document.querySelector("#promotion_btn_skip");
	var dailymotion = document.querySelector(".np_ButtonAdSkip");

	youtube && youtube.click();
	twitch && ((twitch.src = "") || twitch.remove());
	naver && (naver.style.display !== "none" && naver.click() || (naver.style.display = "none"));
	jobplanet && jobplanet.click();
	kakao && (~kakao.className.indexOf("hide") && kakao.click() || (kakao.className += "hide"));
	afreeca && (afreeca.style.display !== "none" && afreeca.childElementCount === 1 && afreeca.click());
	dailymotion && dailymotion.click();
}

/* 쿠키함수출처: https://www.w3schools.com/js/js_cookies.asp */
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

(function(){
	init();
})();
