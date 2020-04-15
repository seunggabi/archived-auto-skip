function init() {
  const hostname = document.location.hostname;

  const youtube = ~hostname.indexOf("youtube.com");
  const twitch = hostname === "www.twitch.tv";
  const naver = ~hostname.indexOf("naver.com");
  const vlive = ~hostname.indexOf("vlive.tv");
  const jobplanet = hostname === "www.jobplanet.co.kr";
  const kakao = ~hostname.indexOf("kakao.com");
  const afreeca = hostname === "play.afreecatv.com";
  const dailymotion = hostname === "www.dailymotion.com";
  const jtbc = ~hostname.indexOf(".jtbc.");
  const netflix = ~hostname.indexOf("netflix.com");
  const chA = ~hostname.indexOf("ichannela.com");

  youtube && (window.youtube = setInterval(callback, 300));
  twitch && (window.twitch = setInterval(callback, 300));
  naver && (window.naver = setInterval(callback, 300));
  vlive && (window.naver = setInterval(callback, 300));
  jobplanet && (window.jobplanet = setInterval(callback, 300));
  kakao && (document.domain = "kakao.com") && (window.kakao = setInterval(callback, 300));
  afreeca && (window.afreeca = setInterval(callback, 300));
  dailymotion && (window.dramalink = setInterval(callback, 300));
  jtbc && (window.jtbc = setInterval(callback, 300));
  netflix && (window.netflix = setInterval(callback, 300));
  chA && (window.chA = setInterval(callback, 300));
}

function callback() {
  const autoSkipDisable = getCookie("AutoSkipDisable");
  if (autoSkipDisable === "true") {
    return;
  }

  const youtube = document.querySelector(".videoAdUiSkipButton") || document.querySelector(".ytp-ad-skip-button");
  const youtube2 = document.querySelector(".ytp-ad-overlay-close-button");

  const twitch = document.querySelector(".player-video iframe");
  const naver = document.querySelector(".u_rmc_btn_skip") || document.querySelector(".skipBtn");
  const vlive = document.querySelector(".btn_skip");
  const jobplanet = document.querySelector("#extensionSkip") || document.querySelector("#video_ad iframe")
    && document.querySelector("#video_ad iframe").contentWindow.document.querySelector(".skip");
  const kakao = document.querySelector("#player_iframe iframe") &&
    document.querySelector("#player_iframe iframe").contentWindow.document.querySelector("#adSkipBtn");
  const afreeca = document.querySelector("#promotion_btn_skip");
  const dailymotion = document.querySelector(".np_ButtonAdSkip");
  const jtbc = document.querySelector(".vast-skip-button");
  const netflix = document.querySelector(".skip-credits > a") || document.querySelector("button[data-uia=next-episode-seamless-button]");
  const chA = document.querySelector("button.vjs-skip-module");

  youtube && youtube.click();
  youtube2 && youtube2.click();
  jtbc && jtbc.click();
  netflix && netflix.click();
  chA && chA.click();

  twitch && ((twitch.src = "") || twitch.remove());
  naver && (naver.style.display !== "none" && naver.click() || (naver.style.display = "none"));
  vlive && vlive.click();
  jobplanet && jobplanet.click();
  kakao && (~kakao.className.indexOf("hide") && kakao.click() || (kakao.className += "hide"));
  afreeca && (afreeca.style.display !== "none" && afreeca.childElementCount === 1 && afreeca.click());
  dailymotion && dailymotion.click();
}

/* reference: https://www.w3schools.com/js/js_cookies.asp */
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

(function() {
  init();
})();
