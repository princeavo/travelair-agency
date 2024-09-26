document.querySelectorAll("[data-modal]").forEach(function(callModalElement){
    callModalElement.addEventListener("click",function(){
        const modalElement = document.querySelector(callModalElement.getAttribute("data-modal"));
        if(modalElement !== null){
            modalElement.classList.toggle("open");
            modalElement.querySelector(".close-btn")?.addEventListener("click",function(){
                modalElement.classList.remove("open");
            })
        }
        
    });
});