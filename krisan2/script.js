// =====================================
// DASHBOARD NAVIGATION
// =====================================

function goSupplier() {
    window.location.href = "supplier-dashboard/index.html";
}

function goBuyer() {
    window.location.href = "buyer-dashboard/index.html";
}

function goLogistics() {
    window.location.href = "logistics-dashboard/index.html";
}

// =====================================
// SCROLL ANIMATION
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        ".about-card, .why-item, .feature-card, .dashboard-card, .workflow-step"
    );

    animatedElements.forEach((element) => {
        element.classList.add("hidden");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach((element) => {
        observer.observe(element);
    });

});

// =====================================
// ACTIVE NAVBAR LINK
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active-link");
        }

    });

});

// =====================================
// NAVBAR SHADOW ON SCROLL
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 6px 20px rgba(0,0,0,0.12)";

    } else {

        navbar.style.boxShadow =
            "0 2px 12px rgba(0,0,0,0.05)";

    }

});

// =====================================
// HERO FLOATING EFFECT
// =====================================

const nodes = document.querySelectorAll(".node");

nodes.forEach((node, index) => {

    let direction = 1;

    setInterval(() => {

        const current =
            parseFloat(node.dataset.move || 0);

        let next = current + (direction * 2);

        if (next > 10) direction = -1;
        if (next < -10) direction = 1;

        node.style.transform =
            `translateY(${next}px)`;

        node.dataset.move = next;

    }, 100);

});

// =====================================
// WORKFLOW HOVER EFFECT
// =====================================

const workflowSteps =
    document.querySelectorAll(".workflow-step");

workflowSteps.forEach(step => {

    step.addEventListener("mouseenter", () => {

        step.style.transform = "scale(1.05)";
        step.style.transition = ".3s";

    });

    step.addEventListener("mouseleave", () => {

        step.style.transform = "scale(1)";

    });

});

// =====================================
// DASHBOARD CARD EFFECT
// =====================================

const dashboardCards =
    document.querySelectorAll(".dashboard-card");

dashboardCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});

// =====================================
// HERO BUTTON ANIMATION
// =====================================

const heroButtons =
    document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    );

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px)";

    });

});

// =====================================
// CONSOLE INFO
// =====================================

console.log(`
==================================
KRISAN LOGISTICS PLATFORM
==================================

Supplier Dashboard
Buyer Dashboard
Logistics Dashboard

Prototype Version 1.0

==================================
`);