import React, {Component} from 'react';
import { Button, Container, Row, Col, Alert, Tooltip} from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

import bells from '../../../../img/valutes/bells.png';

import './hero-card.scss';

export default class HeroCard extends Component {
    state = {
        startDps: this.props.dps||null,
        dps: this.props.dps||null,
        dpsMultipler: 1,

        startDpc: this.props.dpc||null,
        dpc: this.props.dpc||null,
        dpcMultipler: 1,

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

    componentDidUpdate(prevProps){
        if(prevProps.bells !== this.props.bells){
            if(this.props.bells >= this.state.cost) {
                this.setState({
                    isButtonDisabled: false
                });
            } else {
                this.setState({
                    isButtonDisabled: true
                });
            }
        }
    }

    handleBuyClick = () => {
        if(this.props.bells >= this.state.cost) {
            this.setState({
                lvl: this.state.lvl + this.state.buyingLvlCount,
                cost: Math.floor((this.state.baseCost + this.state.lvl) * Math.pow(this.state.costMultipler, (this.state.lvl+1))),
                dps: this.state.dps + this.state.startDps*this.state.dpsMultipler,
                dpc: this.state.dpc + this.state.startDpc*this.state.dpcMultipler,
            });
            this.props.onHandleBuyClick(this.state.cost, this.state.dpc, this.state.dps, this.state.startDpc, this.state.startDps);
        } else{
            this.setState({
                needMoreMoney: true
            });
            setTimeout(()=>{
                this.setState({
                    needMoreMoney: false
                });
            },2000)
        }
    }

    toggle = () => this.setState({tooltipOpen: !this.state.tooltipOpen});

    render(){
        const {dps, dpc, dpsMultipler, dpcMultipler, startDpc, startDps, cost, title, lvl, needMoreMoney, isButtonDisabled, tooltipOpen} = this.state;
        const {id, heroImg, heroImgGuilded} = this.props;
        const buttonClassNames = isButtonDisabled === true? 'disabled': '';

        return (
            <div>
            <Card className='card' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle className="text-center">{title}</CardTitle>
                <img className='card__hero-img' src={lvl<1?heroImg: heroImgGuilded? heroImgGuilded: heroImg} alt="hero1"/>
                <hr/>
                <CardText>Next +{dps? `${Math.floor(dps*dpsMultipler)} DPS` : `${Math.floor(dpc*dpcMultipler)} DPC`}</CardText>
                <CardText>{lvl} lvl</CardText>
                <Button
                    id = {"Tooltip-" + id}
                    className = {buttonClassNames}
                    outline={isButtonDisabled}
                    onClick = {() => {
                        this.handleBuyClick();
                        }
                    }
                    size="lg"
                    color="warning">
                        Buy {Math.floor(cost)}
                    <img className='card__bells' src={bells} alt="bells"/>
                </Button>
                <Tooltip
                    placement="top"
                    isOpen={tooltipOpen}
                    target={"Tooltip-" + id}
                    toggle={this.toggle}>
                    Next + {dps? Math.ceil(startDps* dpsMultipler) : Math.ceil(startDpc*dpcMultipler)}
                </Tooltip>
                <Alert className='card__no-money' isOpen={needMoreMoney} color="danger">
                        <p>You need more bells</p>
                </Alert>
            </Card>
    
    
            </div>
        )
    }
   
}