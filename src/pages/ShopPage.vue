<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>


<template>
    <div class="my-container mt-5 mb-5">
       <div class="row">
            <div class="col-9 products">
                <div class="products-top">
                    <div class="results">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, a.
                    </div>
                    <div>
                        <select class="form-control">
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
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 side-bar">
                ciao
            </div>
       </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
    .products{
        border: 1px solid black;
        display: flex;
        flex-direction: column;

        .products-top{
            display: flex;
            justify-content: space-between;
        }
    }

</style>