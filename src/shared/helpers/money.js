module.exports = function money(amount, currency = 'PEN') {
  const symbol = currency === 'USD' ? '$' : 'S/';
  return `${symbol} ${Number(amount).toFixed(2)}`;
};
