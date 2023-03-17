// document.getElementById("caja").addEventListener("click", function() {
//     document.getElementById("caja").style.display = "none";
//     document.getElementById("mensaje").style.display = "block";
// });

let tapa = document.getElementById("tapa");
let regalo = document.getElementById("regalo");
let mandarina = document.getElementById("mandarina");
let mensaje = document.getElementById("mensaje");
tapa.addEventListener("click", function() {
    tapa.classList.add("animation-tapa");
    regalo.classList.add("animation-regalo");
    mandarina.classList.add("animation-mandarina");

    setTimeout(function() {
        mensaje.classList.add("texto")
    }, 500);

    setTimeout(function() {
        tapa.classList.add("achicar-arriba");
        regalo.classList.add("achicar-abajo");
    }, 2000);
});

regalo.addEventListener("click", function() {
    tapa.classList.add("animation-tapa");
    regalo.classList.add("animation-regalo");
    mandarina.classList.add("animation-mandarina");

    setTimeout(function() {
        mensaje.classList.add("texto")
    }, 500);

    setTimeout(function() {
        tapa.classList.add("achicar-arriba");
        regalo.classList.add("achicar-abajo");
    }, 2000);
});

//sonido
document.getElementById("regalo").addEventListener("click", function() {
	document.getElementById("sonidito").play();
});

document.getElementById("tapa").addEventListener("click", function() {
	document.getElementById("sonidito").play();
});