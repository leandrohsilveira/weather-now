import React, { Component } from 'react';
import {connect} from 'react-redux';

import CardGrid from './../../components/card/CardGrid';
import CityCard from './CityCard';
import { restoreWeather } from './weather.actions';

const mapStateToProps = state => ({
    cities: state.weather
});

const mapDispatchToProps = dispatch => ({
    restore: () => dispatch(restoreWeather())
});

const WeatherScreen = (Comp => {
    Comp = connect(mapStateToProps, mapDispatchToProps)(Comp);
    return Comp;
})(
    class _WeatherScreen extends Component {

        state = {
            cities: []
        };

        componentWillMount() {
            this.handlePropsChange(this.props);
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.cities !== this.props.cities) {
                this.handlePropsChange(nextProps);
            }
        }

        render() {
            const { cities } = this.state;
            return (
                <CardGrid>
                    {cities.map(city => (
                        <CityCard 
                            {...city}
                        />
                    ))}
                </CardGrid>
            )
        }

        handlePropsChange = (nextProps) => {
            if(nextProps.cities) {
                this.setState({
                    cities: Object.keys(nextProps.cities).map(cityRef => {
                        const city = nextProps.cities[cityRef];
                        return {
                            key: cityRef,
                            ...city
                        };
                    })
                });
            } else {
                this.setState({cities: []});
            }
        }

    }
);

export default WeatherScreen;