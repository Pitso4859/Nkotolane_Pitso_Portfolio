# 🌐 Portfolio Website  

![Java](https://img.shields.io/badge/Java-17-blue?logo=java&logoColor=white)  
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.0-green?logo=springboot&logoColor=white)  
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.1-brightgreen?logo=thymeleaf&logoColor=white)  
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql&logoColor=white)  
![Maven](https://img.shields.io/badge/Maven-3.9-red?logo=apachemaven&logoColor=white)  
![Build](https://img.shields.io/badge/build-passing-brightgreen)  
![License](https://img.shields.io/badge/license-MIT-blue)  

A personal portfolio web application built with **Spring Boot, Thymeleaf, HTML/CSS/JS, and MySQL**.  
This project showcases personal information, projects, and a contact form with database integration.  

---

## 📂 Project Structure  

Portfolio/
│── .idea/ # IDE settings
│── .mvn/ # Maven wrapper files
│── src/
│ ├── main/
│ │ ├── java/Portfolio/
│ │ │ ├── Controller/ # Controllers (MainController)
│ │ │ ├── Model/ # Entities (ContactForm)
│ │ │ ├── Repository/ # JPA Repositories (ContactFormRepository)
│ │ │ └── PortfolioApplication # Main Spring Boot application
│ │ ├── resources/
│ │ │ ├── static/ # Static assets (CSS, JS, images, PDF)
│ │ │ │ ├── css/style.css
│ │ │ │ ├── js/script.js
│ │ │ │ ├── images/profile.png
│ │ │ │ └── Files/Nkotolane Pitso Gintos.pdf
│ │ │ └── templates/ # Thymeleaf templates
│ │ │ ├── fragments/ # header.html, footer.html
│ │ │ ├── index.html
│ │ │ ├── AboutUs.html
│ │ │ ├── ContactUs.html
│ │ │ └── project.html
│ │ └── application.properties # App configuration
│ └── test/java/Portfolio/
│ └── PortfolioApplicationTests
│── target/ # Build output
│── pom.xml # Maven configuration
│── portfolio_db.sql # Database schema
│── .gitignore
│── .gitattributes
│── HELP.md
│── mvnw / mvnw.cmd # Maven wrapper scripts

yaml
Copy code

---

## 🚀 Features  

- **Home Page** – Personal introduction with profile picture.  
- **About Us Page** – Background, skills, and experience.  
- **Projects Page** – Showcases portfolio projects.  
- **Contact Us Page** – Contact form integrated with MySQL database.  
- **Responsive Design** – Styled with custom CSS.  

---

## 🛠️ Tech Stack  

- **Backend**: Spring Boot, Spring MVC, Spring Data JPA  
- **Frontend**: Thymeleaf, HTML5, CSS3, JavaScript  
- **Database**: MySQL (`portfolio_db.sql`)  
- **Build Tool**: Maven  

---

## ⚙️ Setup & Installation  

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
2️⃣ Configure the database
Create a database in MySQL (e.g., portfolio_db)

Import the schema:

bash
Copy code
mysql -u root -p portfolio_db < portfolio_db.sql
Update src/main/resources/application.properties with your DB credentials:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
3️⃣ Build & Run the app
bash
Copy code
./mvnw spring-boot:run
4️⃣ Access the site
Open http://localhost:8080 in your browser.

🧪 Running Tests
bash
Copy code
./mvnw test
📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/aed13425-ac0a-4160-84af-18b25f60bb75" /> <img width="1920" height="1080" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/91d9769a-0397-48af-a524-c668af1f6f7d" /> <img width="1920" height="1080" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/b845b5e6-6eed-4637-9ec3-086a7069cdec" /> <img width="1920" height="1080" alt="Screenshot (87)" src="https://github.com/user-attachments/assets/d45d4d59-c386-4447-932b-ebdbc58b177c" /> <img width="1920" height="1080" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/6bbe693e-7f10-4932-92de-4235ae5b2a9f" />
👤 Author
Nkotolane Pitso Gintos
📧 Email: pnkotolane@gmail.com
🌐 LinkedIn: Pitso Nkotolane
