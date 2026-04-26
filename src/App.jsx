import { useRef, useState } from 'react'
import './App.css'

function App() {
    const refInputFile = useRef();
    const [conteudo, setConteudo] = useState("")
    const registros = [];


    const handleFileSubmit = (refInputFile) => {

        const file = refInputFile.files[0];
        if (file && file.type == "text/plain") {
            const reader = new FileReader();

            reader.onload = (e) => {
                const linhas = e.target.result.split("\n");
                linhas.map(linha => {
                    const dia = linha.slice(10, 18);
                    const registro = {
                        id: linha.slice(0, 10),
                        dia: dia,
                        hora: linha.slice(18, 20) + ":" + linha.slice(20, 22),
                        nis: linha.slice(22, 34)
                    }
                    registros.push(registro);
                });
                console.log(registros[0]);
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
                <input type="file" name="file" id="file" ref={refInputFile} />
                <input type="button" value="Enviar" onClick={() => handleFileSubmit(refInputFile.current)} />
                <select name="matricula-funcionario" id="matricula-funcionario">
                    <option value="">Selecione uma matricula</option>
                    <option value="teste1">teste1</option>
                    <option value="teste2">teste2</option>
                    <option value="teste3">teste3</option>
                </select>
                <a href="">Exportar CSV</a>
            </aside>
            <main>
                <p>{conteudo}</p>
            </main>
            <footer>
                Conteúdo footer vai aqui
            </footer>
        </div>
    )
}

export default App
