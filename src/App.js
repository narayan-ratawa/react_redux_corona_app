import React, { Component } from 'react';
import { connect } from "react-redux";
import styles from './App.module.css';
import { Card, Chart, CountryPicker } from './components/index.js'
import image from './images/covid.png';
import {
    getCountryData
} from './action/country.js'

class App extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        this.props.getCountryData("")
    }
    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Card testId="card" data={this.props.data} />
                <CountryPicker />
                {
                    this.props.data ?
                        <Chart data={this.props.data} country={this.props.country} /> : null
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        data: state.country.countryData,
        country: state.country.country
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getCountryData: (cName) => dispatch(getCountryData(cName)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);