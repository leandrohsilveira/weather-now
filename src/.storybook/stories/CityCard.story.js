import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../../index.css';
import CityCard from '../../domain/city/CityCard';

storiesOf('CityCard', module)
    .add('when the weather is normal', () => (
        <CityCard title="City, CC" value={20} />
    ))
    .add('when the weather is hot', () => (
        <CityCard title="City, CC" value={30} />
    ))
    .add('when the weather is cold', () => (
        <CityCard title="City, CC" value={3} />
    ))
    .add('when the weather value is loading', () => (
        <CityCard title="City, CC" loading={true} />
    ))
    .add('when something went wrong', () => (
        <CityCard title="City, CC" error={true} onTryAgain={action('Trying again...')} />
    ))
    .add('when the main card weather is normal', () => (
        <CityCard type="main" title="City, CC" value={20} humidity={70} pressure={890} />
    ))
    .add('when the main card weather is hot', () => (
        <CityCard type="main" title="City, CC" value={30} humidity={67} pressure={837} />
    ))
    .add('when the main card weather is cold', () => (
        <CityCard type="main" title="City, CC" value={3} humidity={84} pressure={955} />
    ))
    .add('when the main card weather value is loading', () => (
        <CityCard type="main" title="City, CC" loading={true} />
    ))
    .add('when something went wrong with the main card', () => (
        <CityCard type="main" title="City, CC" error={true} onTryAgain={action('Trying again...')} />
    ))