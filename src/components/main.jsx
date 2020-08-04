import React, { Component } from 'react'
import './styles.css'
import { calculateSalaryFrom } from './salary.js'
import Barra from './bar';


class Main extends Component {


    state = {
        salarioBruto: 0,
    };


    changeSalario = (event) => {
        this.setState({
            salarioBruto: event.target.value
        })
    }


    render() {

        const { salarioBruto } = this.state

        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary, valuePercentageINSS, valuePercentageIRPF, valuePercentageSalary } = calculateSalaryFrom(salarioBruto);




        return (
            <>
                <div className="titulo">
                    <h2>React Salário</h2>
                </div>



                <div className="salario">
                    <p>Salário Bruto:</p>
                    <input type="number" value={salarioBruto} onChange={this.changeSalario} />
                </div>

                <div className="salario2">


                    <div className="base">
                        <p>Base INSS</p>
                        <input type="text" value={baseINSS} className="basein" />
                    </div>

                    <div className="base">
                        <p>Desconto INSS </p>
                        <input type="text" value={discountINSS + ` (${valuePercentageINSS || 0}%)`} className="discINSS" />
                    </div>

                    <div className="base">
                        <p>Base IRPF </p>
                        <input type="text" value={baseIRPF} className="basein" />
                    </div>

                    <div className="base">
                        <p>Desconto IRPF</p>
                        <input type="text" value={discountIRPF + `  (${valuePercentageIRPF || 0}%)`} className="discIRPF" />
                    </div>



                </div>

                <div className="salariol">
                    <p>Salário Liquido:</p>
                    <input type="text" value={netSalary + ` (${valuePercentageSalary || 0}%)`} className="netSalary" />
                </div>

                <Barra valuePercentageINSS={valuePercentageINSS} valuePercentageIRPF={valuePercentageIRPF} valuePercentageSalary={valuePercentageSalary} />



            </>
        )
    }
}

export default Main;