let slider = (function(){
    let slider = document.querySelector(".slider-container");
    let slide = slider?.querySelectorAll(".slide");
    let totalSlides = slide?.length;
    let current = 0;

    let navigate = (direction) => {
        slide[current].classList.remove('active');
        current = (current+direction+totalSlides)%totalSlides;
        slide[current].classList.add('active');
    }

        
    document.getElementById("prev").addEventListener('click', () => { navigate(-1)});
    document.getElementById("next").addEventListener('click', () => { navigate(1)});
     

    function findCurrentSlide(allSlides){
        for(let idx in allSlides){
            if(allSlides[idx].classList.includes('active')){
                console.log("yes present + ${item}")
            }
        }
    }

    

    return {
            logger : function() {
            console.log(slide);
        }
    }
})();

// slider.logger();
// let btnElement = document.getElementById('click-btn');
// btnElement.addEventListener('click',slider().logger());
// 

// document.getElementsByClassName

// document.addEventListener("DOMContentLoaded", function() {
//     alert('Page is loaded');
//     slider().logger();
// });