import React, {Component} from 'react';
import { Button, Container, Row, Col, Alert, Tooltip} from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


import './soul-card.scss';

export default class SoulCard extends Component {
    state = {
        dps: this.props.dps||null,
        dpsMultipler: 1.08,

        dpc: this.props.dpc||null,
        dpcMultipler: 1.08,

        baseCost: this.props.cost,
        cost: this.props.cost,
        costMultipler: 1.07,
        needMoreMoney: false,

        title: this.props.title,

        lvl: 0,
        buyingLvlCount: 1,

        isButtonDisabled: true,
        tooltipOpen: false
    }


    handleBuyClick = () => {

    }

    toggle = () => this.setState({tooltipOpen: !this.state.tooltipOpen});

    render(){
        const {dps, dpc, cost, title, lvl, needMoreMoney, isButtonDisabled, tooltipOpen} = this.state;
        const {id} = this.props;
        const buttonClassNames = isButtonDisabled === true? 'disabled': '';

        return (
            <div>
            <Card className='card' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle className="text-center">{this.props.title}</CardTitle>
                    <img className='card__soul-img' src={this.props.soulImg} alt="soul"/>
                    <hr/>
                <CardText className='text-center'>{this.props.soulSkill}</CardText>
                    <Button
                        id = {"Tooltip-" + id}
                        className = {buttonClassNames}
                        outline={isButtonDisabled}
                        onClick = {this.handleBuyClick}
                        size="lg"
                        color="info">
                            Buy This soul
                    </Button>
                </Card>
            </div>
        )
    }
   
}