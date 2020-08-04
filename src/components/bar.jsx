import React, { Component } from 'react'
import './styles.css'



class Barra extends Component {


    render() {

        const { valuePercentageINSS, valuePercentageIRPF, valuePercentageSalary } = this.props;




        return (




            <div>
                <div style={{ display: "flex", width: `${valuePercentageIRPF || 10}%`, backgroundColor: "red" }}><p1>IRPF</p1></div>
                <div style={{ display: "flex", width: `${valuePercentageINSS || 10}%`, backgroundColor: "blue" }}><p1>INSS</p1></div>
                <div style={{ display: "flex", width: `${valuePercentageSalary || 10}%`, backgroundColor: "green" }}><p1>Salário</p1></div>
            </div>



        )
    }
}

export default Barra;