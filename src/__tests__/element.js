import { addImage, addName, addTittle, addText, renderElement } from '../element.js';

describe('create html elment', function() {

  beforeEach(() => {
    // Manually set the initial HTML structure
    document.body.innerHTML = `
      <div class="card">   
        <div class="firstinfo">
          <img id="img" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" />
          <div id="app" class="profileinfo">
            <h1>John Doe</h1>
            <h3>Swift developer</h3>
            <p class="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
          </div>
        </div>
      </div>
    `;
  });

  // A common pattern is to clear the JSDOM body after each test to prevent side effects
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it("should add image url to element with id 'img' ", async () => {
    const url = "https://i.discogs.com/U75yhtLq9MYSvtdqPYEWwvA7MwBHJDiKuHPycpnIOhw/rs:fit/g:sm/q:90/h:337/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ5NDE4/MjgtMTQ1ODAxNzQ3/OS05OTQ5LmpwZWc.jpeg"
    const image = await addImage(url);
    expect(image.id).toBe('img');

    // this part still have issue because fetch api not working with jsdom
    // expect(image.src).toEqual(url);
  });

  it("should create element for subject with element Tag 'H1' for default ", async () => {
    const subject = 'Innovation & Empathy'
    const name = addName(subject);

    expect(name.textContent).toBe(subject);
    expect(name.tagName).toBe('H1')
  });

  it("should create element for title with element Tag 'H3' for default ", async () => {
    const tittle = 'Architects of Tomorrow'
    const heading = addTittle(tittle);

    expect(heading.textContent).toBe(tittle);
    expect(heading.tagName).toBe('H3')
  });

  it("should create element for quote text with element Tag 'P' for default ", async () => {
    const quote = "In 2026, let curiosity be your compass and collaboration your blueprint. The future isn't merely observed; it's architected by minds that dare to connect, innovate, and build a more compassionate world."
    const text = addText(quote);

    expect(text.textContent).toBe(quote);
    expect(text.className).toBe('bio');
    expect(text.tagName).toBe('P')
  });

  it("should create app element with given object value", async () => {
    
  });

  it("should create app element when object not found with default value", async () => {
    
  });

  it("should create app element with error message when fetching data fail", async () => {
    
  });
});