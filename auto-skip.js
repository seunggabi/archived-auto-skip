// TODO: flexible by data object

function init() {
    const TIMEOUT = 300;

    const hostname = document.location.hostname;
    const urls = [
        ".youtube.",
        ".twitch.",
        ".naver.",
        ".vlive.",
        ".jobplanet.",
        ".kakao.",
        ".afreecatv.",
        ".dailymotion.",
        ".jtbc.",
        ".netflix."
    ];

    if (urls.some(url => hostname.includes(url))) {
        if (hostname.includes(".kakao.")) {
            if (!hostname.includes("kauth.kakao.com")) {
                document.domain = "kakao.com";
            }
        }

        setInterval(callback, TIMEOUT);
    }
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
    const netflix = document.querySelector(".watch-video--skip-content");
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

(function () {
    init();
})();
