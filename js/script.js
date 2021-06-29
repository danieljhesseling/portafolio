//Navbar
const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navbarOffsetTop){ navbar.classList.add("sticky");
}else{ navbar.classList.remove("sticky");}
});


//Make progres bar appear
function myFunctionP() {
    var x = document.getElementById("myDivP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionS() {
    var x = document.getElementById("myDivS");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function myFunctionJ() {
    var x = document.getElementById("myDivJ");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionH() {
    var x = document.getElementById("myDivH");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionJs() {
    var x = document.getElementById("myDivJs");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionC() {
    var x = document.getElementById("myDivC");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

 