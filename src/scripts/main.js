'use strict';

import { form } from "./files/form";
import { sliderDots, dotClick } from "./files/slider";
import { scrollAnimItems } from "./files/scroll";
import { cursorAnimLinks } from "./files/cursor-anim-links";
import { showHuckedText } from "./files/hacked-text";

//stoped scroll burger-menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
     document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

//card 3d hover effect
VanillaTilt.init(document.querySelectorAll('.recommended__product'), {
  max: 25,
  speed: 650,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 800,
  transition: true
});


//hacked text effect
showHuckedText();
