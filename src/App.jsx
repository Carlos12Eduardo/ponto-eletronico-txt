import { useRef, useState } from 'react'
import './App.css'
import ListaFuncionarios from './components/ListaFuncionarios';
import PontoFuncionario from './components/PontoFuncionario'

function App() {
    const [inputFile, setInputFile] = useState(null);
    const [conteudo, setConteudo] = useState({ "funcionarios": [] });
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState("");
    const dados = {
        "funcionarios": []
    }

    const handleFileSubmit = (inputFile) => {

        const file = inputFile;
        if (file && file.type == "text/plain") {
            const reader = new FileReader();

            reader.onload = (e) => {
                const linhas = e.target.result.split("\n");
                linhas.map(linha => {
                    const registro = {
                        id: linha.slice(0, 10),
                        dia: linha.slice(10, 18),
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
                setConteudo(dados);
            }
            reader.readAsText(file);
        }
        else {
            alert("Nenhum arquivo .txt selecionado");
        }
    }
    return (
        <div className="container">
            <header>Conteúdo do Header aqui</header>
            <aside>
                <label htmlFor="file">Importar arquivo txt</label>
                <input type="file" name="file" id="file" onChange={(e) => setInputFile(e.target.files[0])} />
                <input type="button" value="Enviar" onClick={() => handleFileSubmit(inputFile)} />
                <ListaFuncionarios
                    funcionarios={conteudo.funcionarios}
                    funcionarioSelecionado={funcionarioSelecionado}
                    setFuncionarioSelecionado={setFuncionarioSelecionado}
                />
                <a href="#" onClick={() => alert("Ainda em desenvolvimento")}>Exportar CSV</a>
            </aside>
            <main>
                {funcionarioSelecionado !== "" &&
                    <PontoFuncionario
                        pontos={
                            conteudo.funcionarios.find(funcionario => funcionario.matricula == funcionarioSelecionado).pontos
                        }
                    />
                }
            </main>
            <footer>
                Conteúdo footer vai aqui
            </footer>
        </div>
    )
}

export default App
