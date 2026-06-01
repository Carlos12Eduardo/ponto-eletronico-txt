import { useRef, useState } from 'react'
import './styles/variables.css'
import './App.css'
import ListaFuncionarios from './components/ListaFuncionarios';
import PontoFuncionario from './components/PontoFuncionario'
import converterArquivoPontoTxtParaJson from './helpers/converterArquivoPontoTxtParaJson';

function App() {
    const [inputFile, setInputFile] = useState(null);
    const [conteudo, setConteudo] = useState({ "funcionarios": [] });
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState("");

    const handleFileSubmit = async (inputFile) => {
        try {
            const response = await converterArquivoPontoTxtParaJson(inputFile);
            if (response) {
                setConteudo(response);
                alert('Arquivo enviado com sucesso!');
            }
        } catch (error) {
            alert(`ocorreu um erro ao tentar ler o arquivo txt. ${error}`);
        }
    }

    return (
        <div className="container">
            <header>
                <a href="#">
                    <img src="./src/assets/images/more.png" width="20px" height="20px" />
                </a>
                <h2>Ponto Eletrônico</h2>
                <a href="#"> alterar tema</a>
            </header>
            <aside>
                <div className="input-field">
                    <label htmlFor="file">Importar arquivo txt</label>
                    <input type="file" name="file" id="file" onChange={(e) => setInputFile(e.target.files[0])} />
                    <input type="button" value="Enviar" onClick={() => handleFileSubmit(inputFile)} />
                </div>
                <div className="input-field">
                    <ListaFuncionarios
                        funcionarios={conteudo.funcionarios}
                        funcionarioSelecionado={funcionarioSelecionado}
                        setFuncionarioSelecionado={setFuncionarioSelecionado}
                    />
                </div>
                <div className="input-field">
                    <a href="#" onClick={() => alert("Ainda em desenvolvimento")}>Exportar CSV</a>
                </div>
            </aside>
            <main>
                <h3>Tabela de pontos registrados</h3>
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
