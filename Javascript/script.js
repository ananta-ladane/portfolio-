// $("#faded").click(function () {
//     $("#ul").slideUp()
// })

// $("#cl").click(function () {
//     $("#ul").slideDown()
// })

AOS.init();

let card = document.querySelector(".card");



card.addEventListener("mousemove", (e) => {
    let rect = card.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let rotateX = (y - centerY) / 10;
    let rotateY = (centerX - x) / 10;

    card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
});


let card2 = document.querySelector(".di1-sect5");


// card2.addEventListener("mousemove", (e) => {
//     let rect = card2.getBoundingClientRect();

//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;

//     let centerX = rect.width / 2;
//     let centerY = rect.height / 2;

//     let rotateX = (y - centerY) / 10;
//     let rotateY = (centerX - x) / 10;

//     card2.style.transform = `
//         rotateX(${rotateX}deg)
//         rotateY(${rotateY}deg)
//       `;
// });

// card2.addEventListener("mouseleave", () => {
//     card.style.transform = "rotateX(0) rotateY(0)";
// });


// const glow = document.querySelector(".cursor-glow");

// document.addEventListener("mousemove", (e) => {
//     glow.style.left = e.clientX + "px";
//     glow.style.top = e.clientY + "px";
// });




// const glow = document.querySelector(".cursor-glow");
// let mouseX = 0;
// let mouseY = 0;

// document.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function animate() {
//     glow.style.transform =
//         `translate(${mouseX - 250}px, ${mouseY - 250}px)`;

//     requestAnimationFrame(animate);
// }


// animate();


// const glow = document.querySelector(".cursor-glow");

// document.addEventListener("mousemove", (e) => {
//     glow.style.left = `${e.clientX}px`;
//     glow.style.top = `${e.clientY}px`;
// });


const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glow.style.transform =
        `translate3d(${mouseX - 225}px, ${mouseY - 225}px, 0)`;

    requestAnimationFrame(animateGlow);
}

animateGlow();




const list = document.querySelector("#list");
const obtn = document.querySelector("#openbtn");
const cbtn = document.querySelector("#closebtn");

obtn.addEventListener("click", () => {
    list.classList.add("active");
});

cbtn.addEventListener("click", () => {
    list.classList.remove("active")
});


(function () {
    emailjs.init({
        publicKey: "rtyVBJzC0nJabKuXn",
    });
})();


const sendMail = (e) => {

    e.preventDefault();

    let btn = document.getElementById("btn");
    btn.disabled = true;

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    }

    if (parms === "") {
        alert("plz fill the all detiles")
    } else {


        emailjs.send("service_d747lec", "template_nj0y0bc", parms).then((success) => {
            console.log(success)
            alert("Massege send successfully.")
        }).catch((error) => {
            console.log(error)
            alert("Message filed to send")
        })
    }
}