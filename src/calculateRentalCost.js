/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;
  const MEDIUM_TERM_DISCOUNT = 20;

  const baseCost = days * DAILY_RATE;

  if (days >= 3 && days < 7) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  if (days >= 7) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  return baseCost;
}
calculateRentalCost(7);

module.exports = calculateRentalCost;
