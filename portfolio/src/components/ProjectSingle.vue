<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';


    const props = defineProps({
        project: {
            type: Object,
            require:true
        },
        reverse: {
            type: Boolean,
            require: false
        }
    })

    let fadeInElements = ref();


    const isElemVisible =  (el) => {
        const rect = el.getBoundingClientRect(); // recupere un rectangle de la position de l'element
        const elemeTop = rect.top + 200; //decalage au dessus de l element pour prendre de la marge => att que le user scroll vraiment sur l element
        const elemBottom = rect.bottom; 
        return elemTop < window.innerHeight && elemBottom >= 0; // return bolean , dira si l element est visible pour faire l animation
    }

    const handleScroll = () => {
        for (let i = 0 ; i < fadeInElements.value.length; i++) {
            const elem = fadeInElements.value[i];
            if (isElemVisible(elem)){
                elem.style.opacity = '1';
                elem.style.transform = 'scale(1)';
                fadeInElements.value.splice(i, 1);
            }
        }

    }

    onMounted(() => {
        fadeInElements.value =  Array.from(document.getElementsByClassName('fade-in'));
        document.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
        document.removeEventListener('scroll', handleScroll);
    })

    const getProjectTags = () => {
        return props.project.tags.split(";");
    }

    const getProjectTasks = () => {
       return props.project.tasks.split(";");
    }


</script>

<template>
    <div class="project">
        <div class="left fade-in" :class="reverse ? 'reverse' : ' '">
            <h3 class="text-higlight-1" > {{  project.name }} </h3>
        </div>
        <div class="right">
            <p class="tag" v-for="tag in getProjectTags()"> {{ tag }}  </p>
            <p class="description"> {{  project.description}} </p>
            <p class="task">
                 <span v-for="task in getProjectTasks()">
                    <span class="text-highlight-2"> ✓</span> {{  task }} <br/> 
                </span>
            </p>

        </div>

    </div>
</template>

<style scoped>
    .project {
        margin-top: 35px;
    }

    .project .left h3 {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .project .right {
        padding-top: 2rem;
    }

    .project .right .tag {
        display: block;
        float: left;
        background-color: #333746;
        padding: 8px 16px;
        margin-right: 12px;
        border-radius: 5px;
        font-weight: bold;
    }
     .project .right .description {
        clear: both;
        margin-top: 5rem;
        font-size: 17px;
    }

     .project .right .tasks{
        margin-top: 2rem;
        font-size: 17px;
    }



    
    @media screen and (max-width: 905px) {

        .project .right {
            padding-top: 0px;
        }

    }

    @media screen and (max-width: 450px) {
        .project .right .tag{
            margin-bottom: 1rem;
        }
    }

</style>
