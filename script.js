"use strict";

/* Lenis Smooth Scroll i use it for smooth scrolling, it's gives a
 better performance when scrolling
 */
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/**
 * Header menu item : when it's clicked, the background move into the
 El that have been clicked to
 */

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".list_item a");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove the active class from all items
      items.forEach((i) => i.classList.remove("active"));
      // Add the active class to the clicked item
      this.classList.add("active");
    });
  });
});

/**
 * Here i've create a timeline to make sure that i animate all the
 * main Els in the home page :: I USE GSAP LIBRARY.
 */

let tl = gsap.timeline({
  defaults: { duration: 0.5, ease: "power4.t", stagger: 0.2 },
});

tl.fromTo(
  [".title", ".cta_btn", ".all_projects"],
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);

/**
 * I have created another GSAP timeline for each EL project card by
 * Store the classes in temporary variables, then I used "foreach"
 * To control the animation for each project.
 */

const projects = document.querySelectorAll(".project_card");
projects.forEach((project) => {
  const projectInfo = project.querySelector(".project_info");
  const projectName = project.querySelector(".project_name");
  const projectIcon = project.querySelector(".project_icon");
  const blurOverlay = project.querySelector(".blur_overlay");

  let tlP = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5, ease: "power3.out" },
  });
  tlP
    .to(projectInfo, {
      visibility: "visible",
    })
    .fromTo(
      projectName,
      {
        opacity: 0,
      },
      { opacity: 1, zIndex: 999 },
      "-=0.5"
    )
    .fromTo(
      projectIcon,
      {
        y: 10,
        x: 0,
        opacity: 0,
      },
      { y: 0, x: 10, opacity: 1, zIndex: 999 },
      "-=0.5"
    );

  project.addEventListener("mouseenter", () => {
    blurOverlay.style.visibility = "visible";
    blurOverlay.style.opacity = "1";
    tlP.play();
  });

  project.addEventListener("mouseleave", () => {
    blurOverlay.style.visibility = "hidden";
    blurOverlay.style.opacity = "0";
    tlP.reverse();
  });
});

/**
 * And here i've use a GSAP & SCROLLTRIGGER to make sure
 * that i animated each "fct" & "fm" each, and give them a " stagger eff"
 * to make  animation timeline smoother.
 */

let tlF = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer_section",
    start: "top 50%",
    end: "bottom 50%",
  },
});
tlF.fromTo(
  [".footer_contact_title", ".footer_mail"],
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.3, ease: "power4.Inout", duration: 0.8 }
);

/**
 *
 * MSGS from the developer
 */

function projectNote() {
  alert(`To know more about how this animation works, just check
    the "script.js" file.`);
}
function sourceCode() {
  alert(`Visite my profile for source code: https://github.com/Mohsinech/`);
}
function tTS() {
  alert("You can reach me here for any sort of infomations! IG:@muhsench");
}

/**
 * Author rights
 */

document.addEventListener("DOMContentLoaded", authorRight);

function authorRight() {
  const user = document.querySelector(".user");
  const popupInfo = document.querySelector(".popup_info");
  const exitGreting = document.getElementById("exit");

  let Hellouser = prompt("Hello, let's meet, What's your name?");
  alert(`Nice to meet you ${Hellouser}, my name is mohsine`);
  user.textContent = Hellouser;
  popupInfo.style.opacity = "1";

  exitGreting.addEventListener("click", () => {
    popupInfo.style.display = "none";
  });
}
