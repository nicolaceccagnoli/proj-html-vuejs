<script >
import { RouterLink } from 'vue-router';
import { store } from '../store';


    export default {
    data() {
        return {
            store,

            scrollPosition: false,

            menuDataDemo: [
                {
                title:'demo',
                subMenu: [
                    {label:'home1'},
                    {label:'home2'},
                    {label:'home3'},                    
                    ]
                }
            ],

            menuDataPage: [
                {
                title:'page ',
                subMenu: [
                    {label:'about us'},
                    {label:'services'},
                    {label:'single Service'},
                    {label:'Pricing Table'},                  
                    ]
                }
            ],

            menuDataPortfolio: [
                {
                title:'portfolio ',
                subMenu: [
                    {label:'full width'},
                    {label:'with Sidebar'},
                    {label:'single portflio'},                 
                    ]
                }
            ],

            menuDataBlog: [
                {
                title:'blog ',
                subMenu: [
                    {label:'full width'},
                    {label:'with Sidebar'},
                    {label:'single post'},                 
                    ]
                }
            ]
        };
    },
    methods: {
        userScroll() {
            this.scrollPosition = window.scrollY > 0;
        },

        showSearchOffcanvas() {

            if (this.store.showMapOffcanvas) {
                this.store.showMapOffcanvas = false
            }

            if (this.store.showShopOffcanvas) {
                this.store.showShopOffcanvas = false
            }

            this.store.showSearchOffcanvas = true;
            console.log('OFFCANVAS SEARCH')
            console.log('FLAG SEARCH',this.store.showSearchOffcanvas);
            console.log('FLAG MAPPA',this.store.showMapOffcanvas)
        },
        showShopOffcanvas() {
            if (this.store.showSearchOffcanvas) {
                this.store.showSearchOffcanvas = false;
            }

            if (this.store.showMapOffcanvas) {
                this.store.showMapOffcanvas = false;
            }

            this.store.showShopOffcanvas = true;
            
            console.log('OFFCANVAS MAPPE')
            console.log('FLAG SEARCH',this.store.showSearchOffcanvas);
            console.log('FLAG MAPPA',this.store.showMapOffcanvas)
        }
    },
    mounted() {
        window.addEventListener('scroll', this.userScroll);
        console.log(this.scrollPosition);
    },
    beforeDestroy() {
        window.addEventListener('scroll', this.userScroll);
    },
    components: { RouterLink }
}
</script>

<template>
    <div
    class="debug new-header-top">
        <!--header top-->
        <div id="header-top">
            <div class="my-container h-100">
                <nav id="nav-header" class="row g-0 justify-content-between align-items-center h-100">
                    <!--nav-info-->
                    <div class="col-auto">
                        <ul>
                            <li>
                                <a 
                                href="#">
                                    <i class="bi bi-clock-fill"></i>
                                    orari di apertura: Lun - Sab - 9:00 - 18:00
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-auto">
                        <ul>
                            <li>
                                <a 
                                href="#">
                                    <i class="bi bi-telephone-fill ms-2"></i>
                                    +1 123456789
                                </a>
                            </li>
                            <li>
                                <a 
                                href="#">
                                    <i class="bi bi-envelope-fill ms-2"></i>
                                    lorem@lorem.com
                                </a>
                            </li> 
                            <li>
                                <a 
                                href="#">
                                    <i class="bi bi-facebook ms-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="bi bi-twitter m-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="bi bi-linkedin m-2"></i>
                                </a>
                            </li>                                
                        </ul>                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
    
    <div 
    :class="{
                'active-bg' : scrollPosition > 0,
                'fixed-header': scrollPosition > 0 
            }" 
    class="new-header-bottom">
        <div 
        class="my-container bottom-container">

            <div 
            id="header-button" 
            class="d-flex align-items-center">
                <div class="w-100 d-flex justify-content-between">
                    <!--header top-->
                    <div class="container-logo">
                        <router-link to="/">
                            <img src="/public/logo.png" alt="logo">
                        </router-link>
                    </div>

                    <div class="container-info d-flex align-items-center">

                        <!--DEMO-->
                        <div v-for="(option, i) in menuDataDemo"
                        :key="i" id="drop-down" class="d-flex">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">
                                            {{option.title}}
                                            <i class="bi bi-arrow-down-short"></i>
                                        </a>
                                        <ul>
                                            <li v-for="(list, index) in option.subMenu">
                                                <a href="#">
                                                    {{ list.label }}
                                                </a>
                                            </li>                                        
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <!--PAGE-->
                        <div v-for="(option, j) in menuDataPage"
                        :key="j"
                        id="drop-down" class="d-flex">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">
                                            {{option.title}}
                                            <i class="bi bi-arrow-down-short"></i>
                                        </a>
                                        <ul>
                                            
                                            <li v-for="(list,index) in option.subMenu"
                                            :key="index">
                                            <router-link v-if="list.label === 'services'" :to="{name: 'services'}">
                                                {{ list.label }}
                                            </router-link>
                                            <a v-else href="#">
                                                {{ list.label }}
                                                
                                            </a>
                                        </li>                                        
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <!--PORTFOLIO-->
                        <div v-for="(option, k) in menuDataPortfolio"
                        :key="k"
                        id="drop-down" class="">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">
                                            {{option.title}}
                                            <i class="bi bi-arrow-down-short"></i>
                                        </a>
                                        <ul>
                                            <li v-for="(list, index) in option.subMenu">
                                                <a href="#">{{list.label}}</a>
                                            </li>                                       
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <!--BLOG-->
                        <div v-for="(option, l) in menuDataBlog"
                        :key="l"
                        id="drop-down" class="d-flex">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">
                                            {{option.title}}
                                            <i class="bi bi-arrow-down-short"></i>
                                        </a>
                                        <ul>
                                            <li v-for="(list, index) in option.subMenu">
                                                <a href="#">
                                                    {{ list.label }}
                                                </a>
                                            </li>                                        
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <!--links/button-->
                        <nav class="nav-icon ">
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'shop' }">
                                        Shop
                                    </router-link>
                                </li>
                                <li>
                                    <button
                                    @click="showSearchOffcanvas()"
                                    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                    href="#">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </li>

                                <li>
                                    <button
                                    @click="showShopOffcanvas()"
                                    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                    href="#">
                                        <i class="bi bi-handbag"></i>
                                    </button>
                                </li>
                                
                                <li id="button-header">
                                    <a href="#">
                                        BUY NEXGEN
                                    </a>
                                </li>
                            </ul>              
                        </nav>
                    </div>                                                        
                </div>
            </div> 
        </div>
               
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.new-header-bottom {
    background: rgb(16,75,85);
    background: linear-gradient(35deg, rgba(16,75,85,1) 30%, rgba(5,130,131,1) 66%);
}

.active-bg {
    background-image: linear-gradient(45deg, #0E1D2C 15%, #1B4863 85%);
}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
.color-hover {
    :hover {
        color:$color-one;
    }
}
#header-top {
    background-image: linear-gradient(45deg, #0E1D2C 15%, #1B4863 85%);
    color: $color-two;
    height: 50px;

    nav {
        ul {
            list-style: none;
        }
    
    a {
        text-decoration: none;
        color: #BEC1CE;  
    } :hover {
        color:$color-one;
    }
}
}

#header-button {
    height: 80px;
}

.bi-search, .bi-handbag {
    color: $color-two;
} :hover {
        color:$color-one;
    }
.container-logo {
    width: 150px;
    img {
        width: 100%;
    }
}
nav {
    ul {
        display: flex;
        list-style: none;
    }
    li {
        display: flex;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: #BEC1CE; 
    }
}

#button-header {
    padding: 0px 15px;
    border-radius:20px;
    background-color: rgba(0, 0, 0 ,0.1);
}
.bi-arrow-down-short {
    font-size: 20px;
} :hover {
        color:$color-one;
    }

button {
    padding: 5px;
    margin-right: 5px;
    margin-left: 5px;
    border: none;
    background-color: transparent;
}

//drop-down
#drop-down {

    ul {
        list-style: none;
    }

    li {
        display: inline-block;
        position: relative;
    } :hover {
        color: $color-one;
    }

    a {
        text-decoration: none;
        display: block;
        padding: 10px 10px;
        color: #BEC1CE;
    }

    a:hover {
        background-color: white;
    }

    ul ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        border: 1px solid #ccc;
        z-index: 100;
    }

    ul li:hover > ul {
        display: inherit;
    }

    ul ul li {
        width: 200px;
    }
}    

</style>
