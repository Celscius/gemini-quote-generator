import { displayLoading, hideLoading } from '../loading.js';

describe('add or hide loading when app run', function() {

  beforeEach(() => {
    // Manually set the initial HTML structure
    document.body.innerHTML = `
      <div id="loader-container" class="loader-overlay" id="loader-overlay">
        <div class="loader-spinner"></div>
      </div>
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

  it("should hide loading and showing app element", async () => {
    
    const loader = document.getElementById('loader-container');
    const app = document.getElementById('app');

    hideLoading(loader, app)
    
    expect(loader.classList.contains("hidden")).toBe(true);
    expect(app.style.display).toBe('block');
  });

  it("should add loading and hiding app element", async () => {
    const loader = document.getElementById('loader-container');
    const app = document.getElementById('app');

    displayLoading(loader, app)

    expect(loader.classList.contains("hidden")).toBe(false);
    expect(app.style.display).toBe('none');
  });
});