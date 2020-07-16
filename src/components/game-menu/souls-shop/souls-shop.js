import React, {Component} from 'react';
import SoulCard from './soul-card';

import helpingHand from '../../../img/heroes/helpingHand.png';

import './souls-shop.scss';

export default class SoulsShop extends Component {

    handleBuyClick = (cost, dpc, dps) => {
        this.props.onHandleBuyClick(cost, dpc, dps);
    }

    render(){
        return (
            <div>
                <div className = 'souls-shop'>
                <SoulCard
                        title='Hoteroskul'
                        soulSkill = '+1% DPC'
                        soulImg = {helpingHand}
                        onHandleBuyClick={this.handleBuyClick}/>
                <SoulCard
                        title='Hoteroskul'
                        soulSkill = '+1% DPC'
                        soulImg = {helpingHand}
                        onHandleBuyClick={this.handleBuyClick}/>
                </div>
            </div>
        )
    }
}
