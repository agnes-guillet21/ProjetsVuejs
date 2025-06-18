<script setup>
    import { ref } from 'vue';

    let activeBloc = ref(0);

    let experiences = ref([
        {
            title: "DEVELOPPEUSE FULLSTACK",
            date: "Janvier 2022 - Décembre 2024",
            line1: "Mise en place d/’architectures modulaires (modules, customs, MVC), Import de données (api),Optimisation des processus (cron job, queue workers, mise en cache)" +
                   "Analyse des demandes clients et estimation des coûts",
            line2: "Mise en place des évolutions demandées, déploiement de mises à jour de sécurité",
            line3: "Optimisation, refactoring et réduction de dette technique",
        },        
        {
            title: "DEVELOPPEUSE FULLSTACK",
            date: "Mai 2021 - juillet 2021",
            line1: "Analyse des besoins et conception d’une application de gestion des tâches",
            line2: "Développement backend en Nodejs et frontend en React",
            line3: "Conception et mise en place d’une base de données",

        }
    ]);

    const showExpe = (id) => {
        activeBloc.value = id;
    }

</script>

<template>
    <div id="expe">
        <h2 class="text-higlight-1 section-title"> Mes experiences </h2>
        <div id="left">
            <p :class="activeBloc === 0? 'active' : ''" @click="showExpe(0)" class="company fw600" > Adimeo </p>
            <p :class="activeBloc === 1? 'active' : ''" @click="showExpe(1)" class="company fw600" > Besync </p>
        </div>
        <div id="right">
            <template v-for="(job, index) in experiences">
                <div class="job-details" :class="index === activeBloc ? '' : 'hide'" :id="bloc_+ index"> 
                        <h3 class="fw600"> {{ job.title }} </h3>
                        <span id="date"> {{  job.date }} </span>
                        <br>
                        <p class="fw600 mtb8 task">
                            <span class="text-highlight-2"> ✓ </span> {{ job.line1 }} 
                        </p>

                        <p class="fw600 mtb8 task">
                            <span class="text-highlight-2"> ✓ </span> {{ job.line2 }} 
                        </p>

                        <p class="fw600 mtb8 task">
                            <span class="text-highlight-2"> ✓ </span> {{ job.line3 }}
                        </p>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
    #expe {
        margin-top: 6rem;
    }

    #expe #left {
        float: left;
        width: 25%;
    }
    #expe #right {
        float: right;
        width: 75%;
    }

    #expe #right h3 {
     font-size: 2rem;
    }
    
    .fw600 {
        font-weight: 600;
    }
    
    .mtb8 {
        margin: 8px 0px;
    }
    
    #date {
        font-style: italic;
        font-size: 14px;
    }

    .company {
        border-left: 4px solid var(--vt-c-custom-text-1);
        line-height: 3rem;
        padding-left: 1rem;
    }

    .active {
        border-left: 4px solid var(--vt-c-custom-text-2);
        color: var(--vt-c-custom-text-2) ;
    }

    .company:hover {
        cursor: pointer;
        color: var(--vt-c-custom-text-1);
    }

    .job-details task {
        margin-top: 1rem;
    }

    .hide {
        display: none;
    }

    @media screen and (max-width: 600px) {

         #expe #right {
            width: 100%;
            margin-top: 2rem;
         }
        
         #expe #left {
            width: 100%;
         }

         .company {
            border: none;
            padding-left: 0px;
            float: left;
            margin-right: 1rem;
         }
        
    }
</style>
