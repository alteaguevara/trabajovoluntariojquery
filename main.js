var jugador2;
//TODAS LAS CASILLAS EMPIEZAN VACÍAS
var estadoCasillas = ["VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO"];

$(document).ready(function () {
    $("img").attr("src", "amarillo.png")
    $("img").attr("height", "150px")
    $("img").attr("width", "150px")
    jugador2 = false;
    //BOTON RETRY
    $("#boton").on("click", function () {
        $("img").attr("src", "amarillo.png")
        $("#jugador").text("Jugador 1")
        $("#jugador").css("color", "red")
        jugador2 = false;
        //VOLVEMOS A PONER TODAS LAS CASILLAS VACÍAS
        estadoCasillas = ["VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO", "VACIO"];
    });
});

/* ACTUALIZAR TURNO */
if (jugador2) {
    $("img").on("click", function () {
        jugador2 = !jugador2
    });
} else {
    $("img").on("click", function () {
        jugador2 = !jugador2
    });
}

/* ACTUALIZAR JUEGO*/
$("img").on("click", function () {
    var index = parseInt($(this).attr('id')) - 1;
    //SOLO SE PUEDE PONER UNA FICHA SI LA CASILLA ESTÁ VACÍA
    if (estadoCasillas[index] == "VACIO") {
        if (jugador2) {
            $(this).attr("src", "cruz.png")
            $("#jugador").text("Jugador 2")
            $("#jugador").css("color", "blue")
            //ACTUALIZAR ESTADO DE LA CASILLA
            estadoCasillas[index] = "O";
        } else {
            $(this).attr("src", "circulo.png")
            $("#jugador").text("Jugador 1")
            $("#jugador").css("color", "red")
            //ACTUALIZAR ESTADO DE LA CASILLA
            estadoCasillas[index] = "X";
        }
    }
});

//COMPROBAR TRES EN RAYA
setInterval(tresenraya, 10);

function tresenraya() {
    //COMPRUEBO CASO POR CASO SI GANAN LAS X

    //primera fila
    if (estadoCasillas[2] == "O" && estadoCasillas[1] == "O" && estadoCasillas[0] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //segunda fila

    if (estadoCasillas[3] == "O" && estadoCasillas[4] == "O" && estadoCasillas[5] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //tercera fila

    if (estadoCasillas[6] == "O" && estadoCasillas[7] == "O" && estadoCasillas[8] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //primera columna
    if (estadoCasillas[0] == "O" && estadoCasillas[3] == "O" && estadoCasillas[6] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //segunda columna
    if (estadoCasillas[1] == "O" && estadoCasillas[4] == "O" && estadoCasillas[7] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //tercera columna
    if (estadoCasillas[2] == "O" && estadoCasillas[5] == "O" && estadoCasillas[8] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //diagonal 1
    if (estadoCasillas[0] == "O" && estadoCasillas[4] == "O" && estadoCasillas[8] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //diagonal 2
    if (estadoCasillas[2] == "O" && estadoCasillas[4] == "O" && estadoCasillas[6] == "O") {
        alert("¡Ha ganado el Jugador 1! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //COMPRUEBO CASO POR CASO SI GANAN LAS O
    //primera fila
    if (estadoCasillas[2] == "X" && estadoCasillas[1] == "X" && estadoCasillas[0] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //segunda fila

    if (estadoCasillas[3] == "X" && estadoCasillas[4] == "X" && estadoCasillas[5] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //tercera fila

    if (estadoCasillas[6] == "X" && estadoCasillas[7] == "X" && estadoCasillas[8] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //primera columna
    if (estadoCasillas[0] == "X" && estadoCasillas[3] == "X" && estadoCasillas[6] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //segunda columna
    if (estadoCasillas[1] == "X" && estadoCasillas[4] == "X" && estadoCasillas[7] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //tercera columna
    if (estadoCasillas[2] == "X" && estadoCasillas[5] == "X" && estadoCasillas[8] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //diagonal 1
    if (estadoCasillas[0] == "X" && estadoCasillas[4] == "X" && estadoCasillas[8] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

    //diagonal 2
    if (estadoCasillas[2] == "X" && estadoCasillas[4] == "X" && estadoCasillas[6] == "X") {
        alert("¡Ha ganado el Jugador 2! Haz click en Volver a Jugar para continuar");
        estadoCasillas = ["BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK", "BLOCK"];
    }

}