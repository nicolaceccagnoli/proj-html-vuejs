<script >
    export default {
        data() {
            return {

            };
        },
        methods: {

        }

    }
</script>

<template>
    <header class="debug">
        
        <div id="header-top" class="my-container">
            <div class="container">
                <nav>
                    <ul class="justify-content-between">
                        <li>
                            <a href="#">orari</a>
                        </li>
                        <li>
                            <a href="#">cell</a>
                            <a href="#">email</a>
                            <a href="#">fb</a>
                            <a href="#">x</a>
                            <a href="#">link</a>
                        </li>                
                    </ul>
                </nav>
            </div>
            
        </div>

        <div id="header-button" class="my-container">
            <div class="container d-flex justify-content-between">
                <div class="container-logo">
                    logo
                </div>

                <div class="container-info d-flex">
                    <div class="d-flex">
                        <select class="form-control form-control ">
                            <option>demo</option>
                            <option>lorem</option>                    
                        </select>
                        <select class="form-control form-control">
                            <option>page</option>
                            <option>lorem</option>
                        </select>
                        <select class="form-control form-control">
                            <option>portfolio</option>
                            <option>lorem</option>
                        </select>
                        <select class="form-control form-control">
                            <option>blog</option>
                            <option>lorem</option>
                        </select>
                    </div>

                    <nav>
                       <ul>
                            <li>
                                <a href="#">link</a>
                                <a href="#">link</a>
                            </li>
                            <li>
                                <button>
                                    button
                                </button>
                            </li>
                       </ul>              
                    </nav>
                </div>                                                        
            </div>
        </div>           
   </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

nav {
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
    }

    a {
        margin-left:5px;
        padding: 5px;
    }
}

.form-control-sm {
    min-width: 30px;
    margin: 0 5px;
}

button {
    margin-left: 5px;
}

select {
    margin: 0 5px;
}

.debug #header-top {
    background-color: aqua;
    height: 30px;
}

.debug #header-button {
    background-color: orange;
    height: 50px;
}

</style>
