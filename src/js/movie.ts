import Buyable from "./logic";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly time: string,
        readonly count = 1,
    ) {

    }
}