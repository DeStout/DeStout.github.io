document.getElementById("homePanel").classList.add("visible");

var blades = document.getElementsByClassName("blade");
var panels = document.getElementsByClassName("panel");

for(let blade of blades) {
    blade.addEventListener("click", function() {
        
        for(let panel of panels) {
            panel.classList.remove("visible");
        }
        var panel = this.nextElementSibling;
        panel.classList.add("visible");
    });
}