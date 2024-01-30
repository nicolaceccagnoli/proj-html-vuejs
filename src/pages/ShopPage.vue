<script>
    export default {
        data() {
            return {
                productCards: {
                    card1: [
                        "Black hooded sweatshirt",
                        {
                            oldPrice: '$200.00'
                        },
                        {
                             currentPrice: '$129.00'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card2: [
                        "Black t-shirt with lamp print",
                        {
                            oldPrice: ''
                        },
                        {
                            currentPrice: '$45.00'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card3: [
                        "Blue hooded sweatshirt",
                        {
                            oldPrice: '$129.50'
                        },
                        {
                            currentPrice: '$89.90'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card4: [
                        "Brown Hooded Sweatshirt",
                        {
                            oldPrice: '$75.00'
                        },
                        {
                            currentPrice: '$39.50'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card5: [
                        "Gray hooded sweatshirt",
                        {
                            oldPrice: ''
                        },
                        {
                            currentPrice: '$149.00'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card6: [
                        "Navy Blue Hooded Sweatshirt",
                        {
                            oldPrice: ''
                        },
                        {
                            currentPrice: '$79.00'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card7: [
                        "Ninja square poster",
                        {
                            oldPrice: '$60.00'
                        },
                        {
                            currentPrice: '$35.00'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card8: [
                        "Red hooded sweatshirt",
                        {
                            oldPrice: ''
                        },
                        {
                            currentPrice: '$45.90'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    card9: [
                        "Skull square poster",
                        {
                            oldPrice: ''
                        },
                        {
                            currentPrice: '$20.00'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ],
                    /* card10: [
                        "White ninja print t-shirt",
                        {
                            currentPrice: '$90.00'
                        },
                        {
                            oldPrice: ''
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ], */
                }
            };
        }
    }
</script>


<template>
    <div class="my-container mt-5 mb-5">
       <div class="row">
            <div class="col-8 products">
                <div class="products-top">
                    <div class="results">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, a.
                    </div>
                    <div>
                        <select class="form-control">
                            <option value="">
                                Ciao
                            </option>
                            <option value="">
                                a
                            </option>
                            <option value="">
                                tutti
                            </option>
                            <option value="">
                                quanti
                            </option>
                        </select>
                    </div>
                </div>
                <div class="products-bottom">
                    <div class="row g-4">
                        <div class="col d-flex flex-wrap justify-content-center">
                            <div class="card" v-for="(elem, index) in productCards" :key="index">
                                <img class="card-img-top" src="..." alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">{{ elem[0] }}</h5>
                                </div>
                                <div class="card-body d-flex">
                                    <a href="#" class="link" v-for="(elem, index) in elem.slice(1)" :key="index">
                                        <span>
                                            {{ elem.currentPrice }} {{ elem.oldPrice }}  
                                        </span>
                                        <span class="ps-2"></span>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 side-bar">
                ciao
            </div>
       </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
    .products{
        border: 1px solid black;
        display: flex;
        flex-direction: column;

        .products-top{
            display: flex;
            justify-content: space-between;
        }
    }

    .products-bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        .card-body{
            flex: none;
            h5{
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
            }
            
        }

        .row{
            gap: 20px;
        }
    }

    .card{
        height: 300px;
        width: 25%;
        margin: 15px;
        
    }

    .link{
        color: $footer-text-color;
        text-decoration: none;
        list-style: none;
    }

</style>