import { getQuote } from './src/index.js'
import renderElement  from './src/element.js'
import { hideLoading, displayLoading } from './src/loading.js'
import { fileExists } from './src/checkFileExists.js'

(async () => {
  try{
    displayLoading()

    const configPath = './config.js';
    if (!(await fileExists(configPath))) { throw new Error("config file is missing") }

    const module = await import(configPath);
    const config = module.default;

    const data = await getQuote(config)
    const elementId = "app"
    
    renderElement(data, elementId)
    hideLoading()

  } catch(err) {
    hideLoading()
    const data = { subject: "gemini", title: "oops, something goes wrong :(", quote: err, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANHa63Y8tpuLLwa9J7yjlm8nAvj01OPQGvQ&s" }
    renderElement(data, 'app')
  }
})();

