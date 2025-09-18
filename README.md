🌐 Pitso Nkotolane - Portfolio Website
https://img.shields.io/badge/Java-17-blue?logo=java&logoColor=white
https://img.shields.io/badge/Spring_Boot-3.0-green?logo=springboot&logoColor=white
https://img.shields.io/badge/Thymeleaf-3.1-brightgreen?logo=thymeleaf&logoColor=white
https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql&logoColor=white
https://img.shields.io/badge/Maven-3.9-red?logo=apachemaven&logoColor=white
https://img.shields.io/badge/build-passing-brightgreen
https://img.shields.io/badge/license-MIT-blue

A professional portfolio web application built with Spring Boot, Thymeleaf, and MySQL showcasing my skills, projects, and experience as a Java developer.

✨ Features
Responsive Design: Optimized for all device sizes

Dark/Light Mode: User-selectable theme with persistent preferences

Interactive UI: Animated elements and smooth transitions

Contact Form: Functional contact form with database persistence

Project Showcase: Dedicated section for portfolio projects

Skills Visualization: Animated progress bars for technical skills

Professional Timeline: Education and experience timeline

🛠️ Technology Stack
Backend: Spring Boot, Spring MVC, Spring Data JPA

Frontend: Thymeleaf, HTML5, CSS3, JavaScript

Database: MySQL

Build Tool: Maven

Styling: Custom CSS with CSS variables for theming

Icons: Font Awesome

📁 Project Structure
text
Portfolio/
├── src/
│   ├── main/
│   │   ├── java/Portfolio/
│   │   │   ├── Controller/           # MVC Controllers
│   │   │   ├── Model/                # Data entities (ContactForm)
│   │   │   ├── Repository/           # Data repositories
│   │   │   └── PortfolioApplication  # Main application class
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/style.css     # All styling with theme support
│   │       │   ├── js/script.js      # Client-side functionality
│   │       │   ├── images/           # Profile and project images
│   │       │   └── Files/            # Resume/CV downloads
│   │       ├── templates/            # Thymeleaf templates
│   │       │   ├── fragments/        # Reusable template components
│   │       │   ├── index.html        # Home page
│   │       │   ├── AboutUs.html      # About page with skills
│   │       │   ├── ContactUs.html    # Contact form page
│   │       │   └── project.html      # Projects showcase
│   │       └── application.properties # Application configuration
├── target/                           # Build output directory
├── pom.xml                          # Maven configuration
└── README.md                        # Project documentation
🚀 Installation & Setup
Prerequisites
Java 17 or higher

MySQL 8.0 or higher

Maven 3.6 or higher

Step-by-Step Setup
Clone the repository

bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
Database Configuration

Create a MySQL database named portfolio_db

Update database credentials in src/main/resources/application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.username=your_username
spring.datasource.password=your_password
Build the Application

bash
./mvnw clean package
Run the Application

bash
java -jar target/portfolio-0.0.1-SNAPSHOT.jar
Access the Application
Open your browser and navigate to http://localhost:8080

📱 Pages Overview
Home Page
Personal introduction with profile picture

Call-to-action buttons for navigation

Responsive hero section with animations

About Page
Professional background and biography

Skills section with animated progress bars

Education and experience timeline

Downloadable resume/CV

Projects Page
Showcase of portfolio projects

Project descriptions with technology tags

Visual project cards with hover effects

Contact Page
Functional contact form with validation

Form submission to database

Success/error message handling

🎨 Customization
To personalize this portfolio:

Update Personal Information

Modify content in HTML templates

Replace src/main/resources/static/images/profile.png with your photo

Update resume/CV in src/main/resources/static/Files/

Customize Colors and Styling

Edit CSS variables in src/main/resources/static/css/style.css

Modify the color scheme in the :root and .dark-mode selectors

Add Projects

Update the projects section in the projects page

Add project images to the static/images directory

📊 Database Schema
The application uses a single table for contact form submissions:

sql
CREATE TABLE contact_form (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    submitted_at DATETIME NOT NULL
);
🧪 Testing
Run the test suite with:

bash
./mvnw test
📬 Contact
Pitso Nkotolane Gintos

📧 Email: pnkotolane@gmail.com

💼 LinkedIn: Pitso Nkotolane

🌐 Portfolio: https://your-portfolio-url.com

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Icons provided by Font Awesome
