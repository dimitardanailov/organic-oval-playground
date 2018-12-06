import oval from 'organic-oval'
require('./word-count')
require('./my-paragraph')
require('./fancy-button')
require('./oval-button')

// d3js
require('./d3/bar-chart-wrapper')

oval.init()

class Component {
  constructor (rootEl, props, attrs) {
    oval.BaseTag(this, rootEl, props, attrs)
  }

  render (createElement) {
    return (
      <div>
        <h1 style="color: green; text-align: center">
          Hello Organic World!!!
        </h1>

        <article>
          <p>
            Oval can be used in many ways. There are different setups for each way.
          </p>

          <word-count></word-count>
        </article>

        <my-paragraph />     

        <section>
          <fancy-button>I'm a fancy button</fancy-button>
        </section>

        <oval-button prop-isToggleOn={false} />

        <d3-bar-chart-wrapper />
      </div>
    )
  }
}

oval.registerTag('App', Component)
oval.mountAll(document.body)