# Boxinator
##Boxinator Programming Test
##by Jonathan Hoffmann

##Tech Stack:
IntelliJ Ultimate 2020.2.3
Node.js 14.15.5
NPM version 6.14.11
Java 17.0.1
Tomcat 9.0.56
XAMPP 3.2.4
Google Chrome 99.0.4844.51

##Ports that are used by the application:
MySQL 3306
Apache Webserver (Only for database initialization) 80,443
Backend 8082
Frontend 8080

##URLs for the application
http://localhost:8082/boxinator_backend_war_exploded/api/listboxes
http://localhost:8082/boxinator_backend_war_exploded/api/hello-world
http://localhost:8082/boxinator_backend_war_exploded/api/addboxesrandom
http://localhost:8080/listboxes.html
http://localhost:8080/addbox.html


##To run the application:

###Step 1 - Database:
Open the XAMPP control panel and start the services Apache and MySQL.
Click on MySQL Admin
Click New on the left side of the phpMyAdmin browser window and call the new Database "boxinator_database".
Click import on the center top and choose the sql file in the folder boxinator-database.

###Step 2 - Backend:
Open the folder boxinator-backend as an IntelliJ project.
Make sure you have Tomcat selected when running the project.
If necessary please reload the Maven dependencies to install them.

###Step 3 - Frontend:
Open the folder boxinator-frontend as an IntelliJ Project.
run the command "npm install" to install the dependencies.
run "index.js". You can also use the command "npm start" for this.

###Step 4 - Fill the database: (optional)
If you want to fill up the database with some random boxes to test, please visit:
http://localhost:8082/boxinator_backend_war_exploded/api/addboxesrandom
This adds 20 random boxes into the database.

##Branching strategy and design decisions
Since this is just a small program that only i programmed, I decided to use no branches at all and just commit everything to the main branch.
I also decided to pursue some weird design decisions. Feel free to contact me so that we can talk more about the design decisions.
###Example 1
The pricing is calculated only in the display section of the frontend. Usually this would be in databases, but it was quicker and easier this way.
###Example 2
The CORS policy currently accepts everything. Usually More time should be spent to only allow the necessary CORS components.