export function isWebp() {
	function testWebP(callback: any) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(
		function (support: any) {
			if (support == true) {
				document.querySelector('html')!.classList.add('webp');
			} else {
				document.querySelector('html')!.classList.add('no-webp');
			}
		}
	);
}