# React Form with Validation.js and Sendgrid

### To run the app and form, please do the following:

- download / pull repo  `git clone https://yearzero@bitbucket.org/yearzero/react-form-toview.git`

- Run `npm install` to get all packages
 
- Run `yarn start` that will compile the JSX and initiate the server, a window will open with the address `http://localhost:3000/` 

- In order to test Sendgrid You will need to turn off your browser's CORS security, I did this by downloading the [Moesif CORS plugin for chrome](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)

- **IMPORTANT:** You will need an API key to use SendGrid, there's a [30 day free trial](https://goo.gl/Y1yeZz) there, that's what I used when testing. 
Please also note that the API is in the front only for testing purposes, the API key should **never** be set 
in the app itself since it exposes your key, this should be done **only** in the serverside, 
so if you're using Node, you could set SENDGRID_API in Node's env.process, rather than from the front that exposes the API key.


Thanks,
Erez 


