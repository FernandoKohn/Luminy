export const getMonth = (month: number) => {
    if (month === 0) {
        return "01";
    }
    else if (month === 1) {
        return "02";
    }
    else if (month === 2) {
        return "03";
    }
    else if (month === 3) {
        return "04";
    }
    else if (month === 4) {
        return "05";
    }
    else if (month === 5) {
        return "06";
    }
    else if (month === 6) {
        return "07"
    }
    else if (month === 7) {
        return "08"
    }
    else if (month === 8) {
        return "09"
    }
    else if (month === 9) {
        return "10"
    }
    else if (month === 10) {
        return "11"
    }
    else if (month === 11) {
        return "12"
    }
}

export const getDay = (day: number) => {
    if (day === 1) {
        return "Segunda";
    }
    else if (day === 2) {
        return "Terça";
    }
    else if (day === 3) {
        return "Quarta";
    }
    else if (day === 4) {
        return "Quinta";
    }
    else if (day === 5) {
        return "Sexta";
    }
    else if (day === 6) {
        return "Sabado";
    }
    else {
        return "Domingo";
    }
}