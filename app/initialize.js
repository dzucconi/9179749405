import qs from './lib/qs';
import { phone, number, decimal } from './lib/format';

const params = qs.parse(location.search.slice(1))
const digits = params.digits || '9179749405';
const country = (params.country || 'US').toUpperCase();

const random = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const equation = () => {
  const offset = random(number(digits));
  return [offset, digits - offset];
};

const formatted = ([offset, counter]) => (offset + counter === number(digits)) ? `
  <a class='equation' onclick='render();'>
    <div class='line'>${decimal(offset)}</div>
    <div class='line'>+ ${decimal(counter)}</div>
    <hr>
    <div class='line'>${phone(digits, country)}</div>
  </a>
` : 'Error';

window.render = () =>
  document.body.innerHTML = formatted(equation());

render();
