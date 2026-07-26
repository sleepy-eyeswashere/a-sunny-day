function openLetter() {

    const intro = document.getElementById("intro");
    const loading = document.getElementById("loading");
    const letter = document.getElementById("letter");

    intro.style.display = "none";

    loading.style.display = "flex";

    const stars = document.querySelectorAll(".stars span");

    stars.forEach(star => {
        star.style.animation = "none";
        star.offsetWidth;
        star.style.animation = "";
    });

    setTimeout(() => {

        loading.style.display = "none";

        letter.style.display = "block";

        setTimeout(() => {
            letter.classList.add("show");
        }, 50);

    }, 3000);

}



function goBack() {

    const intro = document.getElementById("intro");
    const letter = document.getElementById("letter");

    letter.classList.remove("show");

    setTimeout(() => {

        letter.style.display = "none";

        intro.style.display = "block";

    }, 800);

}
