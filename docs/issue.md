## **Issue on unit testing**

##### 

##### Issue: on Unit Testing for Module 'element.js' Using Fetch Api with jsdom.

##### Status: Skipped / Manual Verification Only

**Last Updated:** 2026-01-09

**Description:**  
Unit tests for the **HTMLElement** module that using jsDom and fetch encounter problem because environment conflict. testing jsDom making fetch api cannot be read and it end up giving error and returning catch value.

**Reason**

→ even after trying multiple recommended workarounds for 'jest.config.js' file still didnt fix the issue

→ using axios adding addiotional overhead and even after trying its introduce another problem and decide not to use it and keep using fetch instead

**Workaround:**

- **Manual Testing:** Functionality has been verified by running 'imageUrlCheck.js' and it successful to validate the image url and the JSDom successful to fetch image to html with static image url.



##### Issue: testing on request module for error response

##### Status: skipped / Manual Verification Only

###### File: src/_____test______/request.js

**Last Updated:** 2026-01-11

currently **there no automated Jest unit tests** for error request. 

this the **expected** result for request.js module: 

- **400:** error when key is not valid

- **429:** error when api key quota reach its limit

- **503:** error when gemini server currently handling too many request (lul)

- **!response.ok** handle error other than above

**Reason:** Persistent ESM compatibility problems between Jest and Mock Service Worker (`msw/node`)  
→ `SyntaxError: Unexpected token 'export'` even after trying multiple recommended workarounds  
→ already tried adding this syntax on 'jest.config.js' and get the same error

```
transformIgnorePatterns: [
    '/node_modules/(?!msw|@bundled-es-modules|nanoid)'
  ],
  // Very important in 2025–2026 with latest Jest
  extensionsToTreatAsEsm: [ '.jsx', '.ts', '.tsx'],
```

→ Too much time sink for relatively low benefit at this stage



**Sample error log**

```
 export { until };
    ^^^^^^SyntaxError: Unexpected token 'export'

> 1 | import { setupServer } from 'msw/node'
    | ^

```

**Workaround:**

- **Manual Testing:** Functionality has been verified by running the application directly in the browser and it will show 'Error' with message on quote text field if request fail.
  
  

Feel free to try solving it — if you succeed please update this section 🙏
