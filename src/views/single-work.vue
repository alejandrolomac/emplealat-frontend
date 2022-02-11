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

    <div v-for="work in detailwork" :key="work.id">
        <div class="container pt-5 pb-5 wrap-detailwork"  v-if="work.id === $route.params.id">

            <main class="col-7 col-md-10">
                <section>
                    <h2 class="t-center">{{ work.title }}</h2>
                    <div class="header-info">
                        <span class="t-muted mr-2"><i class="fa fa-clock mr-1"></i>{{ timestyle(new Date(work.created_at).getTime()) }}</span>
                        <span class="bubble-2">Urgente</span>
                    </div>
                    <div class="business-info">
                        <img src="https://picsum.photos/100/100" />
                        <div>
                            <h6 class="mb-1">{{ authorwork.username }}</h6>
                            <p>Tegucigalpa, Honduras</p>
                            <p class="m-0">F T I</p>
                        </div>
                    </div>
                </section>

                <section class="mt-3 mb-3">
                    <h3 class="mb-2 mt-4 subtitle-line">Descripción</h3>
                    <p>{{ work.content }}</p>

                    <h3 class="mb-2 mt-4 subtitle-line">Requisitos</h3>
                    <p>Requisitos: {{ work.requirements }}</p>
                </section>

                <section>
                    <h3 class="mb-2 mt-4 subtitle-line">Detalles de la Oportunidad</h3>
                    <ul class="list-detail-work">
                        <li>
                            <p><i class="fa fa-map-marker mr-1"></i>Ubicación</p>
                            <span>{{ work.location }}</span>
                        </li>
                        <li>
                            <p><i class="fa fa-briefcase mr-1"></i>Tipo de Trabajo</p>
                            <span>{{ work.typework }}</span>
                        </li>
                        <li>
                            <p><i class="fa fa-calendar mr-1"></i>Horario</p>
                            <span>{{ work.workingday }}</span>
                        </li>
                        <li>
                            <p><i class="fa fa-business-time mr-1"></i>Experiencia</p>
                            <span>{{ work.experience }}</span>
                        </li>
                        <li>
                            <p><i class="fa fa-file-contract mr-1"></i>Tipo de Contrato</p>
                            <span>{{ work.contract }}</span>
                        </li>
                        <li>
                            <p><i class="fa fa-code-branch mr-1"></i>Categoria</p>
                            <span>{{ work.category }}</span>
                        </li>
                        <li>
                            <p><i class="fa fa-coins mr-1"></i>Salario</p>
                            <span>{{ work.salary }}</span>
                        </li>
                    </ul>
                </section>

                <a href="#" class="btn btn-apply">Aplicar</a>

                <section class="footerwork mt-5">
                    <img src="https://picsum.photos/900/150" />
                    <h3 class="title-line mb-5 mt-5">Empleos Similares</h3>
        
                    <div class="similary-work">
                        <a class="card" v-for="(item, index) in contents" :key="index" href="#">
                            <span class="bubble">Urgente</span>
                            <h4>{{item.title}}</h4>
                            <p class="pb-1"><i class="fa fa-map-marker"></i>{{item.location}}</p>
                            <p class="pb-1"><i class="fa fa-business-time"></i>{{item.workingday}}</p>
                            <p class="t-muted"><i class="fa fa-clock"></i> {{ timestyle(new Date(item.created_at).getTime()) }}</p>
                        </a>

                    </div>

                </section>
            </main><!-- End of Content Work -->

            <aside class="col-3 col-12">
                <img src="https://picsum.photos/400/400" />
            </aside><!-- End of Aside -->

        </div>
    </div>
    
    <!--<div class="container pt-5 pb-5">
        
    </div>-->
    
</template>

<script>
    import axios from "axios"

    const DATE_UNITS = {
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    }

    const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000

    const getUnitAndValueDate = (secondsElapsed) => {
        const entries = Object.entries(DATE_UNITS)

        for(const [unit, secondsInUnit] of entries) {
            const match = secondsElapsed >= secondsInUnit || unit === 'second'
            if ( match ) {
                const value = Math.floor( secondsElapsed / secondsInUnit ) * -1
                return { value, unit }
            }
        }
    }

    const timeAgo = (timestamp, locale) => {
        const rtf = new Intl.RelativeTimeFormat(locale)
        const secondsElapsed = getSecondsDiff(timestamp)
        const { value, unit } = getUnitAndValueDate(secondsElapsed)
        return rtf.format(value, unit)
    }

    export default {
        name: 'SingleWork',

        data() {
            return { 
                detailwork: null,
                authorwork: null,
                contents: null
            }
        },
        mounted() {
            axios.get('/t/' + this.$route.params.id).then(response => (this.detailwork = response.data))
            axios.get('/usuario/' + this.$route.params.author_id).then(response => (this.authorwork = response.data))
            axios.get('/trabajos').then(response => (this.contents = response.data))
        },
        methods: {
            timestyle(date) {
                return timeAgo(date)
            }
        }
        
    }
</script>