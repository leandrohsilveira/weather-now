import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardGrid from './../../components/card/CardGrid';
import WeatherCard from './WeatherCard';
import { restoreWeather, restoreCityWeather, getWeatherState } from './';

const mapStateToProps = state => ({
    cities: getWeatherState(state)
});

const mapDispatchToProps = dispatch => ({
    restoreAll: () => dispatch(restoreWeather()),
    restore: (cityRef) => dispatch(restoreCityWeather(cityRef))
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
            const { restoreAll } = this.props;
            if (typeof restoreAll === 'function') {
                restoreAll();
                this.interval = setInterval(restoreAll, 60000);
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.cities !== this.props.cities) {
                this.handlePropsChange(nextProps);
            }
        }

        componentWillUnmount() {
            if (this.interval) {
                this.interval();
            }
        }

        render() {
            const { cities } = this.state;
            return (
                <CardGrid>
                    {cities.map(city => (
                        <WeatherCard
                            {...city}
                            onTryAgain={() => this.handleTryAgain(city.key)}
                        />
                    ))}
                </CardGrid>
            )
        }

        handleTryAgain = (cityRef) => {
            const { restore } = this.props;
            if (typeof restore === 'function') {
                restore(cityRef);
            }
        };

        handlePropsChange = (nextProps) => {
            if (nextProps.cities) {
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
                this.setState({ cities: [] });
            }
        };

    }
);

export default WeatherScreen;