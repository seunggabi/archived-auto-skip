function matching(target){
	chrome.tabs.executeScript({
		code: 'document.querySelector("body").innerText'
	}, function (result) {
		console.log(target, result);
	});
}


chrome.storage.sync.get(function (data) {
	document.querySelector('#target').value = data.target;
	matching(data.target);
});

document.querySelector('#target').addEventListener('change', function () {
	var target = document.querySelector('#target').value;

	chrome.storage.sync.set({
		target: target
	});

	matching(target);
});