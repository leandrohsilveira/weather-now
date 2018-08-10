import composer from 'redux-loop-composer';
import weatherModule from './city/weatherModule';

const domainModule = composer.create('domain');

domainModule.addModule(weatherModule);

export default domainModule;