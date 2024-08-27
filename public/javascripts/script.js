Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(1, 1, 1, 1)",
  duration: 0.2,
});

Shery.makeMagnet("#magnet", {});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".anim1", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 0.5,
});

function SheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
  });
}

SheryAnimation();
