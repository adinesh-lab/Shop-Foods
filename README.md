                                                      Shop-Plus-Plus-Foods
Shop-Plus-Plus-Foods is an E-Commerce food ordering website with good features and as well as responsive to the different user

In these project ,I created it with MERN Stack Web Application
And deployed the frontend,Backend and Admin pannel with Render.com

deployed frontend link:https://shop-foods-frontend.onrender.com

It enables you to order the foods with different categories and it also has payment options of both Cash on delivery and secured online payments

It has 3 parts:
Admin pannel
Frontend
Backend

By using frontend users can access our website and make orders and using the admin pannel we can process the orders and make serve of the food to the users

In these project i used the MongoDB atlas database to get connection with the server 



Steps to Run the project:

First Run Backend then Frontend & Admin

❖ Steps To Setup Backend Of The Project
 1. Open Project Folder In VS Code
 2. Open Integrated Terminal- Right Click on Sidebar > Select “Open In Integrated
 Terminal”
 3. Type “npm install” and press Enter and Wait for
 Installation to be completed (requires Internet)

 4. Setup The MongoDB
  a. Open this link- https://www.mongodb.com/cloud/atlas/register
  b. After that Sign Up on the website.
  c. Click on New Project Option
  d. After Creating Project go to Database Section &
      Build a database
  e. Select M0 & Your Region & Create Database
  f. Setup Username & Password & Create User
  g. Now Click on Finish & Close
  h. Whitelist IP 0.0.0.0 & Click on Add Entry
  i. Now Click on Connect
  j.Now Select Compass Option
  k. And Copy the Connection String
  l. And Paste It in db.js replace password with password
 you set previously in 4.F & save changes

 5. Now We have to Set Up stripe
 ● Open .env file in backend folder paste your stripe secret
 key in STRIPE_SECRET_KEY variable
6. To Run Backend use npm run server in Integrated Terminal



❖ Steps To Run Frontend  Of The Project
 1. Open Project Folder In VS Code
 2. Open Integrated Terminal in project directory
 ○ Right Click on Sidebar > Select “Open In Integrated
 Terminal”
 3. Type “npm install” and press Enter and Wait for
 Installation to be completed (requires Internet)
 4. After Installation You will See ‘node_modules’ Folder in
 the Sidebar
 5. After that type “npm run dev” in terminal

❖ Steps To Run Admin panel Of The Project
1. Open Project Folder In VS Code
 2. Open Integrated Terminal in project directory
 ○ Right Click on Sidebar > Select “Open In Integrated
 Terminal”
 3. Type “npm install” and press Enter and Wait for
 Installation to be completed (requires Internet)
 4. After Installation You will See ‘node_modules’ Folder in
 the Sidebar
 5. After that type “npm run dev” in terminal


Now you can Run the Mern stack web Application completely [Frontend,Backend,Admin-Pannel] and all functions should  works correctly








