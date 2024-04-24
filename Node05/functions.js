
function getSeniales(input) {
    const signals = input.split('_').map(Number);
    return signals.filter(signal => signal >= 0 && signal < 360);
}


function determinarCuadrante(grado) {
    if (grado >= 0 && grado < 90) return 'N';
    else if (grado >= 90 && grado < 180) return 'E';
    else if (grado >= 180 && grado < 270) return 'S';
    else return 'O';
}


function calcularSecuenciaCuadrantes(seniales) {
    const cuadrantes = seniales.map(determinarCuadrante);
    return cuadrantes.join(' ');
}


function contarCiclosCompletos(secuencia) {
    const joinedSequence = secuencia.join('');
    const clockwiseCycles = (joinedSequence.match(/NESO|ESON|SONE|ONES/g) || []).length;
    const anticlockwiseCycles = (joinedSequence.match(/SENO|ENOS|NOSE|OSEN/g) || []).length;
    return clockwiseCycles + anticlockwiseCycles;
}

function calcularPorcentajeCuadrante(secuencia, cuadrante) {
    const totalCuadrantes = secuencia.length;
    const ocurrenciasCuadrante = secuencia.filter(c => c === cuadrante).length;
    return (ocurrenciasCuadrante / totalCuadrantes) * 100;
}
