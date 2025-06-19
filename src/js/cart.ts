import Buyable from "./logic";
const total = 0;

export default class Cart {
    private items: Buyable[] = [];
    

    addToCart(item: Buyable) {
        this.items.push(item)
    }

    getAll() {
        return[...this.items];
    }

    sumWithoutDiscount() {
        return this.items.forEach(item => {total + item.price})
    }

    sumWithDiscount(discount: number) {
        return this.items.forEach(item => {item.price * (discount/100)})
    }

    deleteItemFromCart(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}