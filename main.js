import { getQuote } from './src/index.js'
import renderElement  from './src/element.js'
import { hideLoading, displayLoading } from './src/loading.js'

// Async IIFE
(async () => {
  try{
    displayLoading()

    const data = await getQuote()
    const elementId = "app"
    
    renderElement(data, elementId)
    hideLoading()

  } catch(err) {
    console.log(err)
  }
})();

