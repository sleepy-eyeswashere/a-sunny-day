function openLetter(){

    document.querySelector(".intro").style.display="none";


    let loading=document.getElementById("loading");

    loading.style.display="flex";


    setTimeout(function(){


        loading.style.opacity="0";


        setTimeout(function(){

            loading.style.display="none";


            document
            .getElementById("letter")
            .classList.add("show");


        },800);


    },4000);

}

function goBack(){

    document
    .getElementById("letter")
    .classList.remove("show");


    setTimeout(()=>{

        document.querySelector(".intro").style.display="block";

    },800);

}
