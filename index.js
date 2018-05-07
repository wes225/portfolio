window.onload = function () {
    //Adding event listeners to all portfolio elements
    let portfolioWebsites = document.getElementsByClassName('overlay');
    let overlays = document.getElementsByClassName('hoverDisplay');

    // Mobile support for hover effect will be implemented at a later date. Function
    // checks if mobile, and if so, eventlisteners will not be implemented.
    var isMobile = {
        Android: function () {
            return navigator
                .userAgent
                .match(/Android/i);
        },
        BlackBerry: function () {
            return navigator
                .userAgent
                .match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator
                .userAgent
                .match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator
                .userAgent
                .match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator
                .userAgent
                .match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    for (let i = 0; i < portfolioWebsites.length; i++) {

        if (!isMobile.any()) {

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

}
