import React, {Component} from 'react';
import { Button, Container, Row, Col, Alert, Tooltip, Progress} from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

import './achievment-card.scss';

export default class AchievmentCard extends Component {
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

    handleGrabClick = () => {

    }

    render(){
        const {dps, dpc, cost, title, lvl, needMoreMoney, isButtonDisabled, tooltipOpen} = this.state;
        const {id} = this.props;
        const buttonClassNames = isButtonDisabled === true? 'disabled': '';

        return (
            <div>
                <Card className='card' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle className="text-center">{this.props.title}</CardTitle>
                    <img className='card__achievment-img' src={this.props.achievmentImg} alt="ach"/>
                    <hr/>
                <CardText className='text-center'>{this.props.achievmentGift}</CardText>
                <Progress className='mb-3' color="info" value="0">0%</Progress>
                <Button
                    id = {"Tooltip-" + id}
                    className = {buttonClassNames}
                    outline={isButtonDisabled}
                    onClick = {this.handleGrabClick}
                    size="lg"
                    color="info">
                        Grab prize
                </Button>
                </Card>
            </div>
        )
    }
   
}