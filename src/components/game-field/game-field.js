import React, {Component} from 'react';

import HeroesShop from '../heroes-shop';
import Achievments from '../achievments';
import SoulsShop from '../souls-shop';
import BattleField from '../battle-field';

import {BrowserRouter as Router, Route} from 'react-router-dom';


import './game-field.scss'

export default class GameField extends Component {
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

    onHandleBuyClick = (cost, dpc, dps) => {
        this.setState({
            bells: Math.ceil(this.state.bells - cost),
            dpc: Math.ceil(dpc),
            dps: Math.ceil(this.state.dps + dps)
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
                        <Route path='/' exact render={(props)=> 
                            <HeroesShop {...props}
                                bells={bells}
                                onHandleBuyClick={this.onHandleBuyClick} {...props}/>}/>
                        <Route path='/achievments' render={(props)=> 
                            <Achievments {...props}
                                bells={bells}
                                onHandleBuyClick={this.onHandleBuyClick} {...props}/>}/>
                        <Route path='/souls-shop' render={(props)=> 
                            <SoulsShop {...props}
                                bells={bells}
                                onHandleBuyClick={this.onHandleBuyClick} {...props}/>}/>

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
