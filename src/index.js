import _ from 'lodash';
import './style.css';

/**starting asset management */

console.log('hello from index.js');
function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
/**Note that webpack will not alter any
 * code other than import and export statements */
