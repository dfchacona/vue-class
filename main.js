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
                    variantColor: "green",
                    variantSize: "Small"
                },
                {
                    variantId: "2235", 
                    variantColor: "green",
                    variantSize: "Medium"
                },
                {
                    variantId: "2236", 
                    variantColor: "green",
                    variantSize: "Large"
                },
                {
                    variantId: "2237", 
                    variantColor: "blue",
                    variantSize: "Small"
                },
                {
                    variantId: "2238", 
                    variantColor: "blue",
                    variantSize: "Medium"
                },
                {
                    variantId: "2239", 
                    variantColor: "blue",
                    variantSize: "Large"
                }
            ]
            
        }
    }
);
