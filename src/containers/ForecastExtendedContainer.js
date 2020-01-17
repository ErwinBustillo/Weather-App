import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ForecastExtended from '../components/ForecastExtended'

export class ForecastExtendedContainer extends Component {
  

    render() {
        return (
            this.props.city && <ForecastExtended city={this.props.city} />
        )
    }
}

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,
}

const mapStateToProps = ({city}) => ({
    city
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastExtendedContainer)
