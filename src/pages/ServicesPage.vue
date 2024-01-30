<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>


<template>
    <div id="header-service">
        <!--header-->
        <div class="d-flex justify-content-center">
            <div class="flex-column">
                <h1>SERVICES</h1>
                <h3>home/ services</h3>
            </div>     
        </div>
    </div>

        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div id="card" class="container">
                        <div class="icon">icon</div>
                        <h4>capitale umano</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius nobis libero error non animi, quae, ipsam,</p>
                    </div>
                </div>
                <div class="col-4">
                    <div id="card" class="container">
                        <div class="icon">icon</div>
                        <h4>capitale umano</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius nobis libero error non animi, quae, ipsam,</p>
                    </div>
                </div>
                <div id="card" class="col-4">
                    <div class="container">
                        <div class="icon">icon</div>
                        <h4>capitale umano</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius nobis libero error non animi, quae, ipsam,</p>
                    </div>
                </div>
            </div> 
        </div>
    
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

#header-service {
    height: 300px;
    background-color: red;
}

.icon {
    height: 50px;
    width: 50px;
    border: 1px dashed black;
}

#card {
    .icon {
        margin: 10px 0;
    }

    h4 {
        margin: 10px 0;
    }

    p {
        margin: 10px 0;
    }
}
</style>