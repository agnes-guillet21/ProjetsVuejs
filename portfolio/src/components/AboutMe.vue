<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <div id="about-me">
        <h2 class="text-higlight-1 section-title"> Qui suis-je?</h2>
        <p class="default-text">
            Je suis <span class="text-highlight-2">développeuse web</span>, avec une nette préférence pour le <span class="text-highlight-2">back-end</span>  (les trucs qu’on ne voit pas, mais qui font que tout marche).
            J’aime bien les bases de données, les API, et râler quand le front casse tout (mais gentiment).
            Ce projet est un petit exercice en <span class="text-highlight-2">Vue.js</span>… donc oui, je touche aussi un peu au front, quand il faut. 😅
        </p>
        <p> <RouterLink to="/contact">Contactez Moi</RouterLink> </p>
    </div>

</template>




<style scoped>
    #about-me {
        margin-top:6rem;
    }

    .default-text {
        text-align: justify;
    }

    .default-text span {
        font-weight: bold;
    }
</style>
