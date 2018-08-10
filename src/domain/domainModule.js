import composer from 'redux-loop-composer';
import weatherModule from './weather/weatherModule';

const domainModule = composer.create('domain');

domainModule.addModule(weatherModule);

export default domainModule;