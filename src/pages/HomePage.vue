<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>


<template>
    <div class="jumbotron">
        <h1>
            ReadyTeam
        </h1>
        <p>
            No matter what your company needs, we will be ready to assist you in the best possible way.
        </p>
        <a href="#">
            GET IN TOUCH
        </a>
    </div>
    <div class="my-container">
        <h1>
            HOME PAGE
        </h1>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.jumbotron {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('public/images/bg-parallax.png');
    background-size: 200%;
    height: calc(100vh - 80px);
    background-position: center;

    h1 {
        font-size: 60px;
        font-weight: 700;
    }

    p {
        margin: 32px 0;
        max-width: 500px;
        text-align: center;
        font-size: 20px;
    }

    a {
        background-color: $color-one;
        color: white;
        text-decoration: none;
        padding: 8px 16px;
    }

}
</style>