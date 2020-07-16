import React, {Component} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import NavMenu from '../nav-menu';
import GameMenu from '../game-menu';
import BattleField from '../battle-field';


import './app.scss'

export default class App extends Component {
    state = {
        bells: 0,
        dps: 0,
        dpc: 1
    }

    onMonsterDie = (enemyMaxHealth, multipler) => {
        this.setState({
            bells: this.state.bells + Math.ceil(enemyMaxHealth / multipler)
        })
    }

    onHandleBuyClick = (cost, dpc, dps, startDpc, startDps) => {
        this.setState({
            bells: Math.ceil(this.state.bells - cost),
            dpc: Math.ceil(this.state.dpc + startDpc),
            dps: Math.ceil(this.state.dps + startDps)
        })
    }

    render(){
        const {bells, dps, dpc} = this.state;

        return (
            <Router>
                <div className='app'>
                    <NavMenu
                        dpc={dpc}
                        dps={dps}/>
                    <div className='game-area'>
                        <GameMenu
                            bells={bells}
                            onHandleBuyClick={this.onHandleBuyClick}/>
                        <BattleField
                            bells={bells}
                            dps={dps}
                            dpc={dpc}
                            onMonsterDie={this.onMonsterDie}/>
                    </div>
                </div>
            </Router>
        )
    }
}
