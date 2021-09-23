const IMAGE_ROUTE = "./assets/friends.jpg"

var app = new Vue (
    {
        el: '#app',
        data: {
            product: 'Socks',
            color: 'White',
            image: IMAGE_ROUTE,
            link: '#hola',
            inventory: 10,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Unisex"],
            variants: [
                {
                    variantId: "2234", 
                    variantColor: "green"
                },
                {
                    variantId: "2235", 
                    variantColor: "blue"
                }
            ]
        }
    }
);
