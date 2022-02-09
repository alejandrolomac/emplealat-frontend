<template>

    <!-- <div class="container pt-5 pb-5" v-for="work in detailwork" :key="work.id">
        <h2>{{ work.title }}</h2>
        <p>Autor: {{ authorwork.username }}</p>
        <p>Descripcion: {{ work.content }}</p>
        <p>Requisitos: {{ work.requirements }}</p>
        <p>Creado: {{ work.created_at }}</p>
        <p>Categoria: {{ work.category }}</p>
        <p>Ubicaciones: {{ work.location }}</p>
        <p>Tipo de trabajo: {{ work.typework }}</p>
        <p>Salario: {{ work.salary }}</p>
        <p>Horario: {{ work.workingday }}</p>
        <p>Tipo de contrato: {{ work.contract }}</p>
        <p>Experiencia: {{ work.experience }}</p>
    </div> -->

    <article v-for="work in detailwork" :key="work.id">
        <section class="container pt-5 pb-5"  v-if="work.id === $route.params.id">
            <div class="wrap">
                <h2>{{ work.title }}</h2>
                <p>Autor: {{ authorwork.username }}</p>
                <p>Descripcion: {{ work.content }}</p>
                <p>Requisitos: {{ work.requirements }}</p>
                <p>Creado: {{ work.created_at }}</p>
                <p>Categoria: {{ work.category }}</p>
                <p>Ubicaciones: {{ work.location }}</p>
                <p>Tipo de trabajo: {{ work.typework }}</p>
                <p>Salario: {{ work.salary }}</p>
                <p>Horario: {{ work.workingday }}</p>
                <p>Tipo de contrato: {{ work.contract }}</p>
                <p>Experiencia: {{ work.experience }}</p>
            </div>
        </section>
    </article>
    
    <!--<div class="container pt-5 pb-5">
        <h2 class="mb-3 title-line">Empleos Similares</h2>
        
        <div class="three-cards featured-work">
            <a class="card" v-for="(item, index) in contents" :key="index" href="#">
                <span class="bubble">Urgente</span>
                <h2>{{item.title}}</h2>
                <p class="pb-1"><i class="fa fa-map-marker"></i>{{item.location}}</p>
                <p class="pb-1"><i class="fa fa-business-time"></i>{{item.workingday}}</p>
                <p class="t-muted"><i class="fa fa-clock"></i> {{ increment(new Date(item.created_at).getTime()) }}</p>
            </a>

        </div>
    </div>-->
    
</template>

<script>
    import axios from "axios"

    export default {
        name: 'SingleWork',
        data() {
            return { 
                detailwork: null,
                authorwork: null
            }
        },
        mounted() {
            axios.get(`/t/${this.$route.params.id}`).then(response => (this.detailwork = response.data))
            axios.get(`/usuario/${this.$route.params.author_id}`).then(response => (this.authorwork = response.data))
            console.log("id: " + this.detailwork.id)
            console.log("usuario: " + this.authorwork.username)
        }
        
    }
</script>