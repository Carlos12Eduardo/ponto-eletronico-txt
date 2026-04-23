import { useRef, useState } from 'react'
import './App.css'

function App() {
    const refInputFile = useRef();
    const [conteudo, setConteudo] = useState("")
    const registros = [];


    const handleFileSubmit = (refInputFile) => {

        const file = refInputFile.files[0];
        // console.log("dados do arquivo", file.type);
        // console.log(file.type == "text/plan")
        if (file && file.type == "text/plain") {
            const reader = new FileReader();

            reader.onload = (e) => {
                const linhas = e.target.result.split("\n");
                // console.log(linhas[1])
                // setConteudo(e.target.result);
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
        <>
            <label htmlFor="file">Importar arquivo txt</label>
            <input type="file" name="file" id="file" ref={refInputFile} />
            <input type="button" value="Enviar" onClick={() => handleFileSubmit(refInputFile.current)} />
            <p>{conteudo}</p>
        </>
    )
}

export default App
