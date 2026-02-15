Node.js CRUD Application – MongoDB vs Mongoose
📌 Project Overview
This project demonstrates CRUD (Create, Read, Update, Delete) operations using Node.js with two different approaches:
1.	MongoDB Native Driver – direct database operations
2.	Mongoose ODM – schema-based modeling and abstraction
I built this project during the middle of my MongoDB learning process to reinforce concepts through hands-on practice and to understand the difference between native MongoDB operations and Mongoose.

🛠 Technologies Used
•	Node.js
•	Express.js
•	MongoDB
•	Mongoose
•	Handlebars

📂 Project Structure
nodejs-crud-comparison/
│
├── native-mongodb/       # CRUD using MongoDB native driver
│   ├── app.js
│   ├── db.js
│   └── ...
│
├── mongoose-version/     # CRUD using Mongoose ODM
│   ├── app.js
│   ├── models/           # Mongoose schemas
│   └── ...
│
└── README.md

🔹 Version 1 – Native MongoDB
•	Directly uses MongoClient to connect and perform CRUD operations
•	Manual handling of ObjectId
•	More control, but requires extra boilerplate

🔹 Version 2 – Mongoose
•	Uses Mongoose schemas for structure and validation
•	CRUD operations are simpler and cleaner
•	Easier to scale and maintain

📊 Key Learnings
•	How to connect Node.js with MongoDB
•	Handling _id and ObjectId conversion
•	Difference between MongoDB native driver vs Mongoose ODM
•	Refactoring code for cleaner structure
•	Using Handlebars for templating

🚀 How to Run

1.	Clone the repository:
git clone https://github.com/YOUR_USERNAME/nodejs-crud-comparison.git

2.	Navigate to the version you want to run:
cd native-mongodb
OR
cd mongoose-version

3.	Install dependencies:
npm install

4.	Start the server:
node app.js

5.	Open your browser:
http://localhost:3000

