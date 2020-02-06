import _ from 'lodash';
import './style.css';
import Logo from './kudo-logo.png';
import Data from './data.xml';
import JsonData from './data.json';

function component() {
  const element = document.createElement('h1');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // Add the image to our existing div.
  const myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  console.log(Data);
  console.log(JsonData);

  return element;
}
document.body.appendChild(component());