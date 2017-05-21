# Product list app

__Simple app that displays products from API.__

## Init 
- `npm install`
- `cp ./src/config.js.dist ./src/config.js` (and fill the properties [for dev env apiUri should be `http://localhost:3300`])
 
## Dev env
To run app in dev env:
- `cp ./config.json.dist ./config.json` (and fill properties as well)
- `node proxy.js` - for development purpose we need to omit the API cors settings. Proxy is listening on `localhost:3300`
- `npm start`
- Server is listening on `localhost:3001`

## Prod env
To run app in prod env:
- `npm run-script build`
- go to `./dist/` and open `index.html` in your browser