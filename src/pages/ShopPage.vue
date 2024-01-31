<script>
    export default {
        data() {
            return {
                cards: [
                    {
                        name: "Black hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/6c2a68e896114a498d3c6b82b819e797/adabf4e4e2f44afa9215493f69adf675.jpg?imwidth=300&filter=packshot',
                        oldPrice: '$200.00',
                        currentPrice: '$129.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            1,
                            6,
                            7,
                            12,
                            13
                        ],
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Black t-shirt with lamp print",
                        image: 'https://img01.ztat.net/article/spp-media-p1/bc30f9d073d3426a8a144b12296bf889/dd06e26f3f924218891d325b1ae93887.jpg?imwidth=1800',
                        oldPrice: '',
                        currentPrice: '$45.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            1,
                            9,
                            10
                        ],
                        productCategories: [
                            14,
                            16
                        ]
                    },
                    {
                        name: "Blue hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/822e147936b247af92c04f030ee6d6fe/2567a54dd937420b8ce294646651d389.jpg?imwidth=1800',
                        oldPrice: '$129.50',
                        currentPrice: '$89.90',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            2,
                            6,
                            7,
                            12,
                            13
                        ],
                        productCategories: [
                            14,
                            15
                        ]
                    },
                    {
                        name: "Brown Hooded Sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/5b0e6e64422047ca982b5c3119df4e7c/508019397ce240b791b6b000c78f28b8.jpg?imwidth=1800',
                        oldPrice: '$75.00',
                        currentPrice: '$39.50',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            3,
                            6,
                            7,
                            12,
                            13
                        ],
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Gray hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/9cff1e08e2524fed82d4cf9bfa9960bb/7339bb9026b04b46ae079b041c9593cd.jpg?imwidth=762',
                        oldPrice: '',
                        currentPrice: '$149.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            4,
                            6,
                            7,
                            12,
                            13
                        ],
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Navy Blue Hooded Sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/2a7343c1af794dbbbb92c7dcf6a4f37b/e2ed3a8414f0488487f2dac058d0511a.jpg?imwidth=1800',
                        oldPrice: '',
                        currentPrice: '$79.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            2,
                            6,
                            7,
                            12,
                            13
                        ],
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Ninja square poster",
                        image: 'https://ih1.redbubble.net/image.768696357.5316/fposter,small,wall_texture,product,750x1000.u2.jpg',
                        oldPrice: '$60.00',
                        currentPrice: '$35.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            5,
                            7
                        ],
                        productCategories: [
                            17,
                        ]

                    },
                    {
                        name: "Red hooded sweatshirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/b54d2da806924ff9b57419c113ca7fef/70caa473c6094186bceaeea4b4a4d084.jpg?imwidth=1800',
                        oldPrice: '',
                        currentPrice: '$45.90',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            6,
                            7,
                            8,
                            12,
                            13
                        ],
                        productCategories: [
                            14,
                            15
                        ]

                    },
                    {
                        name: "Skull square poster",
                        image: 'https://images.desenio.com/zoom/7459_2.jpg',
                        oldPrice: '',
                        currentPrice: '$20.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            5,
                            10
                        ],
                        productCategories: [
                            17
                        ]

                    },
                    {
                        name: "White ninja print t-shirt",
                        image: 'https://img01.ztat.net/article/spp-media-p1/f90237dc60e94e52be37af56cacd270c/d009d37d72174406a3430634520ff84f.jpg?imwidth=762',
                        oldPrice: '',
                        currentPrice: '$90.00',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        productTags: [
                            7,
                            9,
                            11
                        ],
                        productCategories: [
                            14,
                            16
                        ]

                    }
                ],
                /* tags: [
                    {
                        id: 1,
                        name: Black
                    },
                    {
                        id: 2,
                        name: Blue
                    },
                    {
                        id: 3,
                        name: Brown
                    },
                    {
                        id: 4,
                        name: Gray
                    },
                    {
                        id: 5,
                        name: House
                    },
                    {
                        id: 6,
                        name: Long_sleeve
                    },
                    {
                        id: 7,
                        name: Ninja
                    },
                    {
                        id: 8,
                        name: Red
                    },
                    {
                        id: 9,
                        name: Shirt
                    },
                    {
                        id: 10,
                        name: Skull
                    },
                    {
                        id: 11,
                        name: White
                    },
                    {
                        id: 12,
                        name: With_hood
                    },
                    {
                        id: 13,
                        name: With_print
                    }

                ],
                categories : [
                    {
                        value: 14,
                        productType: Clothing 
                    },
                    {
                        value: 15,
                        productType: Hoodies
                    },
                    {
                        value: 16,
                        productType: Tshirts
                    },
                    {
                        value: 17,
                        productType: Decor
                    }
                ] */
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
                    <select class="form-select focus-ring focus-ring-dark" aria-placeholder="Default sorting">
                        <option value="" disabled>
                            Default sorting
                        </option>
                        <option value="">
                            Sort by popularity
                        </option>
                        <option value="">
                            Sort by average rating
                        </option>
                        <option value="">
                            Sort by latest
                        </option>
                        <option value="">
                            Sort by price: low to high
                        </option>
                        <option value="">
                            Sort by price: high to low
                        </option>
                    </select>
                </div>
            </div>
            <div class="products-bottom">
                <div class="d-flex flex-wrap cards-container">
                    <div class="card" v-for="(elem, index) in cards" :key="index">
                        <div class="img-box">
                            <img class="card-img-top" :src="elem.image" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ elem.name }}</h5>
                        </div>
                        <div class="card-body d-flex">
                            <a href="#" class="link d-flex justify-content-between">
                                <span class="price">
                                    <span class="old-price">
                                        {{ elem.oldPrice }}
                                    </span> 
                                    <span class="current-price">
                                        {{ elem.currentPrice }} 
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

                <!-- <div class="position-relative">
                    <input type="range" class="position-absolute" min="0" max>
                    <input type="range" class="position-absolute">
                </div> -->
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
                                    {{ cards[2].name }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ cards[2].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ cards[2].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="cards[2].image" alt="">
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ cards[3].name }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ cards[3].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ cards[3].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="cards[3].image" alt="">
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ cards[0].name }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ cards[0].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ cards[0].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="cards[0].image" alt="">
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <div class="background-style">
                                    {{ cards[6].name }}
                                </div>
                                <p>
                                    <span class="old-price">
                                        {{ cards[6].oldPrice }}
                                    </span> 
                                    <span class="ps-2">
                                        {{ cards[6].currentPrice }}
                                    </span>
                                </p>
                            </div>
                            <div class="img-box">
                                <img :src="cards[6].image" alt="">
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
                        <span>
                            <span>
                                <i class="bi bi-folder-fill"></i>
                                <a href="#">
                                    Clothing
                                </a>
                            </span>
                            <span class="category-style">
                                (8)
                            </span>
                        </span>
                        <ul>
                            <li class="ps-4">
                                <span class="pt-2">
                                    <span>
                                        <i class="bi bi-folder-fill"></i>
                                        <a href="#">
                                            Hoodies
                                        </a>
                                    </span>
                                    <span class="category-style">
                                        (6)
                                    </span>
                                </span>
                            </li>
                            <li class="ps-4">
                                <span class="pt-2">
                                    <span>
                                        <i class="bi bi-folder-fill"></i>
                                        <a href="#">
                                            Tshirts
                                        </a>
                                    </span>
                                    <span class="category-style">
                                        (2)
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <span>
                            <span>
                                <i class="bi bi-folder-fill"></i>
                                <a href="#">
                                    Decor
                                </a>
                            </span>
                            <span class="category-style">
                                (2)
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="product-tags">
                <h5>
                    Product Tags 
                </h5>
                <div>
                    <a href="#">
                        <span class="badge">Black</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">Blue</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">Brown</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">Gray</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">House</span>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <span class="badge mt-2">Long sleeve</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">Ninja</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">Red</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">Shirt</span>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <span class="badge mt-2">Skull</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">White</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">With hood</span>
                    </a>
                    <a href="#">
                        <span class="badge ms-2">With print</span>
                    </a>
                </div>

            </div>
        </div>     
    </div>
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

        &:hover{
            background-color: $color-five;
            color: white;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
        }
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

        /* .filter{
            
        } */

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
            width: 350px;

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