import { useRef, useState } from 'react'
import './App.css'

function App() {
    const refInputFile = useRef();
    const [conteudo, setConteudo] = useState("")
    
    const handleFileSubmit = (refInputFile) => {

        const file = refInputFile.files[0];
        console.log("dados do arquivo", file.type);
        
        if (file && file.type === "text/plan") {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                console.log(e.target.result);
                setConteudo(e.target.result);
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
            <input type="file" name="file" id="file" ref={refInputFile}/>
            <input type="button" value="Enviar" onClick={() => handleFileSubmit(refInputFile.current)} />
            <p>{conteudo}</p>
        </>
    )
}

export default App
