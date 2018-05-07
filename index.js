window.onload = function () {
    //Adding event listeners to all portfolio elements
    let portfolioWebsites = document.getElementsByClassName('overlay');
    let overlays = document.getElementsByClassName('hoverDisplay');

    for (let i = 0; i < portfolioWebsites.length; i++) {

        

            // Handles start of hover/touch events
            portfolioWebsites[i]
                .addEventListener("mouseenter", function () {

                    overlays[i]
                        .classList
                        .add('iconCentered');
                });

                portfolioWebsites[i]
                .addEventListener("touchstart", function () {

                    overlays[i]
                        .classList
                        .add('iconCentered');
                });

            // Handles end of hover and touch events
            portfolioWebsites[i].addEventListener("mouseleave", function () {
                overlays[i]
                    .classList
                    .remove('iconCentered');
            })
            portfolioWebsites[i].addEventListener("touchend", function () {
                overlays[i]
                    .classList
                    .remove('iconCentered');
            })
        
    }

}
