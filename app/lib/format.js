import libphonenumber from 'libphonenumber-node';

export const decimal = n =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const phone = (n, country = 'US', force = true) => {
  if (n.match(/^\+\d/)) {
    return  libphonenumber.format(n, 'international');
  }

  const international = libphonenumber.format(n, country);

  return force ?
    libphonenumber.format(international, 'local') || international :
    international;
};

export const number = n =>
  parseInt(n.replace(/[^0-9.]/g, ''));
