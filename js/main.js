(function() {
   
    /*
        module variables 
    */
    var myIndex = 0;
    var carouseDelay = 4500; // Change image every 3 seconds
    var carouselImages; // Variable zum speichern des Arrays, in dem alle Bilder abgelegt werden
    
    init();  // die gesammelten functionen von unten werden gestartet.
    
    /*
        functions 
    */
    function carousel() {
        for (var i = 0; i < carouselImages.length; i++) {
           carouselImages[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > carouselImages.length) {
            myIndex = 1;
        }
        carouselImages[myIndex-1].style.display = "block";
        setTimeout(carousel, carouseDelay);
    };
    
    function getCarouselImages() {
        carouselImages = document.getElementsByClassName("freesliedes"); // zum einmaligen laden aller Bilder aus der HTML Datei
    }
    
    function setupEvents() {    // für weiter Funktionen
        
    }
    
    function init() {   // hier werden alle funktionen gesammelt und gesammelt gestartet
        getCarouselImages();
        carousel();
        setupEvents();
    }
    
})();