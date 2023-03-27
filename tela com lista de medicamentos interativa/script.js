const medForm = document.querySelector('#medForm');
const medInput = document.querySelector('#medInput');
const addMedBtn = document.querySelector('#addMedBtn');
const medList = document.querySelector('#medList');

let meds = [];

function addMed() {
	if (medInput.value !== '') {
		meds.push(medInput.value);
		updateMedList();
		medInput.value = '';
	}
}

function updateMedList() {
	medList.innerHTML = '';
	for (let i = 0; i < meds.length; i++) {
		const li = document.createElement('li');
		const deleteBtn = document.createElement('button');
		li.innerText = meds[i];
		deleteBtn.innerText = 'Remover';
		deleteBtn.className = 'deleteBtn';
		deleteBtn.setAttribute('data-index', i);
		deleteBtn.addEventListener('click', deleteMed);
		li.appendChild(deleteBtn);
		medList.appendChild(li);
	}
}

function deleteMed(e) {
	const index = e.target.getAttribute('data-index');
	meds.splice(index, 1);
	updateMedList();
}

addMedBtn.addEventListener('click', addMed);

updateMedList();