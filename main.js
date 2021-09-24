var app = new Vue (
    {
        el: '#app',
        data: {
            product: 'Socks',
            color: 'White',
            image: "./assets/friends.jpg",
            link: '#hola',
            inStock: false,
            inventory: 10,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Unisex"],
            variants: [
                {
                    variantId: "2234", 
                    variantColor: "green",
                    variantImage:"./assets/friends.jpg"
                },
                {
                    variantId: "2235", 
                    variantColor: "blue",
                    variantImage: "./assets/Venom.jpeg"
                }
            ],
            cart: 0            
        },
        methods: {
            addToCart: function(){
                this.cart +=1
            },
            removeCart: function(){
                this.cart -=1
            },
            updateProduct: function(variantImage){
                this.image =variantImage
            }
        }
    }
);
