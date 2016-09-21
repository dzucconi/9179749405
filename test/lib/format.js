import { phone } from '../../app/lib/format';

describe('format', () => {
  describe('phone', () => {
    console.log(phone('9179749405', 'US'))
    console.log(phone('19179749405', 'US'))
    console.log(phone('+19179749405', 'US'))
    console.log(phone('+31619503229', 'NL'))
    console.log(phone('619503229', 'NL'))
  });
});
