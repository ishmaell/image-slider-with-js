const carouselSlider = function(carouselId) {
    let carousel = document.getElementById(`${carouselId}`);
    let images = document.querySelectorAll(`#${carouselId} img`);
    let carouselWidth = images.length * 960;
    
    carousel.style.width = `${carouselWidth}px`;
    carousel.style.left = "0px";
    
    let ctrlArrows = Array.from(document.getElementsByClassName("ctrl-arrows"));
    
    ctrlArrows.forEach(arrow => {
        if(arrow.id == "left-arrow") arrow.classList.add("disabled");
        arrow.addEventListener("click", function(){
            
            let currentCarouselLeft = parseInt(carousel.style.left);
            
            if(this.id == "left-arrow") {
                if(currentCarouselLeft != 0) {
                    carousel.style.left = parseInt(currentCarouselLeft + 960) + 'px';
                    if(this.nextElementSibling.classList.contains("disabled")) {
                        this.nextElementSibling.classList.remove("disabled");
                    }
                }
                if(carousel.style.left == "0px") {
                    this.classList.add("disabled");
                }
                
            } else {
                if(currentCarouselLeft > -parseInt((images.length-1) * 960)) {
                    carousel.style.left = parseInt(-960+currentCarouselLeft) + 'px';
                    if(this.previousElementSibling.classList.contains("disabled")) {
                        this.previousElementSibling.classList.remove("disabled");
                    }
                } 
                if(parseInt(currentCarouselLeft) + parseInt((images.length-1) * 960) == 960)  {
                    this.classList.add("disabled");
                } 
            }
        });
    });
    
}

