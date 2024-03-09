/**
 * Gathers the data from the form controls.
 * @param {HTMLElement} formBody The html element containing the controls. Probably
 * a form tag element, but it really doesn't matter.
 */
export default function gatherFormData(formBody) {
	let result = {}
	let controls = formBody.querySelectorAll('input, textarea, select')
	for (let control of controls) {
		if (control.type === 'checkbox') {
			if (!control.checked) {
				continue
			}
		}
		else if (control.type === 'radio') {
			if (!control.checked) {
				continue
			}
		}
		result[control.getAttribute('name')] = control.value
	}
	return result
}

