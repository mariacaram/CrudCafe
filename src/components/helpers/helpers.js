const campoRequerido = (valor) => {
    if (valor.trim().length >0) {
        return true;
    } else {
        return false
    }
};

const rangoNumero = (valor) => {
    if (valor > 0 && valor < 5000) return true;
    else return false;
}

export {campoRequerido, rangoNumero}