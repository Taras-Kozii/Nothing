'use strict';

export function showHuckedText() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const titles = document.querySelectorAll(".title");

  titles.forEach(title => {
    title.onmouseover = event => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.hacked[index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");

        if(iteration >= event.target.dataset.hacked.length){
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
      }
  });
}
