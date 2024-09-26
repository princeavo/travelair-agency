document.querySelectorAll("header #navigation nav .dropdown-nav-link i.fa-plus").forEach(function(iconPlus){
    iconPlus.addEventListener("click",function(){
        iconPlus.style.display="none";
        const li = iconPlus.parentNode;
        if(li !== null){
            li.querySelector("i.fa-minus").style.display = "inline-block";
            li.classList.add("open");
        }
        // if(li.classList.contains("open")){
        //     icon.innerHTML = "<i class='fa fa-minus'></i>";
        //     li.classList.remove("open")
        // }else{
        //     icon.innerHTML = "<i class='fa fa-plus'></i>";
        //     li.classList.add("open")
        // }
    });
});
document.querySelectorAll("header #navigation nav .dropdown-nav-link i.fa-minus").forEach(function(iconMinus){
    iconMinus.addEventListener("click",function(){
        iconMinus.style.display="none";
        const li = iconMinus.parentNode;
        if(li !== null){
            li.querySelector("i.fa-plus").style.display = "inline-block";
            li.classList.remove("open");
        }
    });
});