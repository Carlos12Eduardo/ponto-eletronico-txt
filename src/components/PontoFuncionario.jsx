import './PontoFuncionario.css'

const PontoFuncionario = ({pontos}) => {
    return (
        <div className="tabela-de-pontos">
        <table>
            <thead>
                <tr>
                    <th>dia</th>
                    <th>dia da semana</th>
                    <th>entrada 1</th>
                    <th>saida 1</th>
                    <th>entrada 2</th>
                    <th>saída 2</th>
                </tr>
            </thead>
            <tbody>
                {
                    pontos.dias.map(ponto=>{
                        return(
                            <tr key={ponto.dia}>
                                <th>{ponto.dia}</th>
                                {/* <th>{ponto.diaDaSemana}</th> */}
                                {
                                    ponto.horarios.map(horario => {
                                        return(
                                            <th key={horario.id}>{horario.hora}</th>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    );
}

export default PontoFuncionario;