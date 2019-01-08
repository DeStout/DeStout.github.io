var blades = document.getElementsByClassName("blade");
var panels = document.getElementsByClassName("panel");

for(let blade of blades) {
    blade.addEventListener("click", function() {

        this.parentElement.style.float = "left";
        
        for(let panel of panels) {
            panel.classList.remove("visible");
        }
        this.nextElementSibling.classList.add("visible");
    });
}