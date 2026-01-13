/** @jest-environment node */
import geminiConfig from '../config.js'; // Use the relative path and extension
import { generateQuote } from '../gemini-context.js'
import { request } from '../request.js'
import { server } from '../mocks/server.js'

describe('request generate quote to gemini api', function() {


  
  it('should give subject, title, quote and image_url in object ', async () => {
    const subject = "2026"
    const data = await request(geminiConfig, generateQuote(subject));

    expect(data).toHaveProperty('subject');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('quote');
    expect(data).toHaveProperty('image_url');
  });

/*
  it('should give text that say api key is not valid and give link for gemini AI google studio ', async () => {
    const response = {statusCode: 400}
    const message = "Invalid API key. Check your api key in : https://aistudio.google.com/api-keys."

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe(`Error:${message}`)
  });

  it('should give text that tell you hit your quota limit for your api key ', async () => {
    const response = {statusCode: 429}
    const message = 'you hit your quota limit, try again later or next day.'

    expect(response.statusCode).toBe(429);
    expect(response.message).toBe(`Error:${message}`)
  });

  it('should give text that tell gemini server is having too many request on the server', async () => {
    const response = {statusCode: 503}
    const message = 'gemini server handling way too many request on the server, try again later'

    expect(response.statusCode).toBe(503);
    expect(response.message).toBe(`Error:${message}`)
  });

  it('should give text that tell there error happen ', async () => {
    const response = {ok: false}
    const message = `HTTP error! status: ${response.status}`

    expect(response.ok).toBe(false);
    expect(response.message).toBe(`Error:${message}`)
  });
*/
});



