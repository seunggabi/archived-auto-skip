// function matching(target){
// 	chrome.tabs.executeScript({
// 		code: 'document.querySelector("body").innerText'
// 	}, function (result) {
// 		document.querySelector('#target').value = target+"<br/>"+result;
// 	});
// }
//
//
// chrome.storage.sync.get(function (data) {
// 	document.querySelector('#target').value = data.target;
// 	matching(data.target);
// });
//
document.querySelector('#target').addEventListener('change', function () {
	callback();
});

function callback() {
	chrome.tabs.executeScript({
		code: 'console.log(document.querySelector("body").innerText)'
	}, function (result) {
	});
}