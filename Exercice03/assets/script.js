    let crossPoint = 120;
    window.addEventListener('scroll', reveal);

    function reveal() {

      let myReveal = document.querySelectorAll('p');
      for (i = 0; i < myReveal.length; i++) {
        let windowHeight = window.innerHeight;
        let revealerTop = myReveal[i].getBoundingClientRect().top;
        // let revealerBottom = myReveal[i].getBoundingClientRect().bottom;

        if (revealerTop < windowHeight - crossPoint) {
          myReveal[i].style.opacity = "1";
          myReveal[i].style.transition = "all 0.3s";
          // myReveal[i].style.transform = "translatex(0)";
          
        } else {
          myReveal[i].style.opacity = "0";
          myReveal[i].style.transition = "all 0.3s";
          // myReveal[i].style.transform = "translatex(-100%)";
        };
        // if (revealerBottom < 0 + crossPoint) {
        //   myReveal[i].style.opacity = "0";
        //   myReveal[i].style.transition = "all 0.3s";
        // }
      }
    }


