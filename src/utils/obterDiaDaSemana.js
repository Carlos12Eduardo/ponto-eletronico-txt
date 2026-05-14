function obterDiaDaSemana(diaString) {
    const [dia, mes, ano] = diaString.split("/");
    const data = new Date(ano, mes - 1, dia);
    const diasSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];
    return diasSemana[data.getDay()];
}

export default obterDiaDaSemana;