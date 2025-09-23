import { defineStore } from 'pinia'

export const useRecetteStore = defineStore({
    id: 'recette',

    // State / État
    state: () => ({
        recettes : [
            {
                id: 1,
                image: "https://i.imgur.com/0umadnY.jpg",
                name: "Burger",
                description:
                    "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis d'une galette de steak haché et de crudités, salade, tomate, oignon, cornichon ainsi que de sauce.",
                note: 4
            },
            {
                id: 2,
                image: "https://i.imgur.com/b9zDbyb.jpg",
                name: "Pizza",
                description:
                    "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four.",
                note: 5
            },
            {
                id: 2,
                image: "https://i.imgur.com/0umadnY.jpg",
                name: "Burger 2",
                description:
                    "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis d'une galette de steak haché et de crudités, salade, tomate, oignon, cornichon ainsi que de sauce.",
                note: 4
            },
            {
                id: 4,
                image: "https://i.imgur.com/b9zDbyb.jpg",
                name: "Pizza 2",
                description:
                    "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four.",
                note: 5
            }
        ]
    }), // Fin du state

    // Getters 
    getters: {
        getRecettes: (state) => state.recettes,
        getFirstRecette: (state) => state.recettes[0],
    },

    // Actions 
    actions: {
        resetStore() {
            this.recettes = []
        },

        deleteRecette(itemId:number) {
            this.recettes.splice(this.recettes.findIndex(function(i){
                return i.id === itemId
            }), 1)
        },

        updateRecette(item:any) {
            const foundIndex = this.recettes.findIndex(function(i){
                return i.id === item.id
            })
            if (foundIndex !== -1) {
              this.recettes[foundIndex] = item
            } else {
                item.id = Math.random().toString(16).slice(2) // Unique ID
                this.recettes[this.recettes.length] = item
            }
        },
    }
})