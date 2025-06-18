<script setup>
    import { ref, onMounted } from 'vue';
    import ProjectSingle from './ProjectSingle.vue';

    let projects = ref([
        {
            name: "Projet Librairie",
            tags: "Back: Springboot; DB: PostgreSql; Front: VueJs",
            description: "Un outil d'administration de bibliothèque permettant de gérer les livres, les auteurs, les clients et les prêts. Ce projet m'a permis de monter en compétences sur Spring Boot et Angular. Review fait par un lead Tech Java" ,
            tasks: "Architecture; Tests; Api Rest"
        },        
        {
            name: "Projets en Vuejs",
            tags: "Vuejs",
            description: "Monter en compétence sur le framework VueJs via une formation sur Udemy",
            tasks: "Realisation de plusieurs projets"

        }
    ]);

</script>

<template>
    <div id="projects">
        <h2 class="text-higlight-1 section-title"> Mes projets</h2>
        <ProjectSingle v-for="(project, index) in projects" :key= "project.name" :project="project"  :reverse="index % 2 === 0 ? false :  true"/>
    </div>
</template>

<style scoped>
    #projects {
        display: inline-block;
        margin-top: 6rem;
    }

</style>
