import Movie from '../../../js/movie'
import Cart from '../../../js/cart'

test('testing adding new movie', () => {
    const movie = new Movie({
        year: 2012,
        country: 'США',
        slogan: 'Avengers assemble!',
        genre: 'фантастика, боевик, фэнтэзи, приключения',
        time: '137 мин./ 02:17',
    });
})

test('testing addToCart', () => {
    const cart = new Cart;
    cart.addToCart({
        year: 2012,
        country: 'США',
        slogan: 'Avengers assemble!',
        genre: 'фантастика, боевик, фэнтэзи, приключения',
        time: '137 мин./ 02:17',
    })
})

test('testing getAll', () => {
    const cart = new Cart;
     cart.addToCart({
        year: 2012,
        country: 'США',
        slogan: 'Avengers assemble!',
        genre: 'фантастика, боевик, фэнтэзи, приключения',
        time: '137 мин./ 02:17',
    })
    cart.getAll();
})

test('testing sumWithoutDiscount', () => {
    const cart = new Cart;
    cart.addToCart({
        year: 2012,
        country: 'США',
        slogan: 'Avengers assemble!',
        genre: 'фантастика, боевик, фэнтэзи, приключения',
        time: '137 мин./ 02:17',
        price: 150
    })

    cart.sumWithoutDiscount(cart);
})

test('testing sumWithDiscount', () => {
    const cart = new Cart;
    cart.addToCart({
        year: 2012,
        country: 'США',
        slogan: 'Avengers assemble!',
        genre: 'фантастика, боевик, фэнтэзи, приключения',
        time: '137 мин./ 02:17',
        price: 150
    })

    cart.sumWithDiscount(20);
})

test('testing deleteItemFromCart', () => {
    const cart = new Cart;
    cart.addToCart({
        year: 2012,
        country: 'США',
        slogan: 'Avengers assemble!',
        genre: 'фантастика, боевик, фэнтэзи, приключения',
        time: '137 мин./ 02:17',
        price: 150,
        id: 1
    })

    cart.deleteItemFromCart(1)
})