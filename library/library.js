// jj-library
"use strict";
//iife
(function (window) {
  //all code goes here

  function jayLibrary() {
    let jayLibrary = {
      start: slide,
      myCarouselItems: [],
      mySlideTime: 4000,
    };

    // silideshow
    function slide(selector) {
      const main = document.querySelector(selector);
      let items = main.children;

      let myCarouselItems = [];

      for (let i = 0; i < items.length; i++) {
        myCarouselItems[i] = items[i];
      }
      jayLibrary.myCarouselItems = myCarouselItems;

      main.style.backgroundImage = `url(${myCarouselItems[0].src})`;
      let mySort = 1;
      setInterval(() => {
        if (mySort >= myCarouselItems.length) {
          mySort = 1;
          myCarouselItems.map((images) => {
            images.classList.remove("active");
          });
        } else {
          mySort = mySort;
          myCarouselItems[mySort].classList.add("active");
          mySort++;
          console.log(mySort);
        }
      }, jayLibrary.mySlideTime);
    }

    return jayLibrary;
  }
  //This will be the window property
  if (typeof window.GlobalJayLibrary === "undefined") {
    window.GlobalJayLibrary = jayLibrary();
  }
})(window);

export default GlobalJayLibrary;
