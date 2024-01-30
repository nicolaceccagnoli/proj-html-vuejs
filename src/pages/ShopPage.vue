<script>
    export default {
        data() {
            return {
                productCards: {
                    card1: [
                        "Black hooded sweatshirt",
                        {
                            image: 'https://img01.ztat.net/article/spp-media-p1/6c2a68e896114a498d3c6b82b819e797/adabf4e4e2f44afa9215493f69adf675.jpg?imwidth=300&filter=packshot',
                        },
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
                            image: 'https://img01.ztat.net/article/spp-media-p1/bc30f9d073d3426a8a144b12296bf889/dd06e26f3f924218891d325b1ae93887.jpg?imwidth=1800',
                        },
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
                            image: 'https://img01.ztat.net/article/spp-media-p1/822e147936b247af92c04f030ee6d6fe/2567a54dd937420b8ce294646651d389.jpg?imwidth=1800',
                        },
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
                            image: 'https://img01.ztat.net/article/spp-media-p1/5b0e6e64422047ca982b5c3119df4e7c/508019397ce240b791b6b000c78f28b8.jpg?imwidth=1800',
                        },
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
                            image: 'https://img01.ztat.net/article/spp-media-p1/9cff1e08e2524fed82d4cf9bfa9960bb/7339bb9026b04b46ae079b041c9593cd.jpg?imwidth=762',
                        },
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
                            image: 'https://img01.ztat.net/article/spp-media-p1/2a7343c1af794dbbbb92c7dcf6a4f37b/e2ed3a8414f0488487f2dac058d0511a.jpg?imwidth=1800',
                            
                        },
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
                            image: 'https://ih1.redbubble.net/image.768696357.5316/fposter,small,wall_texture,product,750x1000.u2.jpg',
                        },
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
                        image: 'https://img01.ztat.net/article/spp-media-p1/b54d2da806924ff9b57419c113ca7fef/70caa473c6094186bceaeea4b4a4d084.jpg?imwidth=1800',
                        },
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
                            image: 'https://images.desenio.com/zoom/7459_2.jpg',
                        },
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
                            image: 'https://img01.ztat.net/article/spp-media-p1/f90237dc60e94e52be37af56cacd270c/d009d37d72174406a3430634520ff84f.jpg?imwidth=762',
                        },
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
    <div class="my-container my-container-margin d-flex">
        <div class="products">
            <div class="products-top d-flex justify-content-between mx-4">
                <div class="results">
                    <span class="list-size my-rounded">
                        <i class="bi bi-list-ul w-100"></i>
                    </span>
                    <span class="list-text">
                        Showing 1-9 of 10 results
                    </span>
                </div>
                <div class="form-size">
                    <select class="form-select">
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
                <div class="d-flex flex-wrap cards-container">
                    <div class="card" v-for="(elem, index) in productCards" :key="index">
                        <div class="img-box">
                            <img class="card-img-top" :src="elem[1].image" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ elem[0] }}</h5>
                        </div>
                        <div class="card-body d-flex">
                            <a href="#" class="link d-flex justify-content-between" v-for="(elem, index) in elem.slice(1)" :key="index">
                                <span class="price">
                                    <span class="current-price">
                                        {{ elem.currentPrice }} 
                                    </span>
                                    <span class="old-price">
                                        {{ elem.oldPrice }}
                                    </span> 
                                </span>
                            </a>
                            <a href="#" class="shop-cart">
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
                <h5>
                    Filter by Price
                </h5>

                <div>

                </div>
            </div>
            <!-- <div class="recently">
                <h5>
                    Recently Viewed
                </h5>
            </div> -->
            <div class="on-sale">
                <h5>
                    On-sale Products
                </h5>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ productCards.card3[0] }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ productCards.card3[2].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ productCards.card3[3].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="productCards.card3[1].image" alt="">
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ productCards.card4[0] }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ productCards.card4[2].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ productCards.card4[3].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="productCards.card4[1].image" alt="">
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ productCards.card1[0] }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ productCards.card1[2].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ productCards.card1[3].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="productCards.card1[1].image" alt="">
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ productCards.card7[0] }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ productCards.card7[2].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ productCards.card7[3].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="productCards.card7[1].image" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product-categories">
                <h5>
                    Product Categories
                </h5>
                <ul>
                    <li>
                        <span class="d-flex justify-content-between">
                            <span>
                                <i class="bi bi-folder-fill"></i> Clothing
                            </span>
                            <span class="category-style">
                                (8)
                            </span>
                        </span>
                        <ul>
                            <li class="ps-4">
                                <span class="d-flex justify-content-between pt-2">
                                    <span>
                                        <i class="bi bi-folder-fill"></i> Hoodies
                                    </span>
                                    <span class="category-style">
                                        (6)
                                    </span>
                                </span>
                            </li>
                            <li class="ps-4">
                                <span class="d-flex justify-content-between pb-2">
                                    <span>
                                        <i class="bi bi-folder-fill"></i> Tshirts
                                    </span>
                                    <span class="category-style">
                                        (2)
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <span class="d-flex justify-content-between">
                            <span>
                                <i class="bi bi-folder-fill"></i> Decor
                            </span>
                            <span class="category-style">
                                (2)
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>     
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

    .my-container-margin{
        padding: 60px 0 150px 0;
    }
    .products{
        display: flex;
        flex-direction: column;
        width: 70%;

        .form-size{
            margin-right: 55px;
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

    .products-bottom{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

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

    .my-rounded{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #D9F2F2;
        padding: 10px;
    }
    .card{
        height: 350px;
        width: calc(100% / 3.7);
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
            
        }

        .recently{
            height: 500px;
        }

        .on-sale{
            margin-bottom: 45px;
        }

        .product-categories{
            height: 300px;
            width: 350px;
            position: relative;

            .category-style{
                position: absolute;
                right: 0;
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