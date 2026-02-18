export function initResumeUpload() {
	const uploadWrapper = document.querySelector('.resume-upload')
	if (!uploadWrapper) return // Якщо блоку немає, виходимо

	const input = uploadWrapper.querySelector('.resume-input')
	const dropArea = uploadWrapper.querySelector('.resume-upload__area')
	const textEl = dropArea?.querySelector('.resume-upload__text')
	const actions = dropArea?.querySelector('.resume-upload__actions')
	const btnChange = dropArea?.querySelector('.resume-upload__change')

	if (!input || !dropArea || !textEl || !actions || !btnChange) return // перевірка всіх елементів

	const defaultText = textEl.innerHTML

	function showFileName(name) {
		textEl.innerHTML = `<strong>${name}</strong>`
		actions.style.display = 'block'
	}

	// drag & drop
	dropArea.addEventListener('dragover', e => {
		e.preventDefault()
		dropArea.classList.add('dragover')
	})

	dropArea.addEventListener('dragleave', () => {
		dropArea.classList.remove('dragover')
	})

	dropArea.addEventListener('drop', e => {
		e.preventDefault()
		dropArea.classList.remove('dragover')
		if (e.dataTransfer.files.length) {
			input.files = e.dataTransfer.files
			showFileName(e.dataTransfer.files[0].name)
		}
	})

	// вибір через діалог
	input.addEventListener('change', () => {
		if (input.files.length) {
			showFileName(input.files[0].name)
		}
	})

	// кнопка змінити
	btnChange.addEventListener('click', () => input.click())
}
