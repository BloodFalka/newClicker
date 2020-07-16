import React, {Component} from 'react';

import './achievments.scss';

import AchievmentCard from './achievment-card';
import bells from '../../../img/valutes/bells.png';
import stars from '../../../img/valutes/stars.png';
import opium from '../../../img/valutes/opium.png';

export default class Achievments extends Component {

    render(){
        return (
            <div>
                <div className ='achievments'>
                    <AchievmentCard
                        title='Kill 10 monsters'
                        achievmentGift = '+1% DPC'
                        achievmentImg = {bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <AchievmentCard
                        title='Earn 100 bells'
                        achievmentGift = '+5% bells/kill'
                        achievmentImg = {bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <AchievmentCard
                        title='Earn 1 opium'
                        achievmentGift = '+1% critical chance'
                        achievmentImg = {opium}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <AchievmentCard
                        title='Earn 10 stars'
                        achievmentGift = '+2% DPS'
                        achievmentImg = {stars}
                        onHandleBuyClick={this.handleBuyClick}/>
                </div>
            </div>
        )
    }
}
