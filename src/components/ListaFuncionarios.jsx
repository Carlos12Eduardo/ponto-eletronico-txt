import { useEffect, useState } from "react";

const ListaFuncionarios = ({funcionarios, funcionarioSelecionado, setFuncionarioSelecionado }) => {
    const handleChange = (event) => {
        setFuncionarioSelecionado(event.target.value);
    }
    return (
        <>
            <label htmlFor="nome-funcionario">Funcionário: </label>
            <select name="nome-funcionario" id="nome-funcionario" value={funcionarioSelecionado} onChange={handleChange}>
                <option value="">Selecione uma matricula</option>
                {funcionarios.map(funcionario => {
                    return (
                        <option key={funcionario.matricula} value={funcionario.matricula}>
                            {funcionario.matricula}
                        </option>
                    )
                })}
            </select>
        </>
    )
}

export default ListaFuncionarios;