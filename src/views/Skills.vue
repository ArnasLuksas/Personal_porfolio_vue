<template>
 <Skill :skills="skills" />
</template>

<script>
import userData from '../assets/data.json'
import Skill from "../components/TheSkill.vue"
export default {
  name: 'Skills',
  components:{
    Skill
  },
  data(){
    return{
      skills: userData.skills
    }
  }

}
</script>

<style>

</style>