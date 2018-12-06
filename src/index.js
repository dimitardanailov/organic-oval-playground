import oval from 'organic-oval'
require('./word-count')
require('./my-paragraph')

oval.init()

class Component {
  constructor (tagName, root) {
    oval.BaseTag(this, tagName, root)
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
      </div>
    )
  }
}

oval.registerTag('App', Component)
oval.mountAll(document.body)