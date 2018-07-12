import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import '../../index.css';
import CityCard from '../../domain/city/CityCard';

const date = moment('10:51 PM', 'LT').toDate();

storiesOf('CityCard', module)
    .add('when the weather is normal', () => (
        <CityCard title="City, CC" value={20} date={date} />
    ))
    .add('when the weather is hot', () => (
        <CityCard title="City, CC" value={30} date={date} />
    ))
    .add('when the weather is cold', () => (
        <CityCard title="City, CC" value={3} date={date} />
    ))
    .add('when the weather value is loading', () => (
        <CityCard title="City, CC" loading={true} date={date} />
    ))
    .add('when something went wrong', () => (
        <CityCard title="City, CC" error={true} onTryAgain={action('Trying again...')} date={date} />
    ))
    .add('when the main card weather is normal', () => (
        <CityCard type="main" title="City, CC" value={20} humidity={70} pressure={890} date={date} />
    ))
    .add('when the main card weather is hot', () => (
        <CityCard type="main" title="City, CC" value={30} humidity={67} pressure={837} date={date} />
    ))
    .add('when the main card weather is cold', () => (
        <CityCard type="main" title="City, CC" value={3} humidity={84} pressure={955} date={date} />
    ))
    .add('when the main card weather value is loading', () => (
        <CityCard type="main" title="City, CC" loading={true} date={date} />
    ))
    .add('when something went wrong with the main card', () => (
        <CityCard type="main" title="City, CC" error={true} onTryAgain={action('Trying again...')} date={date} />
    ));