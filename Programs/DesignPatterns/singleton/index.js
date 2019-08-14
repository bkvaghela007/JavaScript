import {dom} from './singleton';

let instance = dom.getInstance();

if(instance == dom.getInstance()) { console.log('This is singleton object.');}
else {console.log('There is not singleton object. Need to fix it.')}
