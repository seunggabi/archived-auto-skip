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
	var autoSkipDisable = getCookie("AutoSkipDisable");
	if(autoSkipDisable === "1") {
		return;
	}

	var youtube = document.querySelector(".videoAdUiSkipButton");
	var twitch = document.querySelector(".player-video iframe");
	var jobplanet = document.querySelector("#video_ad iframe") &&
		document.querySelector("#video_ad iframe").contentWindow.document.querySelector(".skip");
	var naver = document.querySelector(".u_rmc_btn_skip");
	var kakao = document.querySelector("#player_iframe iframe") &&
		document.querySelector("#player_iframe iframe").contentWindow.document.querySelector("#adSkipBtn");
	var afreeca = document.querySelector("#promotion_btn_skip");
	var dailymotion = document.querySelector(".dmp_AdSkipButton-icon");
	var dailymotionYouTube = document.querySelector(".dmp_VideoView-ad-slot");

	youtube && youtube.click();
	twitch && (clearInterval(window.twitch) || (twitch.src = "") || twitch.remove());
	jobplanet && jobplanet.click();
	naver && (naver.style.display !== "none" && naver.click() || (naver.style.display = "none"));
	kakao && (kakao.className.indexOf("hide") === -1 && kakao.click() || (kakao.className += "hide"));
	afreeca && (afreeca.style.display !== "none" && afreeca.childElementCount === 1 && afreeca.click());
	dailymotion && dailymotion.click() || dailymotionYouTube && dailymotionYouTube.remove();
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
