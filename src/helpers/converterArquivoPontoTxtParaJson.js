function converterArquivoPontoTxtParaJson(inputFile) {
    const dados = {
        "funcionarios": []
    }
    const file = inputFile;
    if (file && file.type == "text/plain") {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const linhas = e.target.result.split("\n");
                linhas.map(linha => {
                    const registro = {
                        id: linha.slice(0, 10),
                        dia: linha.slice(10, 12) + "/" + linha.slice(12, 14) + "/" + linha.slice(14, 18),
                        hora: linha.slice(18, 20) + ":" + linha.slice(20, 22),
                        matricula: linha.slice(22, 34)
                    }
                    const [funcionario] = dados.funcionarios.filter(funcionario => funcionario.matricula == registro.matricula);
                    if (!funcionario) {
                        dados.funcionarios.push(
                            {
                                "matricula": registro.matricula,
                                "pontos": {
                                    "dias": [
                                        {
                                            "dia": registro.dia,
                                            "horarios": [
                                                {
                                                    "id": registro.id,
                                                    "hora": registro.hora
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        );
                    } else {
                        const [dia] = funcionario.pontos.dias.filter(data => data.dia === registro.dia);
                        if (!dia) {
                            funcionario.pontos.dias.push(
                                {
                                    "dia": registro.dia,
                                    "horarios": [
                                        {
                                            "id": registro.id,
                                            "hora": registro.hora
                                        }
                                    ]
                                }
                            );
                        } else {
                            dia.horarios.push(
                                {
                                    "id": registro.id,
                                    "hora": registro.hora
                                }
                            );
                        }
                    }
                });
                resolve(dados);
            }
            reader.readAsText(file);

        });
    }

    else {
        alert("Nenhum arquivo .txt selecionado");
    }
}

export default converterArquivoPontoTxtParaJson;