<template>

    <div class="wrap-home-header" style="height: 250px; padding-top: 90px;">
        <div class="container">
            <p class="o-05">Buscador</p>
            <a href="#" class="btn mt-2">Buscar Empleo</a>
        </div>
    </div>

    <div class="container pt-5 pb-5" >
        <main class="col-10">
            <section class="two-cards wide-work">
                <router-link class="card" v-for="(item, index) in contents" :key="index" :to="{ name:'DetailWork', params: { id: item.id, author_id: item.author_id } }">
                    <span class="bubble">Urgente</span>
                    <h4>{{item.title}}</h4>
                    <p class="pb-1"><i class="fa fa-map-marker"></i>{{item.location}}</p>
                    <p class="pb-1"><i class="fa fa-business-time"></i>{{item.workingday}}</p>
                    <p class="t-muted"><i class="fa fa-clock"></i> {{ timestyle(new Date(item.created_at).getTime()) }}</p>
                </router-link>
            </section>
        </main><!-- End of Content Work -->
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
        name: 'AllWork',

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