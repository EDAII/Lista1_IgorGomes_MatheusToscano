import React, { Component } from 'react'
import '../App.css'

let team = [
    {
        nome: 'Buffon',
        posicao: 'G',
        camisa: 1,
        selected: false
    },
    {
        nome: 'Neuer',
        posicao: 'G',
        camisa: 14,
        selected: false
    },
    {
        nome: 'Alisson',
        posicao: 'G',
        camisa: 16,
        selected: false
    },
    {
        nome: 'Pique',
        posicao: 'D',
        camisa: 2,
        selected: false
    },
    {
        nome: 'Sergio Ramos',
        posicao: 'D',
        camisa: 3,
        selected: false
    },
    {
        nome: 'Marcelo',
        posicao: 'D',
        camisa: 4,
        selected: false
    },
    {
        nome: 'Chiellini',
        posicao: 'D',
        camisa: 5,
        selected: false
    },
    {
        nome: 'Kroos',
        posicao: 'M',
        camisa: 6,
        selected: false
    },
    {
        nome: 'Modric',
        posicao: 'M',
        camisa: 14,
        selected: false
    },
    {
        nome: 'Ozil',
        posicao: 'M',
        camisa: 8,
        selected: false
    },
    {
        nome: 'Cristiano Ronaldo',
        posicao: 'A',
        camisa: 7,
        selected: false
    },
    {
        nome: 'Lionel Messi',
        posicao: 'A',
        camisa: 10,
        selected: false
    },
    {
        nome: 'Neymar',
        posicao: 'A',
        camisa: 11,
        selected: false
    },
    {
        nome: 'Mbappe',
        posicao: 'A',
        camisa: 20,
        selected: false
    },
    {
        nome: 'Lewandovski',
        posicao: 'A',
        camisa: 19,
        selected: false
    },
    {
        nome: 'Firmino',
        posicao: 'A',
        camisa: 18,
        selected: false
    },
    {
        nome: 'Salah',
        posicao: 'A',
        camisa: 35,
        selected: false
    },
    
];

let result = '';

export default class search extends Component {

    linear() {
        let n = team.length
        let a = []
        let k = String(prompt('Digite o nome do jogador que deseja encontrar: '))
        for (let i = 0; i < team.length; i++) {
            if (k === team[i].nome) {
                result = 'Jogador ' + team[i].nome + ' está na posição ' + i + ' com a camisa ' + team[i].camisa
                team[i].selected = true
                setTimeout( function(){
                    this.forceUpdate()
                    team[i].selected = false
                }.bind(this), 800 )
                break;
            } else if (i === (team.length - 1) && k !== team[i].nome) {
                result = 'Jogador não encontrado!'
                this.forceUpdate()
            }
        }
    }


    render() {
        return (
            <div className="container">
                <h1 className="titulo">EDAFOOT 98</h1>
                <div className="info_time">
                    <div className="info_time_1">
                        <div className="info_position">
                            <h3 className="infos_time">Vasco da Gama</h3>
                            <h3 className="infos"> Primeira divisão</h3>
                            <h3 className="infos">Dinheiro em caixa: R$ 2.000.000.00</h3>
                        </div>
                        <div className="plantel">
                            {team.map(player => {
                                return <li style={ !player.selected ? {} : {backgroundColor: '#a22'}}><span style={{marginRight: 20}}>{player.posicao}</span>{player.nome}</li>
                            })}
                        </div>
                    </div>
                    <div className="info_time_2">
                        <div className="cont_botoes">
                            <button className="botao" onClick={() => this.linear()}>Pesquisar</button>
                            <button className="botao" disabled>Vender</button>
                            <button className="botao" disabled>Multar</button>
                        </div>
                        <p className="resultado_busca">{result}</p>
                    </div>
                </div>
            </div>
        )
    }
}
