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
        <a class="main-anchor-style" href="#">
            GET IN TOUCH
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

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
                @include main-span-style;
            }
    }

    p {
        margin: 36px 0;
        max-width: 500px;
        text-align: center;
        font-size: 20px;
        color: $main-text-color;
    }

    .main-anchor-style {
        @include main-anchor-style;
        transition: 0.3s background-color;
    }

    .main-anchor-style:hover {
        background-color: $color-five;
    }

}
</style>