import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className='jumbotron'>
            <h1 className='text-center'>{counter}</h1>
            <div className="d-flex justify-content-center">
                <button onClick={inc} className='btn btn-primary mr-2'>+</button>
                <button onClick={dec} className='btn btn-warning mr-2'>-</button>
                <button onClick={rnd} className='btn btn-info'>R</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);