export default {
  testEnvironment: 'jsdom',
  testTimeout: 20000, // 20 seconds
 
  transformIgnorePatterns: [
    '/node_modules/(?!msw|@bundled-es-modules|nanoid)'
  ],
  // Very important in 2025–2026 with latest Jest
  extensionsToTreatAsEsm: [ '.jsx', '.ts', '.tsx'],
};

/*
import { fetch, Headers, Request, Response } from 'undici';
import * as path from 'path'
import { TextEncoder, TextDecoder } from 'node:util';
import { MessageChannel, MessagePort } from 'node:worker_threads';
import { ReadableStream, WritableStream, TransformStream } from 'node:stream/web';
import { Blob, File } from 'node:buffer';


Object.defineProperties(globalThis, {
  TextEncoder: { value: TextEncoder },
  TextDecoder: { value: TextDecoder },
  MessageChannel: { value: MessageChannel },
  MessagePort: { value: MessagePort },
  ReadableStream: { value: ReadableStream },
  WritableStream: { value: WritableStream },
  TransformStream: { value: TransformStream },
  Blob: { value: Blob },
  File: { value: File }
});

global.MessageChannel = MessageChannel;
global.MessagePort = MessagePort;

globalThis.fetch = fetch;
globalThis.Headers = Headers;
globalThis.Request = Request;
globalThis.Response = Response;


export default {
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: [path.join(process.cwd(), '/jest.config.js')],
};
*/