"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, name, price, year, country, slogan, genre, time, count = 1) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
        this.count = count;
    }
}
exports.default = Movie;
