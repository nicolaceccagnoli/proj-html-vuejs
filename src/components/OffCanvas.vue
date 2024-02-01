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
        }
</script>


<template>
    <div class="offcanvas offcanvas-end" tabindex="-2" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
        </div>
    </div>
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
        background-color: #E1E1E1;
        padding: 8px 12px;
        margin-top: 30px;
        width: 80%;
    }

    #search-button {
        margin-top: 30px;
        border: none;
        border-radius: 5px;
        padding: 4px 12px;
        background-color: #E1E1E1;
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

    }


}


</style>