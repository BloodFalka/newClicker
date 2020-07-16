import React, {Component} from 'react';
import { Progress, Button } from 'reactstrap';

import {Animated} from "react-animated-css";

import Skills from '../skills';

import shortcutNumber from '../../modules/shortcutNum.js';
import critical from '../../modules/critical.js';

// import helpingHand from '../../img/heroes/helpingHand.png';
// import stupidJulia from '../../img/heroes/stupidJulia.png';
// import girlTriangle from '../../img/heroes/girlTriangle.png';
import rabbitNazarEnemy from '../../img/enemies/rabbitNazarEnemy.png';
import rabbitNazarEnemyGuilded from '../../img/enemies/rabbitNazarEnemy-guilded.png';
import ladyMarinaEnemy from '../../img/enemies/ladyMarinaEnemy.png';
import vazonEnemy from '../../img/enemies/vazonEnemy.png';
// import flowerGirl from '../../img/heroes/flowerGirl.png';

import forest from '../../img/backgrounds/forest.jpg';
import forest2 from '../../img/backgrounds/forest2.jpg';
import forest3 from '../../img/backgrounds/forest3.jpg';
import mashroomForest from '../../img/backgrounds/mashroom-forest.jpg';
import jungle from '../../img/backgrounds/jungle.jpg';

import shop from '../../img/logoes/shop.png'

import bellsImg from '../../img/valutes/bells.png';

import './battle-field.scss'

const enemiesArray = [
    // [helpingHand, 'Helping Hand'],
    // [stupidJulia, 'Stupid Julia'],
    // [girlTriangle, 'Triangle Girl'],
    [rabbitNazarEnemy, 'Nazar not Rabbit'],
    [rabbitNazarEnemyGuilded, 'Rabbit Nazar'],
    [ladyMarinaEnemy, 'Lady Marina'],
    [vazonEnemy, 'Vazon, the plant']
    // [flowerGirl, 'Flower Girl']
];

const backgrounds = [
    `url('${forest}')`,
    `url('${forest2}')`,
    `url('${forest3}')`,
    `url('${mashroomForest}')`,
    `url('${jungle}')`
];


export default class BattleField extends Component {
        state = {
            maxHp: 10,
            hp: 10,

            criticalChance: 1,
            criticalMultipler: 2,

            monstersOnLvl: 10,
            monsterCounter: 0,
            currentMonster: 1,
            isMonsterVisible: true,

            lvlCounter: 1,

            bellsMultipler: 15,

            isBoss: false,
            bossLifesMultipler: 10,
            bossTimer: 30,
            currentBossTimer: 30,
            currentBackground: 0
        };
        componentDidMount() {
            setInterval(this.dps, 1000);
        }

        dps = () => {
            this.setState({hp : Math.ceil(this.state.hp - this.props.dps)})
            this.monsterDieActions();
            this.lvlFinishActions();

            if(this.state.currentBossTimer <= 1) {
                this.setState({
                    hp : this.state.maxHp,
                    currentBossTimer: this.state.bossTimer
                })
            }
        }

        handleClick = (e) => {
            if(this.state.isMonsterVisible){
                const dpc = critical(this.props.dpc, this.state.criticalChance, this.state.criticalMultipler);
                const dpcText = document.querySelector('.battle-field__click-damage');
                this.setState({hp : Math.ceil(this.state.hp - dpc)});
                this.monsterDieActions();
                this.lvlFinishActions();

                if(dpc <= this.props.dpc){
                    dpcText.style.color = 'yellow'
                } else {
                    dpcText.style.color = 'red'
                }
                dpcText.textContent = dpc;
                setTimeout(() => {
                    dpcText.textContent = '';
                }, 100);
            }
            return;
        }

        monsterDieActions = () => {
            if(this.state.hp <= 0){
                this.props.onMonsterDie(this.state.maxHp, this.state.bellsMultipler);
                this.setState({
                    hp : Math.ceil(10 * (this.state.lvlCounter - 1 + Math.pow(1.55, this.state.lvlCounter - 1))),
                    maxHp: Math.ceil(10 * (this.state.lvlCounter - 1 + Math.pow(1.55, this.state.lvlCounter - 1))),
                    monsterCounter: this.state.monsterCounter + 1,
                    isMonsterVisible: false
                });

                setTimeout(() => {
                    this.setState({
                        currentMonster: Math.floor(Math.random()*enemiesArray.length),
                        isMonsterVisible: true,
                    });
                }, 1000);
            }
        }

        lvlFinishActions = () => {
            if(this.state.monsterCounter>=this.state.monstersOnLvl){
                this.setState({
                    monsterCounter: 0,
                    lvlCounter: this.state.lvlCounter + 1,
                    currentBackground: Math.floor(Math.random()*backgrounds.length)
                });
                if((this.state.lvlCounter-1) % 5 === 0){
                    this.setState({
                        isBoss: false,
                        monstersOnLvl: 10,
                        hp : Math.ceil(10 * (this.state.lvlCounter - 1 + Math.pow(1.55, this.state.lvlCounter - 1))),
                        maxHp: Math.ceil(10 * (this.state.lvlCounter - 1 + Math.pow(1.55, this.state.lvlCounter - 1))),
                        currentBossTimer: 30
                    });
                }
                this.bossActions();
                }
        }

        showGameMenu = () => {
            document.querySelector('.game-menu').style.display = 'flex';
            document.querySelector('.battle-field__modal-close').style.display = 'block';
        }

        hideGameMenu = () => {
            const gameMenu = document.querySelector('.game-menu');
            if(gameMenu.style.display === 'none'){
                gameMenu.style.display = 'flex';
            } else {
                gameMenu.style.display = 'none';
                document.querySelector('.battle-field__modal-close.mobile').style.display = 'none';
            }
        }

        bossActions = () => {
            if(this.state.lvlCounter % 5 === 0){

                    setInterval(()=>{
                        this.setState({
                            currentBossTimer: this.state.currentBossTimer - 1
                        })
                    }, 1000);


                if(this.state.currentBossTimer === this.state.bossTimer){
                    this.setState({
                        isBoss: true,
                        monstersOnLvl: 1,
                        hp : Math.ceil(100 * (this.state.lvlCounter - 1 + Math.pow(1.55, this.state.lvlCounter - 1))),
                        maxHp: Math.ceil(100 * (this.state.lvlCounter - 1 + Math.pow(1.55, this.state.lvlCounter - 1))),
                    });
                }
            }
        }

        render(){
        const {hp, maxHp, monsterCounter, monstersOnLvl, lvlCounter, isMonsterVisible, currentMonster, isBoss, bossTimer, currentBossTimer, currentBackground} = this.state;
        const {bells, dps, dpc} = this.props;

        const bossTimerBar = isBoss? <Progress animated className='battle-field__monster-timer-bar' max={bossTimer} value={currentBossTimer} color="info">{currentBossTimer}</Progress>: null;
        return (
            <div
                onClick={(e)=>this.handleClick(e)}
                className='battle-field'
                style= {{backgroundImage: `${backgrounds[currentBackground]}`}}>

                <Skills/>

                <div className='battle-field__bells'>
                    {shortcutNumber(Math.floor(bells))}
                    <img src={bellsImg} alt="bells"/>
                </div>

                <div className='battle-field__lvl-counter'>
                    {shortcutNumber(lvlCounter, ['K', 'M'])} lvl
                </div>

                <div className='battle-field__click-damage'></div>

                <div>
                    <div className="text-center battle-field__monster-name">{enemiesArray[currentMonster][1]} {monsterCounter}/{monstersOnLvl}</div>

                    <img onClick={this.showGameMenu} className='battle-field__shop' src={shop} alt="shop"/>

                    <Button
                        className='battle-field__modal-close mobile'
                        onClick={this.hideGameMenu}
                        color="danger"><div>×</div>
                    </Button>

                    <div
                        className='battle-field__modal-close desktop'
                        onClick={this.hideGameMenu}>
                    </div>

                    <Animated animationIn="fadeIn" animationOut="bounceOutDown" isVisible={isMonsterVisible} animationInDuration='2000' animationOutDuration='1000'>
                        <img className='battle-field__monster' src={enemiesArray[currentMonster][0]} alt="monster"/>
                    </Animated>
                    {bossTimerBar}
                    <div className='text-center text-light battle-field__monster-hp'>{hp>=0?shortcutNumber(hp):0}</div>
                    <Progress className='battle-field__monster-progress-bar' max={maxHp} value={hp} color="danger"/>
                </div>
            </div>
        )
    }
}