import { http, HttpResponse } from 'msw'
import geminiConfig from '../config.js'; 

export const handlers = [
  const { API_KEY, model } = geminiConfig
  // Intercept GET requests to this exact URL
  http.post(`${model}${API_KEY}`, () => {
    return HttpResponse.json({ subject: '2026', tittle: 'John Doe', quote: 'quote here' })
  }),
]