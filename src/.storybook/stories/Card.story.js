import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../../index.css';
import Card from '../../components/card/Card';

storiesOf('Card', module)
    .add('when is completely empty', () => (
        <Card />
    ))
    .add('when has a title', () => (
        <Card title="City, CC" />
    ))
    .add('when has a content', () => (
        <Card>
            <div>The card's content</div>
        </Card>
    ))
    .add('when has both title and content', () => (
        <Card title="City, CC">
            <div>The card's content</div>
        </Card>
    ))