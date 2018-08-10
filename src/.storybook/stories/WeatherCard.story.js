import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import '../../index.css';
import WeatherCard from '../../domain/city/WeatherCard';

const date = moment('10:51 PM', 'LT').toDate();

storiesOf('WeatherCard', module)
    .add('when the weather is normal', () => (
        <WeatherCard title="City, CC" value={20} date={date} />
    ))
    .add('when the weather is hot', () => (
        <WeatherCard title="City, CC" value={30} date={date} />
    ))
    .add('when the weather is cold', () => (
        <WeatherCard title="City, CC" value={3} date={date} />
    ))
    .add('when the weather value is loading', () => (
        <WeatherCard title="City, CC" loading={true} date={date} />
    ))
    .add('when something went wrong', () => (
        <WeatherCard title="City, CC" error={true} onTryAgain={action('Trying again...')} date={date} />
    ))
    .add('when the main card weather is normal', () => (
        <WeatherCard type="main" title="City, CC" value={20} humidity={70} pressure={890} date={date} />
    ))
    .add('when the main card weather is hot', () => (
        <WeatherCard type="main" title="City, CC" value={30} humidity={67} pressure={837} date={date} />
    ))
    .add('when the main card weather is cold', () => (
        <WeatherCard type="main" title="City, CC" value={3} humidity={84} pressure={955} date={date} />
    ))
    .add('when the main card weather value is loading', () => (
        <WeatherCard type="main" title="City, CC" loading={true} date={date} />
    ))
    .add('when something went wrong with the main card', () => (
        <WeatherCard type="main" title="City, CC" error={true} onTryAgain={action('Trying again...')} date={date} />
    ));