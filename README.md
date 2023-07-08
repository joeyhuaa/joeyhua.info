To deploy a React app on GitHub Pages, you can follow these steps:

1. Ensure that you have a React app set up locally on your machine. If you haven't created a React app yet, you can use `create-react-app` to set up a new project. Install it globally by running the command:
   ```
   npm install -g create-react-app
   ```
   Then create a new React app using the following command:
   ```
   npx create-react-app my-app
   ```

2. Once your React app is set up, navigate into the project directory:
   ```
   cd my-app
   ```

3. Build your React app for production using the following command:
   ```
   npm run build
   ```

   This command generates an optimized and minified version of your app in the `build` folder.

4. Install the `gh-pages` package, which is a handy tool for deploying apps to GitHub Pages:
   ```
   npm install --save gh-pages
   ```

5. Open the `package.json` file in your project and add the following lines:
   ```json
   "homepage": "https://your-username.github.io/my-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

   Replace `your-username` with your GitHub username and `my-app` with the name of your repository.

6. Save the `package.json` file.

7. Deploy your app to GitHub Pages by running the following command:
   ```
   npm run deploy
   ```

   This command will create a new branch called `gh-pages` in your repository and push the contents of the `build` folder to that branch.

8. Wait for the deployment to finish. Once it's done, you can access your deployed React app at the URL mentioned in the `homepage` field of your `package.json` file.

That's it! Your React app is now deployed on GitHub Pages. You can make changes to your app, rebuild it using `npm run build`, and redeploy it by running `npm run deploy` again.