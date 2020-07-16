import React, {Component} from 'react';

import HeroCard from './hero-card';

import helpingHand from '../../../img/heroes/helpingHand.png';
import stupidJulia from '../../../img/heroes/stupidJulia.png';
import girlTriangle from '../../../img/heroes/girlTriangle.png';
import rabbitNazar from '../../../img/heroes/rabbitNazar.png';
import rabbitNazarGuilded from '../../../img/heroes/rabbitNazar-guilded.png';
import ladyMarina from '../../../img/heroes/ladyMarina.png';
import flowerGirl from '../../../img/heroes/flowerGirl.png';

import './heroes-shop.scss';

export default class HeroesShop extends Component {

    handleBuyClick = (cost, dpc, dps, startDpc, startDps) => {
        this.props.onHandleBuyClick(cost, dpc, dps, startDpc, startDps);
    }

    render(){
        return (
            <div>
                <div className = 'heroes-shop'>
                    <HeroCard
                        id = 'helpingHand'
                        title = 'Helping Hand'
                        dpc = {1}
                        heroImg = {helpingHand}
                        cost = {5}
                        bells= {this.props.bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <HeroCard
                        id = 'stupidJulia'
                        title='Stupid Julia'
                        dps = {5}
                        heroImg = {stupidJulia}
                        cost = {50}
                        bells= {this.props.bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <HeroCard
                        id ='triangleGirl'
                        title='Triangle Girl'
                        dps = {20}
                        heroImg = {girlTriangle}
                        cost = {500}
                        bells= {this.props.bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <HeroCard
                        id ='rabbitNazar'
                        title='Rabbit Nazar'
                        dps = {200}
                        heroImg = {rabbitNazar}
                        heroImgGuilded = {rabbitNazarGuilded}
                        cost = {2000}
                        bells= {this.props.bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <HeroCard
                        id = 'ladyMarina'
                        title='Lady Marina'
                        dps = {1000}
                        heroImg = {ladyMarina}
                        cost = {10000}
                        bells= {this.props.bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                    <HeroCard
                        id='flowerGirl'
                        title='Flower Girl'
                        dps = {20000}
                        heroImg = {flowerGirl}
                        cost = {50000}
                        bells= {this.props.bells}
                        onHandleBuyClick={this.handleBuyClick}/>
                </div>
            </div>
        )
    }
}
