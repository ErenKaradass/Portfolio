const translations = {
  en: {
    home: "HomePage",
    about: "About Me",
    projects: "Projects",
    gallery: "Gallery",
    contact: "Contact",
    resume: "Resume",
    aboutPage: "About Me",
    profile: "Profile",
    education: "Education",
    skills: "Skills",
    contactHeading: "Contact",
    reachMe: "How to reach me",
    introName: "Eren Karadas",
    tagline: "I build games, tools, and interactive projects while continuously learning new technologies.",
    nutshell: "In a nutshell",
    featured: "Featured Projects",
    language: "Language",
    
  },
  de: {
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
    gallery: "Galerie",
    contact: "Kontakt",
    resume: "Lebenslauf",
    aboutPage: "Über mich",
    profile: "Profil",
    education: "Ausbildung",
    skills: "Fähigkeiten",
    contactHeading: "Kontakt",
    reachMe: "So erreichst du mich",
    introName: "Eren Karadas",
    tagline: "Ich entwickle Spiele, Tools und interaktive Projekte und lerne gleichzeitig ständig neue Technologien.",
    nutshell: "Kurz gesagt",
    featured: "Ausgewählte Projekte",
    language: "Sprache",
    
  }
};

const getLanguage = () => localStorage.getItem("portfolioLanguage") || "en";

function setLanguage(language) {
  const normalizedLanguage = translations[language] ? language : "en";
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[normalizedLanguage][key]) {
      element.textContent = translations[normalizedLanguage][key];
    }
  });

  const buttons = document.querySelectorAll("[data-lang-toggle]");
  buttons.forEach((button) => {
    const isActive = button.dataset.langToggle === normalizedLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolioLanguage", normalizedLanguage);
  document.documentElement.lang = normalizedLanguage === "de" ? "de" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = getLanguage();
  const buttons = document.querySelectorAll("[data-lang-toggle]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langToggle));
  });

  setLanguage(initialLanguage);
});
