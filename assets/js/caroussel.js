// const carousselELement = document.querySelector(".caroussel");
// const leftBtn = carousselELement.querySelector(".leftbtn");
// const rigthBtn = carousselELement.querySelector(".rightbtn");
// const carousselItems = carousselELement.querySelector(".caroussel-items");
// carousselItems.classList.remove("scrolling");

// carousselItems.addEventListener("scroll",function(e){
//     const offsetWidth = carousselItems.offsetWidth;
// });


document.querySelectorAll(".caroussel").forEach(function(carousselELement){

    const leftBtn = carousselELement.querySelector(".leftbtn");
    const rigthBtn = carousselELement.querySelector(".rightbtn");
    const carousselItems = carousselELement.querySelector(".caroussel-items");
    carousselItems.classList.remove("scrolling");

    const items = Array.from(carousselItems.querySelectorAll(".caroussel-item"));

    items.slice().reverse().forEach(function(element){
        carousselItems.insertAdjacentHTML("afterbegin",element.outerHTML)
    })
    leftBtn.addEventListener("click",function(e){
        const offsetWidth = carousselItems.offsetWidth;
        carousselItems.scrollLeft -= offsetWidth;
        if(carousselItems.scrollLeft <= 0){
            carousselItems.classList.add("scrolling");
            carousselItems.scrollLeft = carousselItems.scrollWidth - offsetWidth*(items.length);
            carousselItems.classList.remove("scrolling");
            carousselItems.scrollLeft -= offsetWidth;
        }
    });
    rigthBtn.addEventListener("click",function(e){
        const offsetWidth = carousselItems.offsetWidth;
        carousselItems.scrollLeft += offsetWidth;

        // carousselItems.animate(
        //     [
        //       // keyframes
        //       { scrollLeft: "0" },
        //       { scrollLeft: "100" },
        //     ],
        //     {
        //       // timing options
        //       duration: 100,
        //     //   iterations: Infinity,
        //     },
        //   );


        if(Math.ceil(carousselItems.scrollWidth)  - (carousselItems.scrollLeft + carousselItems.offsetWidth) <=10){
            carousselItems.classList.add("scrolling");
            carousselItems.scrollLeft = offsetWidth*(items.length -1);
            carousselItems.classList.remove("scrolling");
            carousselItems.scrollLeft += offsetWidth;
        }
    });
});


// carousselItems.addEventListener("scroll",function(e){
//     const offsetWidth = carousselItems.offsetWidth;
//     if(carousselItems.scrollLeft <= 0){
//         carousselItems.classList.add("scrolling");
//         carousselItems.scrollLeft = carousselItems.scrollWidth - offsetWidth*(items.length);
//         carousselItems.classList.remove("scrolling");
//         carousselItems.scrollLeft -= offsetWidth;
//     }else if(Math.ceil(carousselItems.scrollWidth)  - (carousselItems.scrollLeft + carousselItems.offsetWidth) <=10){
//         carousselItems.classList.add("scrolling");
//         carousselItems.scrollLeft = offsetWidth*(items.length -1);
//         carousselItems.classList.remove("scrolling");
//         carousselItems.scrollLeft += offsetWidth;
//     }
// });