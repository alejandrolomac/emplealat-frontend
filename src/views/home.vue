<template>
    <div class="wrap-home-header">
        <div class="container h-100">
            <div class="col-6 col-md-10 h-100 flex-hc flex-col">
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

        <div class="three-cards featured-work">
            <router-link class="card" v-for="(item, index) in contents" :key="index" :to="{ name:'DetailWork', params: { id: item.id, author_id: item.author_id } }">
                <span class="bubble">Urgente</span>
                <h2>{{item.title}}</h2>
                <p class="pb-1"><i class="fa fa-map-marker"></i>{{item.location}}</p>
                <p class="pb-1"><i class="fa fa-business-time"></i>{{item.workingday}}</p>
                <p class="t-muted"><i class="fa fa-clock"></i> {{ timestyle(new Date(item.created_at).getTime()) }}</p>
            </router-link>

        </div><!-- cards -->

    </div>

    <div class="wrap-calltoaction">
        <div class="container pt-5 pb-5">
            <div class="row flex-vc">
                <div class="col-3 col-md-10">
                    <img src="../assets/images/imghome01.png" />
                </div>
                <div class="col-7 col-md-10">
                    <h2>Te ayudamos a encontrar un empleo mejor</h2>
                    <p>Haz que tu currículum sea visible para miles de empresas en nuestra bolsa de trabajo</p>
                    <ul class="p-0 ml-2">
                        <li><i class="fa fa-check-circle mr-1 t-muted"></i><strong>Registro gratuito</strong> Encuentra tu próximo trabajo hoy.</li>
                        <li><i class="fa fa-check-circle mr-1 t-muted"></i><strong>Ofertas cada día</strong> Empleos que se ajustan a tu perfil.</li>
                        <li><i class="fa fa-check-circle mr-1 t-muted"></i><strong>Alertas personalizadas</strong> Tú crea alertas de empleo y nosotros te avisaremos.</li>
                        <li><i class="fa fa-check-circle mr-1 t-muted"></i><strong>Completa tu perfil</strong> Muéstrate profesional y ganarás visibilidad.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
        name: 'Home',

        data() {
            return { 
                contents: null
            }
        },
        mounted() {
            axios.get('/trabajos').then(response => (this.contents = response.data))
        },
        methods: {
            timestyle(date) {
                return timeAgo(date)
            }
        }
    }
</script>