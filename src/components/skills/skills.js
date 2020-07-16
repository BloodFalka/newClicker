import React, {Component} from 'react';

import Skill from './skill';

import helpingHand from '../../img/heroes/helpingHand.png';
import bells from '../../img/valutes/bells.png';
import stars from '../../img/valutes/stars.png';
import opium from '../../img/valutes/opium.png';

import './skills.scss';

export default class Skills extends Component {

    handleClick = () => {

    }

    render(){
        return (
            <div>
                <div className="skills">
                    <Skill
                        skillImg={helpingHand}
                        name='autoClick'
                        />
                    <Skill
                        skillImg={stars}
                        name='doubleDpc'
                        />
                    <Skill
                        skillImg={bells}
                        name='doubleDps'
                        />
                    <Skill
                        skillImg={opium}
                        name='doubleBells'
                        />
                    <Skill
                        skillImg={stars}
                        name='doubleSkill'
                        />
                </div>
                <div className='skills__closer'></div>
            </div>
        )
    }
}
