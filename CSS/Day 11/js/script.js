window.onload = function(){ 
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".btn-close");

    const images = document.querySelectorAll(".gallery img");

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    images.forEach((image) => {
        image.addEventListener("click", function(e){
            modal.style.display = "block";
            const url = this.src;
            const name = this.getAttribute("alt");
            modal.querySelector("img").setAttribute("src", url);
            modal.querySelector("h2").textContent = name.toUpperCase();
        });
    });
};
