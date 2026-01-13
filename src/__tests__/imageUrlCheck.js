/** @jest-environment node */
import { checkImageHeader } from '../imageUrlCheck.js'

describe('function to validate image url', function() {
  
  it('should success because the url is working and contain image', async () => {
    const url = "https://i.discogs.com/U75yhtLq9MYSvtdqPYEWwvA7MwBHJDiKuHPycpnIOhw/rs:fit/g:sm/q:90/h:337/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ5NDE4/MjgtMTQ1ODAxNzQ3/OS05OTQ5LmpwZWc.jpeg"
    const imageUrl = await checkImageHeader(url)
    expect(imageUrl).toEqual(url);
  });

  it("should fail because its not image url", async () => {
    const url = "https://i.discogs.com/a.jpeg"
    const imageUrl = await checkImageHeader(url)
    expect(imageUrl).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANHa63Y8tpuLLwa9J7yjlm8nAvj01OPQGvQ&s");
  });

  it("should fail because cors policy", async () => {
    const url = "https://i.discogs.com/a.jpeg"
    const imageUrl = await checkImageHeader(url)
    expect(imageUrl).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANHa63Y8tpuLLwa9J7yjlm8nAvj01OPQGvQ&s");
  });

});

