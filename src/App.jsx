import { useState } from 'react'
import './App.css'

function App() {
    const leitorArquivo = (file) => {
        const [conteudo, setConteudo] = useState(null)
    }
    return (
        <>
            <label htmlFor="file">Importar arquivo txt</label>
            <input type="file" name="file" id="file" />
        </>
    )
}

export default App
