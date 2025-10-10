# 🌐 **Pitso Nkotolane - Portfolio Website**

![Java](https://img.shields.io/badge/Java-17-blue?logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.0-green?logo=springboot&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.1-brightgreen?logo=thymeleaf&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-3.9-red?logo=apachemaven&logoColor=white)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

### 💡 **Overview**
A professional **Portfolio Web Application** built with **Spring Boot**, **Thymeleaf**, and **MySQL**, designed to showcase my **skills, projects, and experience** as a Java developer.  
This responsive, modern, and elegant site features **interactive UI**, **dark/light mode**, and **real-time contact functionality**.

---

## ✨ **Features**
- ✅ **Responsive Design** – Works seamlessly on all devices  
- 🌗 **Dark / Light Mode** – User-selectable theme with persistent preferences  
- 🎞️ **Interactive UI** – Smooth transitions and animations  
- 📨 **Contact Form** – Functional form with MySQL persistence  
- 💼 **Project Showcase** – Interactive cards with hover effects  
- ⚙️ **Skills Visualization** – Animated progress bars  
- 📚 **Professional Timeline** – Education & experience timeline  

---

## 🛠️ **Technology Stack**

| Layer | Technologies |
|-------|---------------|
| **Backend** | Spring Boot, Spring MVC, Spring Data JPA |
| **Frontend** | Thymeleaf, HTML5, CSS3, JavaScript |
| **Database** | MySQL |
| **Build Tool** | Maven |
| **Styling** | Custom CSS (with theme variables) |
| **Icons** | Font Awesome |


---

## 📁 Project Structure

```bash

Portfolio/
├── src/
│   ├── main/
│   │   ├── java/Portfolio/
│   │   │   ├── Controller/             # 🧭 MVC Controllers
│   │   │   ├── Model/                  # 🧩 Data entities (e.g., ContactForm)
│   │   │   ├── Repository/             # 💾 Data repositories
│   │   │   └── PortfolioApplication    # 🚀 Main application class
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/style.css       # 🎨 Theme & styling
│   │       │   ├── js/script.js        # ⚙️ Client-side logic
│   │       │   ├── images/             # 🖼️ Profile & project images
│   │       │   └── Files/              # 📂 Resume/CV downloads
│   │       ├── templates/              # 🧱 Thymeleaf templates
│   │       │   ├── fragments/          # 🧩 Shared components
│   │       │   ├── index.html          # 🏠 Home page
│   │       │   ├── AboutUs.html        # 👤 About page
│   │       │   ├── ContactUs.html      # 💬 Contact form
│   │       │   └── project.html        # 💡 Project showcase
│   │       └── application.properties  # ⚙️ Configuration file
├── pom.xml                             # 🧰 Maven build configuration
└── README.md                           # 📘 Project documentation

---
```

**🚀 Installation & Setup**
🧩 Prerequisites
☕ Java 17+
🐬 MySQL 8.0+
🧱 Maven 3.6+

---

**1️⃣ Clone the Repository**
git clone https://github.com/your-username/portfolio.git
cd portfolio

---

**2️⃣ Configure the Database**
Create a database:
CREATE DATABASE portfolio_db;

---

**Update your credentials in** src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.username=your_username
spring.datasource.password=your_password

---

**3️⃣ Build the Application**
./mvnw clean package

---

**4️⃣ Run the Application**
java -jar target/portfolio-0.0.1-SNAPSHOT.jar

---


**5️⃣ Access the App**
🌍 http://localhost:8080

---

📱 Pages Overview| Page        | Description                                       |
| ----------- | ------------------------------------------------- |
| 🏠 Home     | Personal intro, hero section, and navigation      |
| 👨‍💼 About | Background, skills visualization, and timeline    |
| 💻 Projects | Showcase of portfolio projects with tags          |
| ✉️ Contact  | Functional contact form with database persistence |

---


**🎨 Customization**
**🔧 Personal Info**
Update text in /templates HTML files
Replace your photo in /static/images/profile.png
Update your CV in /static/Files/

---

**🎨 Styling**
Modify theme colors in /static/css/style.css
Adjust variables under :root and .dark-mode

---

**🧱 Add Projects**
Add new project cards in project.html
Place project images under /static/images/

---

**🗄️ Database Schema**
CREATE TABLE contact_form (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    submitted_at DATETIME NOT NULL
);

---
**🧪 Testing**

Run all tests:
./mvnw test

--

**📬 Contact**
👤 Pitso Nkotolane Gintos
📧 pnkotolane@gmail.com
💼 LinkedIn: Pitso Nkotolane
🌐 Portfolio Website: Your Portfolio Link

---
📄 License
This project is licensed under the MIT License – see the LICENSE
 file for details.
 
---
🙏 Acknowledgments
💎 Icons by Font Awesome
🌱 Built with passion using Spring Boot and Thymeleaf
