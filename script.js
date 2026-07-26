function openLetter(){

    document.querySelector(".intro").style.display="none";

    let loading = document.getElementById("loading");

    loading.style.display="flex";


    setTimeout(function(){

        loading.style.display="none";

        document
        .getElementById("letter")
        .classList.add("show");


        document
        .getElementById("decorations")
        .classList.add("show");


    },3500);

}
