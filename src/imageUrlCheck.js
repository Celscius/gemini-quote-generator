
const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANHa63Y8tpuLLwa9J7yjlm8nAvj01OPQGvQ&s"

/*
 * validate image url and return default image if url is not valid
 * @param {string} url
 * @return {string} url
 */
export async function checkImageHeader(url) {
  try {
    const isValid = new URL(url);
    if(!isValid) { return defaultImage }

    const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    const contentType = response.headers.get('Content-Type');

    if (!response.ok || !contentType.startsWith('image/')) { return defaultImage }
    return url
  
  } catch {
    return defaultImage
  }
}
