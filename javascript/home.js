const featuredLink = document.querySelector('a[href="#featured"]');
const featuredSection = document.querySelector("#featured");

if (featuredLink && featuredSection) {
    featuredLink.addEventListener("click", function (e) {
        e.preventDefault();

        const yOffset = -80;
        const yPosition = featuredSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: yPosition,
            behavior: "smooth"
        });
    });
}