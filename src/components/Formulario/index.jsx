import { useState } from "react"


const Formulario = () => {

    let [peso,setPeso] = useState(0);
    let [altura,setAltura] = useState(0);


    const calculaIMC = () => {
        const imc = peso / (altura*altura);

        if (isNaN(imc) || !isFinite(imc)){
            return(
                <p>Insira sua altura e peso.</p>
            )
        }
        else if (imc>40){
            return(
                <p>Seu IMC é {imc} e você está com Obesidade grau III.</p>
            )
        }else if(imc>35){
            return(
                <p>Seu IMC é {imc} e você está com Obesidade grau II.</p>
            )
        }else if(imc>30){
            return(
                <p>Seu IMC é {imc} e você está com Obesidade grau I.</p>
            )
        }else if(imc>25){
            return(
                <p>Seu IMC é {imc} e você está acima do peso.</p>
                )
        }else if(imc>18,5){
            return(
                <p>Seu IMC é {imc} e você está com peso normal.</p>
                )
        }else if(imc>17){
            return(
                <p>Seu IMC é {imc} e você está abaixo do peso.</p>
                )
        }else {
            return(
                <p>Seu IMC é {imc} e você está muito abaixo do peso.</p>
                )
        }
    }

    return(
        <form>
            <input type="number" placeholder="Peso em kg" onChange={evento => setPeso(evento.target.value)}/>
            <input type="number" placeholder="Altura em m" onChange={evento => setAltura(evento.target.value)}/>
            {calculaIMC()}
        </form>
    )
}

export default Formulario