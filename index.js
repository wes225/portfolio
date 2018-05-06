window.onload = function () {
    //Adding event listeners to all portfolio elements
    let portfolioWebsites = document.getElementsByClassName('overlay');
    let overlays = document.getElementsByClassName('hoverDisplay');
    for (let i = 0; i < portfolioWebsites.length; i++) {

        // Handles hover events
        portfolioWebsites[i]
            .addEventListener("mouseenter", function () {
                
                overlays[i]
                    .classList
                    .add('iconCentered');
            });

        // Handles end of hover effects
        portfolioWebsites[i].addEventListener("mouseleave", function () {
            overlays[i]
                .classList
                .remove('iconCentered');
        })

    }

}
