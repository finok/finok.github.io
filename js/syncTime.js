window.onload = () => {
	syncTimeHook();
}

function syncTimeHook() {
	const DOMList = document.querySelectorAll(".time-inner-text")
				
	if (!DOMList) return;
	syncTime([...DOMList]);
	
	setInterval(() => syncTime([...DOMList]), 60000);
}

function syncTime(DOMList) {
	const date = new Date();
	const timeText = `${date.getHours()}:${date.getMinutes()}`;
	DOMList.forEach(DOM => {
		DOM.innerText = timeText;
	});
}
