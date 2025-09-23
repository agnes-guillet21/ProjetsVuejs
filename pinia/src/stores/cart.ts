import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',

    // State 
    state: () => ({
        refreshKey: 0,
        cart : [
            {
                id: 1,
                name: "Cadeau",
                price: 0,
                quantity: 1
            }
        ]
    }),

    // Getters 
    getters: {
        getCart(state): any {
            this.refreshKey
            return state.cart
        },
        
        getTotalPrice(state): number {
            this.refreshKey
            let total = 0
            state.cart.forEach(p => {
                total += p.price * p.quantity
            });
            return total
        },
    },

    // Actions 
    actions: {
        clearCart() {
            this.cart = []
        },

        deleteProduct(itemId:number) {
            this.cart.splice(this.cart.findIndex(function(i){
                return i.id === itemId
            }), 1)
        },

        addProduct(item:any) {
            const foundIndex = this.cart.findIndex(function(i){
                return i.id === item.id
            })
            if (foundIndex !== -1) {
                item.quantity++
                this.cart[foundIndex] = item
            } else {
                this.cart[this.cart.length] = item
            }
        }
    }
})