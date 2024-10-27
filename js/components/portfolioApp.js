import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

class PortfolioApp {
  _body = document.querySelector("body");
  _navlinks = document.querySelectorAll(".nav-link");
  _sections = document.querySelectorAll("section");
  _header = document.querySelector("header");
  _profileCard = document.querySelector(".profile-card");
  _observerOptions = {
    root: null,
    threshold: 0.6,
  };

  constructor() {
    this._handleNavLinks();
    this._toggleNavbar();
    this._initObserver();
  }

  _initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
          this._removeActiveLink();
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });
    }, this._observerOptions);

    this._sections.forEach((section) => observer.observe(section));
  }

  _handleNavLinks() {
    const links = document.querySelectorAll(".page-link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        this._removeActiveLink();
        const targetId = link.getAttribute("href");

        link.classList.add("active");
        link.setAttribute("aria-current", "page");
        gsap.to(window, { duration: 0.9, scrollTo: targetId });
      });
    });
  }

  _removeActiveLink() {
    this._navlinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
  }

  _toggleNavbar() {
    const navbar = document.querySelector("nav");

    this._body.addEventListener("click", function (e) {
      const toggleBtn = e.target.closest(".nav-toggle-btn");
      const closeBtn = e.target.closest(".nav-close-btn");
      const navLink = e.target.closest(".nav-link");

      if (toggleBtn) {
        navbar.classList.add("expand-navbar");
        this.style.overflow = "hidden";
      } else if (closeBtn || navLink) {
        navbar.classList.remove("expand-navbar");
        this.style.overflow = "auto";
      } else {
        return;
      }
    });
  }
}

export default PortfolioApp;
