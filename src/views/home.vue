<template>
    <div class="wrap-home-header">
        <div class="container h-100">
            <div class="col-6 col-md-10 h-100 center-flex-v">
                <h1>¡Únete a la mayor red de oportunidades en Latinoamérica!</h1>
                <p class="o-05">Encuentra la oportunidad que tanto necesitas</p>
                <a href="#" class="btn mt-2">Buscar Empleo</a>
                <a href="#" class="btn mt-2">Crear Empleos</a>
            </div>

            <div class="col-4 col-md-10 h-100 center-flex">
                <img src="../assets/images/banner-home.png" />
            </div>
        </div>
    </div>

    <div class="container pt-5 pb-5">
        <h2 class="mb-3 title-line">Empleos Destacados</h2>
        
        <div class="three-cards">
            <div class="card" v-for="item in contents" :key="item.id">
                <h2><a href="#">{{item.title}}</a></h2>
                <p class="pb-1"><i class="fa fa-map-marker"></i>{{item.location}}</p>
                <span class="t-muted"><i class="fa fa-clock"></i>{{item.workingday}}</span>
            </div>

        </div><!-- cards -->

    </div>

    <div class="wrap-calltoaction">
        <div class="container pt-5 pb-5">
            <div class="row center-flex-v2">
                <div class="col-3 col-md-10">
                    <img src="https://picsum.photos/200/200" class="br-4" />
                </div>
                <div class="col-7 col-md-10">
                    <p>Únete a nuestra red de oportunidades, y encuentra el empleo que tanto quieres</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Home',
        data() {
            return {
                contents: null,
            }
        },
        mounted() {
            axios.get('/trabajos').then(response => (this.contents = response.data))
        }
    }
</script>