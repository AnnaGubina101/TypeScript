"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const total = 0;
class Cart {
    constructor() {
        this.items = [];
    }
    addToCart(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
    sumWithoutDiscount() {
        return this.items.forEach(item => { total + item.price; });
    }
    sumWithDiscount(discount) {
        return this.items.forEach(item => { item.price * (discount / 100); });
    }
    deleteItemFromCart(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
exports.default = Cart;
