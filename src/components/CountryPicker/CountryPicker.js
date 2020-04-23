import React from 'react';
import { connect } from 'react-redux'
import { getCountryData, getCountryList } from '../../action/country.js';
import styles from './CountryPicker.module.css'

class CoutryPicker extends React.Component {
    state = {
        selectedCountry: ''
    }

    componentDidMount() {
        this.props.getCountryList()
    }

    render() {
        return (
            <>
                <h5>Country</h5>
                {
                    this.props.countryList.length > 0 ?

                        <select className={styles.formControl} id="country" onChange={(event) => {
                            this.props.getCountryData(event.target.value)
                        }}>
                            <option value="">Global</option>
                            {
                                this.props.countryList.map((country,index) => {
                                    return (<option key={index} value={country.iso2}>{country.name}</option>)
                                })
                            }
                        </select>
                        : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.country.countryData,
        countryList: state.country.countryList
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getCountryData: (cName) => dispatch(getCountryData(cName)),
        getCountryList: () => dispatch(getCountryList())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CoutryPicker);