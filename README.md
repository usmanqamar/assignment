## Requirements

* node >= 10
* npm >= 6 or yarn 

1. Checkout code in any directory.
1. It have 2 folder. client (react app) and server (express server as proxy)
1. Move to `client` directory from terminal.
1. Run `npm install`
1. Run `npm dev`. This will launch FE application at http://localhost:3000. You can change port in env variable PORT
1. Landing page will show records. clicking on image will move to detail page. Which can have video or image

#### To run server

1. Move to `server` directory from terminal.
1. Run `npm install`
1. Run `npm dev`. This will launch FE application at http://localhost:4000.



## Note
imgur Api returns some records as album. I am excluding those for simplicity, in selectors, because ui is not supporting albums
