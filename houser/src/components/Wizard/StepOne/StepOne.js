import React, { Component } from 'react';
// import './StepOne.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateListingDesc } from '../../../ducks/reducer';

class StepOne extends Component {

    render() {
        return (
            <div>
            <p>Add New Listing</p>
            <button>Cancel</button>
            
            <p>Property Name</p>
            <input />
            <p>Property Description</p>
            <input className='prop-desc' onChange={e => this.props.updateListingDesc(e.target.value)} />
            <Link to='/wizard/2'><button className='next-btn' >Next Step</button></Link>
            
            
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listingDesc: state.listingDesc
    }
}


export default connect(mapStateToProps, { updateListingDesc })(StepOne);