export async function fileExists(fileUrl) {
  try {
    const response = await fetch(fileUrl, { method: 'HEAD' });
    return response.ok; // returns true (200 OK) or false (404 Not Found)
  } catch (err) {
    return false; 
  }
}
