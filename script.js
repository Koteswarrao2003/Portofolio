window.onload = function () {
    const roles = [
        "Java Developer",
        "Web Developer",
        "Retriever",
        "Programmer",
        "Entry-level IoT Developer",
        "Entry-level Cloud Developer",
        "MCA Student at ACET"
    ];

    const textElement = document.getElementById("animated-text");
    let index = 0;

    function rotateText() {
        textElement.style.opacity = 0;

        setTimeout(() => {
            textElement.textContent = roles[index];
            textElement.style.opacity = 1;
            index = (index + 1) % roles.length;
        }, 500);
    }

    rotateText(); // initial call
    setInterval(rotateText, 2000); // change every 2 seconds
};