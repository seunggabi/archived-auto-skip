function callback() {
	var youtube = document.querySelector(".videoAdUiSkipButton");
	var naver = document.querySelector(".u_rmc_btn_skip");

	youtube && (youtube.click() || console.log("YouTube"));
	// naver && (naver.click() || console.log("Naver"));
}

(function(){
	var youtube = document.querySelector(".ad-container");
	var naver = document.querySelector(".u_rmc_btn_skip");

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutationRecord) {
			callback();
		});
	});

	youtube && youtube.addEventListener('DOMSubtreeModified', callback);
	naver && observer.observe(naver, { attributes : true, attributeFilter : ['style'] });
})();