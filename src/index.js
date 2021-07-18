import _ from 'lodash';
import './style.css';
import Icon from './1.png';
import Data from './data.json';

/**starting asset management */

console.log('hello from index.js');
console.log(Data);

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
/**Note that webpack will not alter any
 * code other than import and export statements */
