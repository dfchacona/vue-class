var app = new Vue (
    {
        el: '#app',
        data: {
            brand: 'Vue Mastery',
            product: 'Socks',
            color: 'White',
            selectedVariant: 0,
            link: '#hola',
            inventory: 10,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Unisex"],
            variants: [
                {
                    variantId: 2234, 
                    variantColor: 'green',
                    variantImage:'./assets/friends.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235, 
                    variantColor: 'blue',
                    variantImage: './assets/Venom.jpeg',
                    variantQuantity: 0
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
            updateProduct: function(index){
                this.selectedVariant =index,
                console.log(index)
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image(){
                return this.variants[this.selectedVariant].variantImage
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity
            },
            onSales (){
                return this.brand + ' ' + this.product + ' are on Sale!'
            }

        }
    }
);
