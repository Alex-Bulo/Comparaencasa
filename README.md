# Comparaencasa challange
## Coding project test for Comparaencasa
Dev: Alejandro Bullorini
***
We want to create a project that will use tools like Docker, Python, React and Mysql.
The project exposed here can be done partially or with similar implementations, we are looking how you can find a way to resolve the main issue.

 - The idea of the app is a server that will take a car plate as a parameter and will return a car model associated with the plate.  
 - The user should write a car plate in the frontend, the front should connect to the backend and ask for the car name. 
 - The backend will check on the database and return a response.
	 - There is plus here if you can add a redis cache server in front of the database.
***
Technology Stack used:
 - Frontend: ReactJS, CSS
 - Backend: NodeJS
	 - expressJS (express-validator)
	 - bcryptjs
	 - sequelize
	 - redis
 - Database: MySQL
***
**Instalation**
 
1. Clone repository `git clone https://github.com/Alex-Bulo/Comparaencasa.git`
2. Initialize your local MySQL environment & redis
3. Run `npm run first` in the console to create database, tables and entries
4. Run `npm start` in the console to install and run the application
***
**Sample Plates and Users**
 - [ ] Plates
	 - [ ] AH 423 FF
	 - [ ] IE 437 DS 
	 - [ ] FI 365 GJ

 - [ ] Users
	 - [ ] Alejandro Bullorini
		 - [ ] mail: alejandro@user.com
		 - [ ] password: holamundo
	 - [ ] Foo Bar
		 - [ ] mail: FooBar@user.com
		 - [ ] password: user1
	 - [ ] Test User
		 - [ ] mail: UserTest@user.com
		 - [ ] password: user2

 [Comments] 
>  - Use of redis for server cache
>  - Use of hooks, context and protected routes for React
>  - Encription of passwords
>  - Server-side validation (login)

 [Other possible features] 
>  - Ability to register new user (create a register in table 'users' through a Post HTTP method)
>  - Styled components for the frontend for better use of reutilized components
>  - Dark mode through the use of CSS variables in root