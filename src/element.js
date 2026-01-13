import { checkImageHeader } from './imageUrlCheck.js'

/**
 * adding image url on existing DOM Element
 * @param {string} url - the image url that gonna be add to html element
 * @param {string} [elemendId='img'] - html element id that gonna be put image
 * @returns {HTMLElement}
 */
export const addImage = async ( url, elementId = "img") => {
  const image = await checkImageHeader(url)

  const img = document.getElementById(elementId);
  img.src = image

  return img
}

/**
 * Creates a DOM element with optional tag with default tag 'h1' and subject for this app
 * @param {string} [elemendTag='h1'] - html tag for this element
 * @param {string} subject - the subject name for this quote
 * @returns {HTMLElement}
 */
export const addName = ( subject, elementTag = 'h1' ) => {
  const name = document.createElement(elementTag);
  name.textContent = subject;

  return name
}

/**
 * create a Dom element with optional tag and default value 'h3' and quote title for this app
 * @param {string} title - the title for the quote
 * @param {string} [elemendTag='h3'] - html tag for this element
 * @returns {HTMLElement}
 */
export const addTittle = ( title, elementTag = "h3" ) => {
  const heading = document.createElement(elementTag);
  heading.textContent = title;

  return heading
}

/**
 * create a Dom element with optional tag with default value 'p' and quote text for this app
 * @param {string} quote - is the quote text for this element
 * @param {string} [elementTag='p'] - html tag for this element
 * @returs {htmlElement}
 */
export const addText = ( quote, elementTag = "p") => {
  const text = document.createElement(elementTag);
  text.className = 'bio';
  text.textContent = quote;

  return text
}

/**
 * create DOM element that contains subject, title and text for quote
 * @param {string} [subject='no subject'] - add subject for quote
 * @param {string} [title='no title'] - add title for quote
 * @param {string} [quote='no quote found'] add quote text
 * 
 * @see {@linkcode addSubject} for creating DOM element for subject.
 * @see {@linkcode addTitle} for creating DOM element for quote title.
 * @see {@linkcode addText} for creating DOM element for quote text.
 * @see {@linkcode addImage} for creating DOM element to add image url .
 * @returns void
 */
export const renderElement = async ({
  subject = "no subject",
  title = "no title",
  quote = "no quote found",
  image_url,
  } = {}, 
  elementId = 'app' ) => {

  const container = document.getElementById(elementId);
  if(!container) return;
  
  const name = addName(subject);
  const heading = addTittle(title);
  const text = addText(quote);
  const image = await addImage(image_url)

  container.replaceChildren(name, heading, text);
}

export default renderElement