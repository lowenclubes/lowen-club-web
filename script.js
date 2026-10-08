/* =========================
   ELEMENTOS
========================= */

const mainImage =
    document.getElementById("mainImage");

const selectedColor =
    document.getElementById("selectedColor");

const selectedSize =
    document.getElementById("selectedSize");


const colorButtons =
    document.querySelectorAll(".color");

const thumbnails =
    document.querySelectorAll(".thumbnail");

const sizeButtons =
    document.querySelectorAll(".sizes button");


/* =========================
   CAMBIAR COLOR
========================= */

function changeColor(color, image) {

    mainImage.style.opacity = "0";


    setTimeout(() => {

        mainImage.src = image;

        mainImage.alt =
            "First Drop - Camiseta Básica Löwen Club - "
            + color;

        mainImage.style.opacity = "1";

    }, 150);


    selectedColor.textContent =
        color;


    colorButtons.forEach(button => {

        button.classList.remove("active");


        if (
            button.dataset.color === color
        ) {

            button.classList.add("active");

        }

    });


    thumbnails.forEach(thumbnail => {

        thumbnail.classList.remove("active");


        if (
            thumbnail.dataset.color === color
        ) {

            thumbnail.classList.add("active");

        }

    });

}


/* =========================
   BOTONES DE COLOR
========================= */

colorButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            changeColor(
                button.dataset.color,
                button.dataset.image
            );

        }
    );

});


/* =========================
   MINIATURAS
========================= */

thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener(
        "click",
        () => {

            changeColor(
                thumbnail.dataset.color,
                thumbnail.dataset.image
            );

        }
    );

});


/* =========================
   TALLAS
========================= */

sizeButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            sizeButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            selectedSize.textContent =
                button.dataset.size;

        }
    );

});