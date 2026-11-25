module.exports = function timeAgo(date) {
  const days = Math.floor((Date.now() - new Date(date)) / 86400000);
  if (days < 1) return 'hoy';
  return `hace ${days} d`;
};
