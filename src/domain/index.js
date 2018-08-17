import { Domain } from 'redux-loop-composer';
import weatherDomain from './weather';

const domainModule = new Domain('domain');

domainModule.addDomain(weatherDomain);

export default domainModule;