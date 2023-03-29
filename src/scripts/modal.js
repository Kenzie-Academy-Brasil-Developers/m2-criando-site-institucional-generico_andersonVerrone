function init() {
	const btnModal = document.querySelectorAll('.btn__modal');
	const desabledItems = document.querySelectorAll('body > :not(.modal)');
	const modal = document.querySelector('.modal');
	const closeModal = document.querySelector('.close');
	btnModal.forEach(function(item) {
		item.addEventListener('click', () => {
			activeModal(desabledItems, modal);
			centerModal(modal);
		})
	})
	closeModal.addEventListener('click', () => {
		disableModal(desabledItems, modal);
	})
}

function disableModal(activeItems, modal) {
	activedItems(activeItems);
	modal.classList.add('hidden')
}

function activedItems(items) {
	items.forEach(function(item) {
		item.classList.remove('disabled')
	})
}

function activeModal(itemsToBeDeactivated, modal) {
	deactivate(itemsToBeDeactivated);
	modal.classList.remove('hidden')
}

function deactivate(items) {
	items.forEach(function(item) {
		item.classList.add('disabled')
	})
}

function centerModal(element) {
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const screenHeigthPosition = window.pageYOffset;
	const centerX = screenWidth / 2;
	const centerY = screenHeight / 2;
	const modalX = centerX;
	const modalY = screenHeigthPosition + centerY;
	element.style.top = modalY + 'px';
	element.style.left = modalX + 'px';
}
init();