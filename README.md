Portfolio Website

A personal portfolio web application built with Spring Boot, Thymeleaf, HTML/CSS/JS, and MySQL.
This project showcases personal information, projects, and a contact form with database integration.

📂 Project Structure
Portfolio/
│── .idea/                     # IDE settings  
│── .mvn/                      # Maven wrapper files  
│── src/  
│   ├── main/  
│   │   ├── java/Portfolio/  
│   │   │   ├── Controller/          # Controllers (MainController)  
│   │   │   ├── Model/               # Entities (ContactForm)  
│   │   │   ├── Repository/          # JPA Repositories (ContactFormRepository)  
│   │   │   └── PortfolioApplication # Main Spring Boot application  
│   │   ├── resources/  
│   │   │   ├── static/              # Static assets (CSS, JS, images, PDF)  
│   │   │   │   ├── css/style.css  
│   │   │   │   ├── js/script.js  
│   │   │   │   ├── images/profile.png  
│   │   │   │   └── Files/Nkotolane Pitso Gintos.pdf  
│   │   │   └── templates/           # Thymeleaf templates  
│   │   │       ├── fragments/ (header.html, footer.html)  
│   │   │       ├── index.html  
│   │   │       ├── AboutUs.html  
│   │   │       ├── ContactUs.html  
│   │   │       └── project.html  
│   │   └── application.properties   # App configuration  
│   └── test/java/Portfolio/  
│       └── PortfolioApplicationTests  
│── target/                    # Build output  
│── pom.xml                    # Maven configuration  
│── portfolio_db.sql           # Database schema  
│── .gitignore  
│── .gitattributes  
│── HELP.md  
│── mvnw / mvnw.cmd            # Maven wrapper scripts  

🚀 Features

Home Page – Personal introduction with profile picture.

About Us Page – Details about background, skills, and experience.

Projects Page – Showcases portfolio projects.

Contact Us Page – Contact form integrated with database.

Responsive Design – Styled with custom CSS.

🛠️ Tech Stack

Backend: Spring Boot, Spring MVC, Spring Data JPA

Frontend: Thymeleaf, HTML5, CSS3, JavaScript

Database: MySQL (portfolio_db.sql)

Build Tool: Maven

⚙️ Setup & Installation

Clone the repository

git clone https://github.com/your-username/portfolio.git
cd portfolio


Configure the database

Create a database in MySQL (e.g., portfolio_db)

Import the schema:

mysql -u root -p portfolio_db < portfolio_db.sql


Update src/main/resources/application.properties with your DB credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update


Build & Run the app

./mvnw spring-boot:run


Access the site
Open http://localhost:8080
 in your browser.

🧪 Running Tests
./mvnw test

📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/aed13425-ac0a-4160-84af-18b25f60bb75" />
<img width="1920" height="1080" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/91d9769a-0397-48af-a524-c668af1f6f7d" />
<img width="1920" height="1080" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/b845b5e6-6eed-4637-9ec3-086a7069cdec" />
<img width="1920" height="1080" alt="Screenshot (87)" src="https://github.com/user-attachments/assets/d45d4d59-c386-4447-932b-ebdbc58b177c" />
<img width="1920" height="1080" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/6bbe693e-7f10-4932-92de-4235ae5b2a9f" />


👤 Author

Nkotolane Pitso Gintos
📧pnkotolane@gmail.com
🌐 https://www.linkedin.com/in/pitso-nkotolane
