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