class MyParagraph extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		// Create a shadow root
		const shadow = this.attachShadow({mode: 'open'});

		// Create text node and add word count to it
		const text = document.createElement('span');
		text.textContent = 'My paragraph';

		this.style.color = 'red';

		// Append it to the shadow root
		shadow.appendChild(text);
	}
}

customElements.define('my-paragraph', MyParagraph);