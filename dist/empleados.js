$(document).ready(function(){
    $("#guardar").click(function(){
        let formDatos = $("#FormEmpleados").serializeArray();
        let nombre = formDatos[0].value;
        let fecha = formDatos[1].value;
        let puesto = formDatos[2].value;
        let salario = formDatos[3].value;
        console.log("Nombre:", nombre);
        console.log("Fecha:", fecha);
        console.log("Puesto:", puesto);
        console.log("Salario:", salario);
        // a este punto los datos del form ya estan en las varibles del array.

        $("#tableEmpleados tbody").append("<tr><td>" + nombre + "</td><td>" + fecha + "</td><td>" + puesto + "</td><td>" + salario + "</td></tr>");
        
        // a este punto se coloca una fila con append() en el html con los datos de los let.
    });

    $("#primeroElim").click(function(){
        $("#tableEmpleados tbody tr:first").remove();
    });
    $("#ultimoElim").click(function(){
        $("#tableEmpleados tbody tr:last").remove();
    });



    //   pagina - sueldos

    $("#obtenerLiquido").click(function(){
        let formDatos2 = $("#FormEmpleados2").serializeArray();
        let salario2 = parseFloat(formDatos2[0].value); // el valor sera string a menos que uses parseFloat(), el anterior funciono bien porque solo imprimias los datos, no los operabas
        let bono2 = parseFloat(formDatos2[1].value);    
        let comisiones2 = parseFloat(formDatos2[2].value);

        let formDatos3 = $("#FormEmpleados3").serializeArray();
        let ahorro = parseFloat(formDatos3[0].value); // el valor sera string a menos que uses parseFloat(), el anterior funciono bien porque solo imprimias los datos, no los operabas
        let igss = parseFloat(salario2 * (4.83 / 100));  // en este es necesario ingresar salario antes
        let prestamos = parseFloat(formDatos3[1].value);

        console.log("Nombre:", ahorro);
        console.log("Fecha:", igss);
        console.log("Puesto:", prestamos);
        // a este punto los datos del form ya estan en las varibles del array.
        let sumaGanado = salario2 + bono2 + comisiones2;
        let sumaDescuento = ahorro + igss + prestamos;
        let sueldoLiquido = sumaGanado - sumaDescuento
        
        $("#igss3").append(igss);
        // se opera la suma y se muestra
        $("#verGanado").append("<br>El total ganado es: " + "Q " + sumaGanado);
        $("#verDescuentos").append("<br>El total de descuento es: " + "Q " + sumaDescuento);
        $("#verLiquido").append("<br>El total de sueldo líquido es: " + "Q " + sueldoLiquido);
    });


    // pagina - Indemnización

    $("#obtenerIndemnizacion").click(function(){
        let formDatos3 = $("#FormIndemnizacion").serializeArray();
        let sueldo = parseFloat(formDatos3[0].value);
        let años = parseFloat(formDatos3[1].value);
        let bono14 = parseFloat((sueldo / 12) * (años / 12)); // Bono 14 proporcional (sueldo base / 12 * cantidad de meses trabajados)
        let aguinaldo = parseFloat((sueldo /12) * (años / 12)); //Aguinaldo proporcional (sueldo base / 12 * cantidad de meses trabajados)
        let salarioPendiente = parseFloat(formDatos3[2].value);
        let deudas = parseFloat(formDatos3[3].value);


        let calIndemnizacion = ((sueldo * años) + bono14 + aguinaldo + salarioPendiente) - deudas;

        $("#bono14").append(bono14);
        $("#aguinaldo").append(aguinaldo);
        $("#verIndemnizacion").append("La Indemnización es de: Q " +  calIndemnizacion);

    })


})