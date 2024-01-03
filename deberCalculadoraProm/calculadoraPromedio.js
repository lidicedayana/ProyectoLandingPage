{
    let nomAlumno = prompt("Ingrese nombre del alumno: ");
    let materia = prompt("Ingrese la materia: ");
    let nota1 = parseFloat(prompt("Ingrese primera nota: "));
    let nota2 = parseFloat(prompt("Ingrese segunda nota: "));
    let nota3 = parseFloat(prompt("Ingrese tercera nota: "));
    let prom;
    
    if (nota1 > 0 && nota1 <= 10 && nota2 > 0 && nota2 <= 10 && nota3 > 0 && nota3 <= 10) {
        prom = (nota1 + nota2 + nota3) / 3;
        
        if (prom >= 7) {
            console.log(nomAlumno + ", ¡felicidades! Has aprobado con un promedio de " + prom);
        } else {
            console.log(nomAlumno + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + prom);
        }
    } else {
        console.log("Error: ingresaste mal las notas, vuelve a intentarlo");
    }
}
