function openLetter(){


    document
    .getElementById("intro")
    .style.display="none";



    let loading = document.getElementById("loading");


    loading.style.display="flex";

    loading.style.opacity="1";



    let stars = document.querySelectorAll(".stars span");



    stars.forEach(star => {

        star.style.animation="none";

        star.offsetHeight;

        star.style.animation=null;

    });





    setTimeout(function(){


        loading.style.opacity="0";



        setTimeout(function(){


            loading.style.display="none";



            let letter = document.getElementById("letter");

            letter.style.display="block";



            setTimeout(function(){


                letter.classList.add("show");


            },100);



        },800);



    },3000);



}





function goBack(){



    let letter = document.getElementById("letter");



    letter.classList.remove("show");



    setTimeout(function(){


        letter.style.display="none";


        document
        .getElementById("intro")
        .style.display="block";


    },1000);



}
