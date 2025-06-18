<script setup>


</script>


<template>
    <div id="skills" >
        <h2 class="text-highlight-1 section-title"> Mes technos</h2>
        <div id="icons-list">
            <div class="techno-container"> <i class="techno-icon devicon-vuejs-plain"></i> <br> <span> Vuejs</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-java-plain"></i> <br> <span> Java</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-javascript-plain"></i> <br> <span> Javascript</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-php-plain"></i> <br> <span> PHP</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-symfony-original"></i> <br> <span> Symfony </span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-react-original"></i> <br> <span> React</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-postgresql-plain"></i> <br> <span> PostgreSql</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-html5-plain"></i> <br> <span> Html</span> </div>
            <div class="techno-container"> <i class="techno-icon devicon-css3-plain"></i>  <br> <span> CSS</span>  </div>
            <div class="techno-container"> <i class="techno-icon devicon-github-original"></i> <br> <span> GIT</span>  </div>
             <!-- <div class="techno-container">  </div> -->
        </div>
    </div>

</template>

<style scoped>

    #skills {
        margin-top: 6rem;
    }

    #icons-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 5rem;
        margin-top: 3.5rem;
    }

    .techno-container {
        text-align: center; 
        color: var(--vt-c-custom-text-1);
        transition: transform 0.5s;
    }

    .techno-container span {
        font-weight: bold;
    }

    .techno-container:hover {
        transform: rotate(15deg);
        color: var(--vt-c-custom-text-2);
    }

    .techno-icon {
        font-size: 8rem;
        margin: 0 auto;
        color: var(--v-c-custom-text-1);
    }

     .techno-icon:hover {
        color: var(--v-c-custom-text-2);
        transform: rotate(15deg);
     }

     @media screen and (max-width: 905px){
        #icon-list{
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 5px;
            grid-row-gap: 4rem;
        }
    }

    @media screen and (max-width: 450px){
        #icon-list{
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-column-gap: 5px;
            grid-row-gap: 4rem;
        }
        
     }
</style>
