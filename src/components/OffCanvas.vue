<script>
import { store } from '../store';


    export default {
        data() {
            return {
                store,
                }
            },
            methods: {
            },
            mounted() {
                console.log(this.store.globalCart);
            }
        }
</script>


<template>

    <!-- Qui inizia l'Offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-2" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

        <!-- Qui inizia l'Offcanvas da mostrare per la Mappa -->
        <div 
        v-show="store.showMapOffcanvas"
        class="offcanvas-body maps">
            <div class="row"> 
                <div class="col-auto">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>  
            </div>
        </div>
        <!-- Qui finisce l'Offcanvas da mostrare per la Mappa -->

        <!-- Qui inizia l'Offcanvas da mostrare per il Search -->
        <div
        v-show="store.showSearchOffcanvas"
        class="offcanvas-body">
            <div class="row search"> 
                <div class="col-auto">
                    <div class="row"> 
                        <div class="col-auto">
                            <button type="button" class="my-button" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i class="bi bi-arrow-left"></i>
                            </button>
                        </div>  
                    </div>
                    <div class="row flex-column justify-content-center">
                        <div class="co-12">
                            <h2>
                                What are you looking for?
                            </h2>
                        </div>
                        <div class="col-12">
                            <input type="text" placeholder="Enter Keywords">
                        </div>
                        <div class="col-auto">
                            <button id="search-button" type="submit">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <!-- Qui finisce l'Offcanvas da mostrare per il Search -->
        
        <!-- Qui inizia l'Offcanvas da mostrare per lo Shop -->
        <div 
        v-show="store.showShopOffcanvas"
        class="offcanvas-body shop">
            <button type="button" class="my-button" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="bi bi-arrow-left"></i>
            </button>
            <div class="row">
                <div class="col-12">
                    <img src="/public/images/empty-bin.png" alt="empty-bin">
                </div>
                <div class="col-12 text-center">
                    <h2>
                        No products in the Cart.
                    </h2>
                </div>
            </div>
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
        <!-- Qui inizia l'Offcanvas da mostrare per lo Shop -->
           
    </div>
    <!-- Qui finisce l'Offcanvas -->

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

.offcanvas {
    .btn-close {
        font-size: 24px;
        background-color: $color-one;
        border-radius: 50%;
    }

    .offcanvas-body.maps{
        background: url('/public/images/google-maps.png');
        background-size: cover;
    }

    .search{
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        .my-button {
            background: none;
            border: none;
            margin-bottom: 30px;

            i {
                font-size: 24px;
            }
        }
    }

    input {
        border: none;
        border-radius: 5px;
        background-color: $input-search-off-color;
        padding: 8px 12px;
        margin-top: 30px;
        width: 80%;
    }

    #search-button {
        margin-top: 30px;
        border: none;
        border-radius: 5px;
        padding: 4px 12px;
        background-color: $input-search-off-color;
    }

    .offcanvas-body.shop{

        img {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
        .my-button {
            background: none;
            border: none;
            margin-bottom: 30px;

            i {
                font-size: 24px;
            }
        }

        .list-group{
            width: 350px;
            border-radius: 0px;
        }

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

    }


}


</style>