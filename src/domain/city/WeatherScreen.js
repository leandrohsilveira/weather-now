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

        interval = null;

        componentWillMount() {
            const { restore } = this.props;
            if(typeof restore === 'function') {
                restore();
                this.interval = setInterval(restore, 60000);
            }
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.cities !== this.props.cities) {
                this.handlePropsChange(nextProps);
            }
        }

        componentWillUnmount() {

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