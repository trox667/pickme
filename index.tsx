import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

// from mdn: https://developer.mozilla.org/en-US/docs/Web/XPath/Snippets#getXPathForElement
function getXPathForElement(el, xml) {
  var xpath = ''
  var pos, tempitem2

  while (el !== xml.documentElement) {
    pos = 0
    tempitem2 = el
    while (tempitem2) {
      if (tempitem2.nodeType === 1 && tempitem2.nodeName === el.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1
      }
      tempitem2 = tempitem2.previousSibling
    }

    xpath =
      "*[name()='" +
      el.nodeName +
      "' and namespace-uri()='" +
      (el.namespaceURI === null ? '' : el.namespaceURI) +
      "'][" +
      pos +
      ']' +
      '/' +
      xpath

    el = el.parentNode
  }
  xpath =
    '/*' +
    "[name()='" +
    xml.documentElement.nodeName +
    "' and namespace-uri()='" +
    (el.namespaceURI === null ? '' : el.namespaceURI) +
    "']" +
    '/' +
    xpath
  xpath = xpath.replace(/\/$/, '')
  return xpath
}

document.body.addEventListener('click', e => {
  console.log(e)
  const xpath = getXPathForElement(e.target, document)
  console.log(xpath)
  const res = document.evaluate(xpath, document)
  console.log(res)
  const firstNode = res.iterateNext() as HTMLElement
  console.log(firstNode)
  firstNode.setAttribute('style', 'color: red')
})

ReactDOM.render(<App />, document.getElementById('root'))
