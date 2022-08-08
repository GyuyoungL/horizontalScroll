gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".containers",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".containers").offsetWidth,
    onLeave: () => {
      console.log("complete!");
    },
  },
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".checklist-parent",
    pin: true,
    scrub: 3,
  },
});

sections.forEach((sct, i) => {
  ScrollTrigger.create({
    trigger: sct,
    containerAnimation: scrollTween,
    start: "left 45%",
    end: "right 95%",
    toggleClass: { targets: sct, className: "active" },
    onEnter: () => {
      if (i === 1) {
        console.log("one!");
      } else if (i === 2) {
        console.log("two");
        tl1
          .from(".checklist0", {
            opacity: 0,
            duration: 1,
            ease: "none",
          })
          .to(".checklist0 .image-wrapper .checked", {
            display: "block",
            autoAlpha: 1,
            ease: "none",
          })
          .from(".checklist1", {
            opacity: 0,
            duration: 1,
            ease: "none",
          })
          .to(".checklist1 .image-wrapper .checked", {
            display: "block",
            autoAlpha: 1,
            ease: "none",
          })
          .from(".checklist2", {
            opacity: 0,
            duration: 1,
            ease: "none",
          })
          .to(".checklist2 .image-wrapper .checked", {
            display: "block",
            autoAlpha: 1,
            ease: "none",
          })
          .from(".checklist3", {
            opacity: 0,
            duration: 1,
            ease: "none",
          })
          .to(".checklist3 .image-wrapper .checked", {
            display: "block",
            autoAlpha: 1,
            ease: "none",
          })
          .from(".checklist4", {
            opacity: 0,
            duration: 1,
            ease: "none",
          })
          .to(".checklist4 .image-wrapper .checked", {
            display: "block",
            autoAlpha: 1,
            ease: "none",
          });
      } else if (i === 3) {
        console.log("three");
      } else if (i === 4) {
        console.log("four");
      }
    },
    // onLeave: () => {
    //   console.log("ended!", sct, i);
    // },
  });
});

// progress bar
document.addEventListener("DOMContentLoaded", function () {
  let progressBarInner = document.querySelector(".progress-bar-inner");

  window.addEventListener("scroll", function () {
    let h = document.documentElement;

    let st = h.scrollTop || this.document.body.scrollTop;
    let sh = h.scrollHeight || this.document.body.scrollHeight;

    let percentage = (st / (sh - h.clientHeight)) * 100;
    let roundedPercentage = Math.round(percentage);

    progressBarInner.style.width = percentage + "%";
    progressBarInner.innerText = roundedPercentage + "%";
  });
});
