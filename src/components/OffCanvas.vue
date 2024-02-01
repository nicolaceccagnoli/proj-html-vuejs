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
        <div class="offcanvas-body">
            <div class="row"> 
                <div class="col-auto">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

.offcanvas {

    button {
        font-size: 24px;
        background-color: $color-one;
        border-radius: 50%;
    }

    .offcanvas-body {
        background: url('/public/images/google-maps.png');
        background-size: cover;
    }
}


</style>