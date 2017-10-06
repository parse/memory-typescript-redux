// setup file
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const globalAny: any = global;

globalAny.requestAnimationFrame = callback => setTimeout(callback, 0);
