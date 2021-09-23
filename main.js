const IMAGE_ROUTE = "./assets/friends.jpg"

var app = new Vue (
    {
        el: '#app',
        data: {
            product: 'Socks',
            color: 'White',
            image: IMAGE_ROUTE,
            link: '#hola',
            inventory: 10
        }
    }
);
