import React, {Component} from 'react';
import { Badge } from 'reactstrap';
import {Link} from 'react-router-dom';

import logo from '../../img/logoes/logo_aloe.png';

import './nav-menu.scss';

export default class NavMenu extends Component {

    render(){
        return (
            <div>
                <div className = 'nav-menu'>
                        <div className = 'nav-menu__link' disabled href="#">MyClickerApp</div>
                        <Link className = 'nav-menu__link' to="/clicker/">Shop</Link>
                        <Link className = 'nav-menu__link' to="/clicker/achievments">Achievments</Link>
                        <Link className = 'nav-menu__link' to="/clicker/souls-shop">Souls</Link>

                        <Badge className='nav-menu__indicators' color="light">DPS:{this.props.dps}</Badge>
                        <Badge className='nav-menu__indicators' color="primary">DPC:{this.props.dpc}</Badge>

                            <img className='nav-menu__logo' src={logo} alt=""/>
                </div>
            </div>
        )
    }
}