import React, { Component } from 'react';

import CardGrid from './../../components/card/CardGrid';
import CityCard from './CityCard';

const WeatherScreen = (Comp => {

    return Comp;
})(
    class _WeatherScreen extends Component {

        state = {
            cities: []
        };

        componentWillReceiveProps(nextProps) {
            if(nextProps.cities !== this.props.cities) {
                if(nextProps.cities) {
                    this.setState({
                        cities: Object.keys(nextProps.cities).map(cityRef => {
                            const city = nextProps[cityRef];
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

    }
);

export default WeatherScreen;