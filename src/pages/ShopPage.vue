<script>
    import Slider from '@vueform/slider';
    import "@vueform/slider/themes/default.css";
    import { store } from '../store';
    import Offcanvas from '../components/OffCanvas.vue';
    export default {
        data() {
            return {
                // array creato per passare nel mounted le info dall'array cards
                productsArray: [],
                // array che mi seleziona solo gli elementi appartenenti a quel valore
                selectedProducts: [],
                // dichiarato store per accedere a data globali
                store,
                // array che si riempie una volta cliccato su una card
                cart: [],
                // valore di default della select
                selectedSort: 'default',
                // flag impostata a false per nascondere inizialmente l'immagine 
                showEmptyCart: false,
                // flag impostata a false per nascondere inizialmente lo shop cart
                showCart: false,
                // valori che mi definiscono le caratteristiche del mio slider
                value: [0, 150],
                min: 20,
                max: 150,
                step: 10,
                tooltips: false,
                // array che mi stabilisce le caratteristiche di ogni prodotto presente in pagina 
                cards: [
                    {
                        name: "Black hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/6c2a68e896114a498d3c6b82b819e797/adabf4e4e2f44afa9215493f69adf675.jpg?imwidth=300&filter=packshot',
                        oldPrice: '$200.00',
                        currentPrice: '129.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2023-12-31',
                        popularity: '7.4',
                        default: '1',
                        // tag specifici del prodotto
                        productTags: [
                            1,
                            6,
                            7,
                            12,
                            13
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Black t-shirt with lamp print",
                        image: 'https://img01.ztat.net/article/spp-media-p1/bc30f9d073d3426a8a144b12296bf889/dd06e26f3f924218891d325b1ae93887.jpg?imwidth=1800',
                        oldPrice: null,
                        currentPrice: '45.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-01',
                        popularity: '7',
                        default: '2',
                        // tag specifici del prodotto
                        productTags: [
                            1,
                            9,
                            10
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            16
                        ]
                    },
                    {
                        name: "Blue hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/822e147936b247af92c04f030ee6d6fe/2567a54dd937420b8ce294646651d389.jpg?imwidth=1800',
                        oldPrice: '$129.50',
                        currentPrice: '89.90',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-02',
                        popularity: '8.4',
                        default: '3',
                        // tag specifici del prodotto
                        productTags: [
                            2,
                            6,
                            7,
                            12,
                            13
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            15
                        ]
                    },
                    {
                        name: "Brown Hooded Sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/5b0e6e64422047ca982b5c3119df4e7c/508019397ce240b791b6b000c78f28b8.jpg?imwidth=1800',
                        oldPrice: '$75.00',
                        currentPrice: '39.50',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-03',
                        popularity: '6.2',
                        default: '4',
                        // tag specifici del prodotto
                        productTags: [
                            3,
                            6,
                            7,
                            12,
                            13
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            15
                        ]
                    },
                    {
                        name: "Gray hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/9cff1e08e2524fed82d4cf9bfa9960bb/7339bb9026b04b46ae079b041c9593cd.jpg?imwidth=762',
                        oldPrice: null,
                        currentPrice: '149.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-04',
                        popularity: '9',
                        default: '5',
                        // tag specifici del prodotto
                        productTags: [
                            4,
                            6,
                            7,
                            12,
                            13
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            15
                        ]
                    },
                    {
                        name: "Navy Blue Hooded Sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/2a7343c1af794dbbbb92c7dcf6a4f37b/e2ed3a8414f0488487f2dac058d0511a.jpg?imwidth=1800',
                        oldPrice: null,
                        currentPrice: '79.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-05',
                        popularity: '7.8',
                        default: '6',
                        // tag specifici del prodotto
                        productTags: [
                            2,
                            6,
                            7,
                            12,
                            13
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Ninja square poster",
                        image: 'https://ih1.redbubble.net/image.768696357.5316/fposter,small,wall_texture,product,750x1000.u2.jpg',
                        oldPrice: '$60.00',
                        currentPrice: '35.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-06',
                        popularity: '5.5',
                        default: '7',
                        // tag specifici del prodotto
                        productTags: [
                            5,
                            7
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            17,
                        ]
                    },
                    {
                        name: "Red hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/b54d2da806924ff9b57419c113ca7fef/70caa473c6094186bceaeea4b4a4d084.jpg?imwidth=1800',
                        oldPrice: null,
                        currentPrice: '45.90',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-07',
                        popularity: '8',
                        default: '8',
                        // tag specifici del prodotto
                        productTags: [
                            6,
                            7,
                            8,
                            12,
                            13
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Skull square poster",
                        image: 'https://images.desenio.com/zoom/7459_2.jpg',
                        oldPrice: null,
                        currentPrice: '20.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-08',
                        popularity: '9.4',
                        default: '9',
                        // tag specifici del prodotto
                        productTags: [
                            5,
                            10
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            17
                        ]

                    },
                    {
                        name: "White ninja print t-shirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/3f869be934ef4e359beb6f3bcc817d23/1bf2d8defd5e4db89d557980a31a5850.jpg?imwidth=156',
                        oldPrice: null,
                        currentPrice: '90.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: '2024-01-09',
                        popularity: '7.1',
                        default: '10',
                        // tag specifici del prodotto
                        productTags: [
                            7,
                            9,
                            11
                        ],
                        // categorie specifiche del prodotto
                        productCategories: [
                            14,
                            16
                        ]

                    }
                ],
                // array in cui sono presenti tutti i tag con relativo id
                tags: [
                    {
                        id: 1,
                        name: 'Black'
                    },
                    {
                        id: 2,
                        name: 'Blue'
                    },
                    {
                        id: 3,
                        name: 'Brown'
                    },
                    {
                        id: 4,
                        name: 'Gray'
                    },
                    {
                        id: 5,
                        name: 'House'
                    },
                    {
                        id: 6,
                        name: 'Long sleeve'
                    },
                    {
                        id: 7,
                        name: 'Ninja'
                    },
                    {
                        id: 8,
                        name: 'Red'
                    },
                    {
                        id: 9,
                        name: 'Shirt'
                    },
                    {
                        id: 10,
                        name: 'Skull'
                    },
                    {
                        id: 11,
                        name: 'White'
                    },
                    {
                        id: 12,
                        name: 'With hood'
                    },
                    {
                        id: 13,
                        name: 'With print'
                    }

                ],
                // array in cui sono presenti tutte le categorie con relativo id
                categories: [
                    {
                        value: 14,
                        productType: 'Clothing',
                        pieces: 8
                    },
                    {
                        value: 15,
                        productType: 'Hoodies',
                        pieces: 6
                    },
                    {
                        value: 16,
                        productType: 'Tshirts',
                        pieces: 2
                    },
                    {
                        value: 17,
                        productType: 'Decor',
                        pieces: 2
                    }
                ],
                // array che mi definisce le opzioni della select
                options: [
                    {
                        option: 'Default sorting',
                        value: 'default'
                    },
                    {
                        option: 'Sort by popularity',
                        value: 'popularity'
                    },
                    {
                        option: 'Sort by latest',
                        value: 'latest'
                    },
                    {
                        option: 'Sort by price: low to higher',
                        value: 'lowToHigh'
                    },
                    {
                        option: 'Sort by price: higher to low',
                        value: 'highToLow'
                    },
                ]
            };
        },
        methods: {
            selectedProduct(id){
                if(this.showEmptyCart == true){
                    this.showEmptyCart = false
                }

                this.selectedProducts = [];

                // controllo se il prodotto selezionato è già presente o meno, lo pusho se non è presente
                if (!this.selectedProducts.includes(id)) {
                    this.selectedProducts.push(id)
                } 
                else {
                    // variabile che mi controlla che selectedProducts corrisponda al suo stesso indice
                    const elem = this.selectedProducts.indexOf(id);
                    this.selectedProducts.splice(elem, 1);
                }
                
                // svuoto l'array temporaneo
                this.productsArray = [];

                // funzione per controllare i miei 2 array 
                const isSubset = (array1, array2) =>
                array2.every((element) => array1.includes(element));
                
                // ciclo di controllo dei prodotti in productsArray
                for (let card in this.cards) {

                    // se i tag corrispondono, il prodotto viene aggiunto al nuovo array
                    if (isSubset(this.cards[card].productTags, this.selectedProducts)) {
                        this.productsArray.push(this.cards[card]);
                    }

                    // se le categorie corrispondono, il prodotto viene aggiunto al nuovo array
                    else if (isSubset(this.cards[card].productCategories, this.selectedProducts)) {
                        this.productsArray.push(this.cards[card]);
                    }
                }
            },

            // funzione per lo slider che aggiunge a productsArray solo i prodotti che hanno un currentPrice compreso tra i valori selezionati nello Slider 
            filteredProducts() {
                if(this.showEmptyCart == true){
                    this.showEmptyCart = false
                }
                this.productsArray = this.cards.filter(
                    (card) =>
                    card.currentPrice >= this.value[0] && card.currentPrice <= this.value[1],
                );
            },
            // funzione collegata ad un bottone che sul click mi applica la funzione di sopra
            filterProducts(){
                this.filteredProducts();
            },

            // funzione che aggiunge a cart i valori assegnati se clicco su un bottone
            addToCart(card) {

                // condizione per far vedere o meno l'immagine
                if(this.showEmptyCart == true){
                    this.showEmptyCart = false
                }
                // trasformo currentPrice in un numero
                const currentPrice = Number(card.currentPrice);

                // condizione per cui se currentPrice non è NaN allora me lo aggiunge a cart
                if (!isNaN(currentPrice)) {

                // pusho l'elemento cliccato nell'array cart (solo i valori che mi interessano)
                this.cart.push({ name: card.name, currentPrice: currentPrice.toFixed(2), image: card.image });
                this.store.globalCart.push({ name: card.name, currentPrice: currentPrice.toFixed(2), image: card.image });
                }
            },

            // funzione che mi rimuove al click un prodotto dall'array cart
            removeFromCart(index) {
                this.cart.splice(index, 1)

                // se la lunghezza di cart è 0 allora mi mostra l'immagine
                if(this.cart.length == 0){
                    this.showEmptyCart = true
                }
                if(this.store.globalCart.length == 0){
                    this.showEmptyCart = true
                }
                
            },

            // funzione che mi restituisce il totale dei prodotti 
            getCartTotal() {
                // verifico ogni elemento di cart grazie a reduce
                // il primo argomento mi memorizza la somma durante il ciclo, item rappresenta i prodotti all'interno di cart - il valore iniziare da cui deve partire il total è 0
                const total = this.cart.reduce((total, item) => total + Number(item.currentPrice), 0);
                const globalTotal = this.store.globalCart.reduce((total, item) => total + Number(item.currentPrice), 0);
                console.log('Cart Total:', total);
                return total, globalTotal;
            },

            // arrotondo il totale a due cifre dopo la virgola
            totalPrice(price) {
                return Number(price).toFixed(2);
            },

            // funzione utilizzata per cambiare option che ti cambia l'ordine dei prodotti all'interno di cards in base al valore di ogni card
            // collegata a @change sulla select 
            sortedCards() {

                // condizione che mi mette le card in ordine dal prezzo più basso a quello più alto
                if (this.selectedSort === 'lowToHigh') {
                    this.cards.sort((a, b) => a.currentPrice - b.currentPrice);
                }

                // condizione che mi mette le card in ordine dal prezzo più alto a quello più basso
                else if (this.selectedSort === 'highToLow') {
                    this.cards.sort((a, b) => b.currentPrice - a.currentPrice);
                }

                // condizione che mi mette le card in ordine dalla data più recente  
                else if (this.selectedSort === 'latest') {
                    this.cards.sort((a, b) => new Date(b.date) - new Date(a.date));
                }

                // condizione che mi mette le card in ordine la popolarità - valore dato nell'array cards
                else if (this.selectedSort === 'popularity') {
                    this.cards.sort((a, b) => b.popularity - a.popularity);
                }

                // condizione che mi mette le card in ordine default - come sono messi nell'array cards
                else if (this.selectedSort === 'default') {
                    this.cards.sort((a, b) => a.default - b.default);
                }
            },

            // funzione che mi restituisce solo valori di tipo string
            filteredPrices(cards) {
                return cards.filter(cards => typeof cards.oldPrice === 'string');
            }
        },

        // assegno l'array cards a productsArray
        mounted() {
            this.productsArray = this.cards;
        },

        // aggiungo i component slider e offcanvas
        components: {
            Slider,
            Offcanvas
        }
    }
</script>


<template>
    <div class="my-container my-container-margin d-flex">
        <div class="products">
            <div class="products-top d-flex justify-content-between mx-4">
                <div class="results">
                    <span class="list-size my-rounded">
                        <i class="bi bi-list-ul w-100"></i>
                    </span>
                    <span class="list-text">
                        Showing {{ productsArray.length }} of 10 results
                    </span>
                </div>
                <div class="form-size">
                    <!-- @change sulla select -->
                    <select class="my-form-select" id="sortSelect" v-model="selectedSort" @change="sortedCards" placeholder="Default sorting">
                        <option :value="elem.value" selected v-for="(elem, index) in options" :key="index">
                            {{ elem.option }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="products-bottom">
                <div class="d-flex flex-wrap cards-container">
                    <div class="card" v-for="(elem, index) in productsArray" :key="index">
                        <div class="img-box">
                            <img class="card-img-top" :src="elem.image" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ elem.name }}</h5>
                        </div>
                        <div class="card-body d-flex">
                            <a href="#" class="link d-flex justify-content-between">
                                <span class="price ps-3">
                                    <span class="old-price">
                                        {{ elem.oldPrice }}
                                    </span> 
                                    <span class="current-price ps-2">
                                        ${{ elem.currentPrice }} 
                                    </span>
                                </span>
                            </a>
                            <a href="#nogo" class="shop-cart" @click="addToCart(elem)">
                                <span class="my-rounded">
                                    <i class="bi bi-cart-plus"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <div class="filter">
                <h5 class="pb-4">
                    Filter by Price
                </h5>
                <div>
                    <div>
                        <!-- slider inserito dopo averlo installato -->
                        <Slider v-model="value" :min="min" :max="max" :step="step" :tooltips="tooltips" class="slider"> </Slider>
                    </div>
                    <div class="d-flex pt-5 justify-content-between">
                        <button class="btn filter-button" @click="filterProducts()">
                            Filter
                        </button>
                        <div>
                            <p class="pt-2 filter-price">
                                Price: ${{ value[0] }} - ${{ value[1] }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-cart mt-5" v-if="cart.length > 0">
                <h5>
                    Shop Cart
                </h5>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between" v-for="(item, index) in cart" :key="index">
                            <div class="d-flex">
                                <div class="img-box position-relative">
                                    <img :src="item.image" :alt="item.name">
                                    <div class="remove-item">
                                        <a href="#nogo" @click="removeFromCart(index)">
                                            ×
                                        </a>
                                    </div>
                                </div>
                               <span class="ps-3 pt-3">
                                    {{ item.name }}
                               </span>
                               
                            </div>
                            <div class="pt-3">
                                ${{ item.currentPrice }}
                            </div>
                        </li>
                        <div class="py-4 fw-bold d-flex justify-content-between">
                            <div>
                                Subtotal:
                            </div>
                            <div>
                                ${{ totalPrice(getCartTotal()) }}
                            </div>
                        </div>
                        <div class="py-3 fw-bold d-flex justify-content-between gap-3">
                            <button class="btn cart-button">
                                View Cart
                            </button>
                            <button class="btn cart-button">
                                Checkout
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="empty-bin" v-if="showEmptyCart">
                <img src="../../public/images/empty-bin.png" alt="" />
            </div>
            <div class="on-sale pt-4">
                <h5>
                    On-sale Products
                </h5>
                <div>
                    <ul class="list-group" v-for="(card, index) in filteredPrices(cards)" :key="index">
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ card.name }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ card.oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        ${{ card.currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="card.image" :alt="card.name">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product-categories">
                <h5>
                    Product Categories
                </h5>
                <ul v-for="(category, index) in categories" :key="index">
                    <li>
                        <span class="padding">
                            <i class="bi bi-folder-fill"></i>
                            <a href="#nogo" @click="selectedProduct(category.value)">
                                {{ category.productType }}
                            </a>
                        </span>
                        <span class="category-style">
                            ({{ category.pieces }})
                        </span>
                    </li>
                </ul>
            </div>
            <div class="product-tags">
                <h5>
                    Product Tags 
                </h5>
                <div class="d-flex flex-wrap gap-2">
                    <div v-for="(tag, index) in tags" :key="index"> 
                        <a href="#nogo" @click="selectedProduct(tag.id)">
                            <span class="badge">{{ tag.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>     
    </div>
    <Offcanvas/>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

    .my-container-margin{
        padding: 60px 0 500px 0;
    }
    .products{
        display: flex;
        flex-direction: column;
        width: 70%;

        .form-size{
            margin-right: 70px;
        }

        .my-form-select{
            border: none;
            box-shadow: none;
            padding: 10px;
            color: $main-text-color;
        }

        .products-top{
            display: flex;
            padding-top: 20px;

            .list-size{
                font-size: 20px;
                color: $color-one;
                font-weight: bold;
            }

            .list-text{
                color: $main-text-color;
                padding-left: 5px;
            }
            
        }
    }
    .remove-item{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #FBE6E9;
        line-height: 20px;
        text-align: center;
        position: absolute;
        right: -10px;
        top: -10px;

        a{
            text-decoration: none;
            color: #D90A2C;
            font-weight: lighter;
        }
    }

    .cart-button{
        width: 170px;
        background-color: #EDEDED;
        color: $main-text-color;

        &:hover{
            background-color: $color-five;
            color: white;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
        }
    }

    .products-bottom{
        width: 100%;
        display: flex;

        .cards-container{
            max-height: 1100px;
        }
        .card-body{
            
            h5{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
                padding: 60px 30px 0px 20px;
                font-weight: bold;
            }
            
        }
    }

    .empty-bin{
        width: 350px;
        height: 350px;
        padding-left: 20px;
        padding-top: 40px;

        img{
            width: 100%;
        }
    }

    .filter-button{
        background-color: #EDEDED;
        color: $main-text-color;

        &:hover{
            background-color: $color-five;
            color: white;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
        }
    }

    .filter-price{
        color: $color-two;
        font-weight: bold;
    }

    .slider{
        --slider-bg: #E5E5E5;
        --slider-connect-bg: #D9F2F2;
        --slider-height: 8px;
        --slider-handle-bg: #73CECE;
        --slider-handle-width: 16px;
        --slider-handle-height: 16px;
        --slider-handle-ring-width: 0;
        --slider-handle-shadow: 0;
    }

    .my-rounded{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #D9F2F2;
        padding: 10px;

        &:hover{
            background-color: $color-five;
            color: white;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
        }
    }
    .card{
        height: 350px;
        width: 220px;
        margin: 15px;
        border: none;
        border-radius: 15px;
        box-shadow: 0 4px 4px rgb(0 0 0 / 4%), 0 4px 10px rgb(0 0 0 / 15%);
        position: relative;
        cursor: pointer;

        &:hover{
            box-shadow: 0 4px 4px rgb(0 0 0 / 15%), 0 4px 10px rgb(0 0 0 / 30%);
        }

        .shop-cart{
            position: absolute;
            bottom: 15px;
            right: 15px;
            font-size: 20px;
            color: $color-one;
            font-weight: bold;
        }


        .card-img-top{
            height: 250px;
            object-fit: cover;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
        }

        .price{
            padding-left: 5px;
        }

        .card-body{
            padding: 0;
        }

        .img-box{
            width: 100%;
            height: 200px;
            object-fit: cover;
            

            .img{
                width: 100%;
                height: 50%;
                object-fit: contain;
            }
        }
        
    }

    .old-price{
        text-decoration: line-through;
        color: #AFB6BA;
        
    }

    .current-price{
        color: #606D75;
        padding-left: 3px;
    }

    .link{
        color: $footer-text-color;
        text-decoration: none;
        list-style: none;
    }

    .sidebar{
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        width: 25%;

        h5{
            margin-bottom: 15px;
            font-weight: bold;
        }

        .filter{
            width: 350px;
        } 

        .recently{
            height: 500px;
        }

        .on-sale{
            margin-bottom: 45px;
        }

        .product-categories{
            margin-bottom: 50px;
            width: 350px;
            position: relative;

            .padding:nth-child(4){
                padding-left: 20px;
            }

            a{
                text-decoration: none;
                list-style: none;
                color: $main-text-color;

                &:hover{
                    color: #A6E0E0;
                    -webkit-transition: all 0.3s ease-out 0s;
                    transition: all 0.3s ease-out 0s;
                }
            }

            .category-style{
                position: absolute;
                right: 0;
            }
        }

        .product-tags{
            width: 320px;

            .badge{
                padding: 10px;
                border-radius: 4px;
                font-size: 15px;
                font-weight: lighter;
                background-color: #EDEDED;
                color: $main-text-color;

                &:hover{
                    background-color: $color-five;
                    color: white;
                    -webkit-transition: all 0.3s ease-out 0s;
                    transition: all 0.3s ease-out 0s;
                }
            }
        }

        #my-list-group{
            border-radius: none;
        }

        .list-group{
            width: 350px;
            border-radius: 0px;

            .list-group-item{
                border: none;
                border-bottom: 1px solid lightgray;
                margin-top: 15px;
                padding-left: 0px;
                color: $main-text-color;
                font-weight: bold;

                .img-box{
                    width: 50px;
                    height: 50px;
                    margin-bottom: 5px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .background-style{
                position: relative;

                &::before{
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 3px;
                    width: 100%;
                    height: 42%;
                    background-color: #00A6A626;
                }
            }
        }

        ul{
            list-style: none;
            
            i{
                color: $color-three;
                padding-right: 7px;
            }

            li{
                padding: 10px;
                color: $main-text-color;
            }
        }
    }

</style>