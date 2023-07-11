function myFunction(x) {
    x.classList.toggle("change");
  }




  function openCar(evt, carName) {
    var i, carcontent, carlinks;
    carcontent = document.getElementsByClassName("carcontent");
    for (i = 0; i < carcontent.length; i++) {
      carcontent[i].style.display = "none";
    }
    carlinks = document.getElementsByClassName("carlinks");
    for (i = 0; i < carlinks.length; i++) {
      carlinks[i].className = carlinks[i].className.replace(" active", "");
    }
    document.getElementById(carName).style.display = "block";
    evt.currentTarget.className += " active";

  }
  document.getElementById("defaultOpen").click();


// Gta Abour +navbar

const gta = document. querySelector(".gta");
const carAboutMenu = document. querySelector(".caraboutmenu");


gta .addEventListener("click",()=>{

  gta.classList.toggle("active");
  carAboutMenu.classList.toggle("active");


})



