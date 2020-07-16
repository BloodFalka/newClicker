import React, {Component} from 'react';

import {Animated} from "react-animated-css";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HeroesShop from './heroes-shop';
import SoulsShop from './souls-shop';
import Achievments from './achievments';

import './game-menu.scss';

export default class GameMenu extends Component {

    handleBuyClick = (cost, dpc, dps) => {
        this.props.onHandleBuyClick(cost, dpc, dps);
    }

    render(){
        return (
            <div className = 'game-menu'>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration='800'>
                <Route path='/clicker/' exact render={(props)=>
                    <HeroesShop {...props}
                        bells={this.props.bells}
                        onHandleBuyClick={this.props.onHandleBuyClick} {...props}/>}/>
                </Animated>

                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <Route path='/clicker/achievments' render={(props)=>
                    <Achievments {...props}
                        bells={this.props.bells}
                        onHandleBuyClick={this.props.onHandleBuyClick} {...props}/>}/>
                </Animated>

                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <Route path='/clicker/souls-shop' render={(props)=>
                    <SoulsShop {...props}
                        bells={this.props.bells}
                        onHandleBuyClick={this.props.onHandleBuyClick} {...props}/>}/>
                </Animated>
            </div>
        )
    }
}
