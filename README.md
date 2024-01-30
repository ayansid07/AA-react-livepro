# Ben-Aiden's portfolio-
Access it here: https://6592f2ca6ca12ddf8896bb54--resplendent-hotteok-939c2c.netlify.app/

Deployed on Netlify, here is how to deploy on Netlify:

Create an accout on Netlify and Log in

Create a .env file in your app's root folder and add this code:
  `````````````
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/src/App.js"
  status = 200
  `````````````
This line, 'to = "/src/App.js" ', in the above code indicates the location of the file that's is rendered first when your app is deployed.

Open the terminal in your root folder and run the command, npm run build

A build folder will be generated

Visit Netlify and click on 'Add new site', then click on 'Deploy manually'

Upload the Build folder

This should upload and deploy in less than 10 seconds!
