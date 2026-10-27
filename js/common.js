"use strict";

    document.querySelectorAll("nav a").forEach(i=>{
      i.addEventListener("click",function(e){
          document.querySelectorAll("nav a").forEach(i=>i.classList.remove("active"));
          e.target.classList.add("active");
          if(screen.width<=991){
             document.querySelector("nav").classList.toggle("d-block");
             document.querySelector("nav").classList.toggle("d-none");
              document.querySelector(".btn-menu span").classList.toggle("fa-bars");
              document.querySelector(".btn-menu span").classList.toggle("fa-close");
          }
      });

    });

    document.querySelector(".btn-menu").addEventListener("click",function(){  
        this.children[0].classList.toggle("fa-bars");
        this.children[0].classList.toggle("fa-close");
        document.querySelector("nav").classList.toggle("d-none");
        document.querySelector("nav").classList.toggle("d-block");
    });
