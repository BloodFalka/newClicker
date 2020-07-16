import React, {Component} from 'react';

import './skill.scss';

export default class Skill extends Component {

    handleClick = () => {

    }


    render(){

        return (
            <div className='skill'>
                <img src={this.props.skillImg} alt="skill"/>
            </div>
        )
    }
}