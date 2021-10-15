console.log("check");

const MenuToggle = (Menu, Hamburger, Overlay) => {
  var Nav = document.querySelector(Menu);
  var Ham = document.querySelector(Hamburger);
  var Over = document.querySelector(Overlay);

  const AddRemove = () => {
    Nav.classList.toggle("show");
    Ham.classList.toggle("on");
    Over.classList.toggle("over");
  };

  Ham.addEventListener("click", () => AddRemove());
  window.addEventListener("resize", () => {
    if (window.innerWidth > 950 && Ham.classList.contains("on")) {
      Nav.classList.remove("show");
      Ham.classList.remove("on");
      Over.classList.remove("over");
    }
  });
};
MenuToggle(".item-list", ".hamburger", "#overlay");

new Splide(".splide", {
  type: "loop",
  drag: true,
  rewind: true,
  fixedWidth: "370px",
  autoWidth: false,
  fixedHeight: "200px",
  autoHeight: false,
  perPage: 4,
  perMove: 1,
  gap: "2rem",
  padding: "1rem",
  arrows: false,
  pagination: false,
  focus: "center",
  autoplay: true,
  interval: 5000,
  wheel: true,
  breakpoints: {
    500: {
      perPage: 1
    },
    900: {
      perPage: 2
    },
    1000: {
      perPage: 4
    }
  }
}).mount();

gsap.registerPlugin(ScrollTrigger);

const Hide = element => {
  gsap.set(element, { autoAlpha: 0 });
};

const Animator = (element, dir) => {
  dir = dir || -1;
  var y = dir * 100,
    x = 0;
  Hide(element);
  gsap.fromTo(
    element,
    {
      y: y,
      x: x
    },
    {
      y: 0,
      x: 0,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power2",
      stagger: "0.5"
    },
    "+=0.1"
  );
};

const ScrollAnimation = element => {
  ScrollTrigger.create({
    trigger: element,
    // start: "start",
    toggleActions: "play reset",
    onEnter: function() {
      Animator(element);
    },
    onEnterBack: function() {
      Animator(element, 1);
    },
    onLeave: function() {
      Hide(element);
    }
  });
};

const BgAnimator = (element, x, y) => {
  Hide(element);
  gsap.fromTo(
    element,
    {
      y: y,
      x: x
    },
    {
      y: 0,
      x: 0,
      duration: 1,
      opacity: 1,
      autoAlpha: 1,
      ease: "power1"
    }
  );
};

const BgAnimation = (element, a, b) => {
  ScrollTrigger.create({
    trigger: element,
    toggleActions: "play reset",
    onEnter: function() {
      BgAnimator(element, a, b);
    }
    // onEnterBack: function() {
    //   BgAnimator(element, a, b);
    // }
  });
};

// header animations
const navItem = gsap.utils.toArray(".nav-item");
gsap.from(
  navItem,
  {
    duration: 1.2,
    y: -100,
    x: 0,
    ease: "power2",
    stagger: 0.3
  },
  "-=0.1"
);

const Logo = document.querySelector(".fromLeft");
gsap.from(Logo, {
  duration: 1,
  x: -150,
  y: 0,
  opacity: 0,
  ease: "power1"
});

const LogoBtn = document.querySelector(".fromRight");
gsap.from(LogoBtn, {
  duration: 1,
  x: 150,
  y: 0,
  opacity: 0,
  ease: "power1"
});

// background image animations
const bgOne = document.querySelector("#bg-main");
BgAnimation(bgOne, -10000, 10000);

// hero section animations
const heroItems = gsap.utils.toArray(".heroAni");
ScrollAnimation(heroItems);

// section two animations
const secTwoItems = gsap.utils.toArray(".secTwoAni");
ScrollAnimation(secTwoItems);

// background image two animations
const bgTwo = document.querySelector("#bg-mainTwo");
BgAnimation(bgTwo, 9999, -9999);

// section three animations
const secThreeItems = gsap.utils.toArray(".secThreeAni");
ScrollAnimation(secThreeItems);

// section four animations
const FinalItems = gsap.utils.toArray(".finalAni");
ScrollAnimation(FinalItems, "0.2");

const Validate = function() {
  const EmailBox = document.querySelector("#mail");

  const Email = EmailBox.value;
  // source stack overflow
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(Email)) {
    EmailBox.classList.add("err");
    setTimeout(() => {
      EmailBox.classList.remove("err");
    }, 1500);
  }
};

const Submit = document.querySelector(".go");

Submit.addEventListener("click", () => {
  Validate();
});
