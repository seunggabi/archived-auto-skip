function toggleSiteList() {
	if(document.querySelector("#siteList").className.indexOf("hidden") >= 0) {
		document.querySelector("#siteList").className = "";
	} else {
		document.querySelector("#siteList").className = "hidden";
	}
}

function bindEvent() {
	document.addEventListener("click", toggleSiteList);
}

document.onload = bindEvent();