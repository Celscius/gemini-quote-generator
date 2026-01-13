import { generateQuote } from './gemini-context.js'
import { request } from './request.js'

export async function getQuote(geminiConfig = {}) {
   try {
      const subject = geminiConfig.SUBJECT ?? "2026"
      const data = await request(geminiConfig, generateQuote(subject));
      
      return data;
   } catch (err){
      return { subject: "gemini", title: "oops, something goes wrong :(", quote: err, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANHa63Y8tpuLLwa9J7yjlm8nAvj01OPQGvQ&s" }
   }
} 
