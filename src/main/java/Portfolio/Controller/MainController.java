package Portfolio.Controller;

import Portfolio.Controller.Model.ContactForm;
import Portfolio.Controller.Repository.ContactFormRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class MainController {

    private final ContactFormRepository contactFormRepository;

    // Constructor injection (good practice)
    public MainController(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("activePage", "home");
        return "index";
    }

    @GetMapping("/AboutUs")
    public String about(Model model) {
        model.addAttribute("activePage", "about");
        return "AboutUs";
    }

    @GetMapping("/project")
    public String projects(Model model) {
        model.addAttribute("activePage", "projects");
        return "project";
    }

    @GetMapping("/ContactUs")
    public String contact(Model model) {
        model.addAttribute("activePage", "contact");
        model.addAttribute("contactForm", new ContactForm()); // form binding
        return "ContactUs";
    }

    @PostMapping("/ContactUs")
    public String submitContact(@ModelAttribute ContactForm contactForm, Model model) {
        try {
            // Save form data into DB
            contactFormRepository.save(contactForm);

            // Success message
            model.addAttribute("successMessage", "✅ Thank you for your message! I'll get back to you soon.");
            model.addAttribute("contactForm", new ContactForm()); // reset form
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("errorMessage", "❌ Sorry, there was an error saving your message.");
        }

        model.addAttribute("activePage", "contact");
        return "ContactUs";
    }
}
