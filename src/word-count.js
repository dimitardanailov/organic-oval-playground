class WordCount extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// count words in element's parent elements
		const wcParent = this.parentNode;
		
		function countWords(node) {
			const text = node.innerText || node.textContent;
			return text.split(/\s+/g).length;
		}

		const count = `Words: ${countWords(wcParent)}`;

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });

		// Create text node and add word count to it
		const text = document.createElement('span');
		text.textContent = count;

		// Append it to the shadow root
		shadow.appendChild(text);

		// Update count when element content changes
		setInterval(function () {
			const count = `Words: ${countWords(wcParent)}`;
			text.textContent = count;
		}, 200);
	}
}

customElements.define('word-count', WordCount);

