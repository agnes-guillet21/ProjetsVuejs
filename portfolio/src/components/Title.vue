<script setup>
    import SocialMedia from './SocialMedia.vue';


</script>


<template>
    <div id="top-line">
        <img id="profile-img" src="../assets/me.png" alt="agnes guillet" width="250px" height="200px">
        <div id="line">
            <p><span class="text-highlight-1">Agnes Guillet</span> <br/>
            Développeuse web</p>
            <div id="social">
                <SocialMedia img="linkedin" link="https://www.linkedin.com/in/agnesguillet" alt="linkedin" />
                <SocialMedia img="github" link="https://github.com/agnes-guillet21" alt="github" />
            </div>
        </div>
    </div>
</template>




<style scoped>
    #top-line {
        margin-top: 50px;
        width: 100%;
        height: 300px;
    }

    #top-line #profile-img {
        float: left;
        margin-right: 50px;
    }

    #top-line #line {
        float: left;
        transform: translateY(40%);
        text-align: center;
    }
    #top-line p {
        font-size: 42px;
        line-height: 60px;
    }

        #top-line span {
            font-weight: bold;
    }

    #social {
        margin-top: 15px;
    }


    @media screen and (max-width: 905px) { 
        #top-line #profile-img {
            display: none;
        }
        #top-line #line {
            float: none;
            transform: translateY(0%);
        }
        #top-line p {
            font-size: 36px;
        }
    }

</style>
