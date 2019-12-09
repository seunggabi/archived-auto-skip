function toggleSiteList() {
	if(document.querySelector("#siteList").className.indexOf("hidden") >= 0) {
		document.querySelector("#siteList").className = "";
	} else {
		document.querySelector("#siteList").className = "hidden";
	}
}

function toggleDisableCheckbox(e) {
	var cookie = {
		url: COOKIE_URL,
		path: "/",
		name: COOKIE_NAME,
		value: "",
		expirationDate: ""
	};

	if(e.target.checked) {
		cookie.value = "true";
		cookie.expirationDate = makeDateTime(365);
	} else {
		cookie.value = "false";
		cookie.expirationDate = makeDateTime(-1);
	}
	chrome.cookies.set(cookie);

}

function bindEvent() {
	var siteListButton = document.querySelector("#siteListButton");
	var disableCheckbox = document.querySelector("#disableCheckbox");
	siteListButton && siteListButton.addEventListener("click", toggleSiteList);
	disableCheckbox && disableCheckbox.addEventListener("click", toggleDisableCheckbox);
}

function renderView() {
	var disableCheckbox = document.querySelector("#disableCheckbox");
	chrome.cookies.get({url: COOKIE_URL, name: COOKIE_NAME}, function(c){
		var isDisable = c && c.value;

		if(isDisable === "true") {
			disableCheckbox.checked = true;
		} else {
			disableCheckbox.checked = false;
		}
	});

}

function init() {
	renderView();
	bindEvent();
}

function makeDateTime(exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	return d.getTime();
}

window.addEventListener("load", init);