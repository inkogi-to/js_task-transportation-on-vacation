/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISCOUNT = 50;
  const PRICE__RENT_DAY = 40;
  const WEEK_DISCOUNT = 20;

  const baseCost = days * PRICE__RENT_DAY;

  if (days < 3) {
    return days * PRICE__RENT_DAY;
  }

  if (days >= 3 && days < 7) {
    return baseCost - WEEK_DISCOUNT;
  }

  if (days >= 7) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  return 0;
}
calculateRentalCost(7);

module.exports = calculateRentalCost;
