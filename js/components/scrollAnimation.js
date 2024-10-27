import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class TriggerManager {
  constructor() {
    this._togglerLoader();
    this.initContentContainerScroll();
    this.initPortfolioScroll();
    this.initSectionlabelScroll();
    this.initServiceContainerScroll();
    this.initSkillsScroll();
  }

  _togglerLoader() {
    const loader = document.querySelector(".loader-container");
    const elements = [
      document.querySelector(".profile-card"),
      document.querySelector("header"),
    ];
    const main = document.querySelector("main");

    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

    timeline
      .to(loader, {
        opacity: 0,
        delay: 1,
        onComplete: () => {
          loader.classList.add("hidden");
        },
      })
      .from(main, {
        opacity: 0,
      })
      .from(elements[0], {
        opacity: 0,
        x: 50,
      });
  }

  initContentContainerScroll() {
    const contentContainer = document.querySelectorAll(".content-container");
    contentContainer.forEach((container) => {
      gsap.from(container, {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 200,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }

  initSectionlabelScroll() {
    const sectionLabels = document.querySelectorAll(".s-labels");
    sectionLabels.forEach((label) => {
      gsap.from(label, {
        scrollTrigger: {
          trigger: label,
          start: "top 100%",
          end: "top 30%",
          scrub: 1,
        },
        opacity: 0,
        y: 200,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }

  initServiceContainerScroll() {
    const serviceContainer = document.querySelectorAll(".services-item");

    serviceContainer.forEach((container) => {
      gsap.from(container, {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    });
  }

  initSkillsScroll() {
    const skillsItem = document.querySelectorAll(".skill-card");
    skillsItem.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    });
  }

  initPortfolioScroll() {
    const portfolioCard = document.querySelectorAll(".portfolio-card");

    gsap.from(portfolioCard[0], {
      scrollTrigger: {
        trigger: portfolioCard[0],
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
      y: 500,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.from(portfolioCard[1], {
      scrollTrigger: {
        trigger: portfolioCard[1],
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
      },
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.from(portfolioCard[2], {
      scrollTrigger: {
        trigger: portfolioCard[2],
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
      },
      x: 200,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.from(portfolioCard[3], {
      scrollTrigger: {
        trigger: portfolioCard[3],
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
      y: 500,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.from(portfolioCard[4], {
      scrollTrigger: {
        trigger: portfolioCard[4],
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
      y: 500,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });
  }
}

export default TriggerManager;
