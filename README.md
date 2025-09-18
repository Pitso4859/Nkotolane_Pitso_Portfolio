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

mysql -u root -p portfolio_db < portfolio_db.sql
Update src/main/resources/application.properties with your DB credentials:

3️⃣ Build & Run the app
./mvnw spring-boot:run
4️⃣ Access the site
Open http://localhost:8080 in your browser.

🧪 Running Tests

./mvnw test


📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/94f1b836-e6db-4c9b-9204-95470bb4c6dc" />
<img width="1920" height="1080" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/b5d19246-4369-45ca-87b6-a434bb695025" />
<img width="1920" height="1080" alt="Screenshot (87)" src="https://github.com/user-attachments/assets/9691fd2c-9bfa-48fb-84c4-5e526c9a390c" />
<img width="1920" height="1080" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/fa2d152d-f8d6-41c7-a63d-45a9effab70d" />
<img width="1920" height="1080" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/6fb6df79-8070-4974-98ac-2dc284abeb21" />

👤 Author
Nkotolane Pitso Gintos
📧 Email: pnkotolane@gmail.com
🌐 LinkedIn: Pitso Nkotolane
