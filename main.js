Vue.component('product-details',{
    props:{
        details: {
            type: Array,
            required: true
        }
    },
    template:`
        <ul>
            <li v-for="detail in details">
                {{ detail }}
            </li>
        </ul>
        `
    })
    
Vue.component('product', {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:href="link" alt="Product Image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock"> In Stock</p>
                <p v-else
                   v-bind:class="{ lineThrough: !inStock }"> Out of Stock
                </p>
                <p>Shipping: {{ shipping }}</p>

                 <!-- <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out</p>
                <p v-else>Out of Stock</p> -->

                <span v-if="onSale">{{ onSales }}</span> 

                <div v-for="(variant, index) in variants" 
                     v-bind:key="variant.variantId"
                     class="color-box"
                     v-bind:style="{ backgroundColor: variant.variantColor }" 
                     @mouseover="updateProduct(index)">
                </div>

                <button v-on:click="addToCart"  
                        v-bind:disabled="!inStock"
                        v-bind:class="{ disabledButton: !inStock }">Add to Cart</button>

                <button v-on:click="removeCart">Remove from Cart</button>

                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>

            </div>
        </div>
        `,
    data() {
        return { 
        brand: 'Vue Mastery',
        product: 'Socks',
        color: 'White',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Unisex"],
        link: '#hola',
        inventory: 10,
        onSale: true,
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
        }
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
        },
        shipping () {
            if(this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})


var app = new Vue ({
        el: '#app',
        data: { 
            premium:false,
            details:["80% cotton", "20% polyester", "Unisex"]
        } 
    })
