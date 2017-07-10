var xhr = new XMLHttpRequest(),
	stylesheet = 'stable.css',
	stableVersion = 59;

if (/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] > stableVersion) {
	stylesheet = 'canary.css';
}

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
for (let i = 0; i < 10; i++) console.log(i)
test.forEach(value => console.log(value))