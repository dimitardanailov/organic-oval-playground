import oval from 'organic-oval'

oval.init()

class OvalButton {
	constructor (rootEl, props, attrs) {
		oval.BaseTag(this, rootEl, props, attrs)
		
		rootEl.addEventListener('click', () => {
			this.props.isToggleOn = !this.props.isToggleOn;
			this.update()
		})
	}

	render (createElement) { 
		return (
			<button>
				{ this.props.isToggleOn ? 'ON' : 'OFF' }
			</button>
		)
	}
}

oval.registerTag('oval-button', OvalButton)