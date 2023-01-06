const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // } else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // } else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElementLeft = document.querySelectorAll(".hiddenleft");
hiddenElementLeft.forEach((el) => observerLeft.observe(el));
const hiddenElementRight = document.querySelectorAll(".hiddenright");
hiddenElementRight.forEach((el) => observerRight.observe(el));
