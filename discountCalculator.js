function calculateDiscountedPrice(quantity, pricePerItem) {
    // calculate total price directly
    let totalPrice = quantity * pricePerItem;

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;