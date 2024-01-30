<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>


<template>
    <div id="jumbotron">
        <h1>
            Ready <span> Team </span>
        </h1>
        <p>
            No matter what your company needs, we will be ready to assist you in the best possible way.
        </p>
        <a href="#">
            GET IN TOUCH
        </a>
    </div>
    <div id="excellence" class="my-container">
        <h3>
            Excellence in <span> Services </span>
        </h3>
        <p>
            We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced ad renowned professionals. These are some options that you can hire.
        </p>
        

    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

#jumbotron {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('public/images/bg-parallax.png');
    background-size: 200%;
    height: calc(100vh - 80px);
    background-position: center;

    h1 {
        font-size: 70px;
        font-weight: 700;

        span {
            color: $color-one;
            background: rgb(255,255,255);
            background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(214,230,230,1) 50%);
            }
    }

    p {
        margin: 36px 0;
        max-width: 500px;
        text-align: center;
        font-size: 20px;
        color: $main-paragraph-color;
    }

    a {
        background-color: $color-one;
        color: white;
        text-decoration: none;
        padding: 10px 30px;
        border-radius: 5px;
    }

}

#excellence {
   h3 {
    font-size: 50px;
    font-weight: 700;
    
    span {
        color: $color-one;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(214,230,230,1) 50%);
    }
   } 

   p {
        color: $main-paragraph-color;
        margin-top: 30px;
    }

}

</style>