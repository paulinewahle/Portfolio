<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    pagetitle1: 'Landing Page',
    pagetitle2: 'Challenge',
    pagetitle3: 'Animations',
    pagetitle4: 'Project Page',
    pagetitle5: 'Interaction',
    pagetitle6: 'Cursor',
    pagetitle7: 'Content',
    casename: 'Gamél',
    casetext: 'The web presence of the danish production agency Gamél centralises its photo- and videographic content in the modern minimalist grid style design in muted tones and with attention to detail elements in the animation of user interaction points such as buttons, cursor, sliders and overlays. The project build in CMS with custom code and launched July 2022. ',
    casetype: 'Web Design',
    content1: '/cases/gamel/Gamel_1.mp4',
    content2: '/cases/gamel/Gamel_2.jpg',
    content3: '/cases/gamel/Gamel_3.mp4',
    content4: '/cases/gamel/Gamel_2.mp4',
    content5: '/cases/gamel/Gamel_5.mp4',
    content6: '/cases/gamel/Gamel_6.mp4',
    content7: '/cases/gamel/Gamel_7.mp4'
  }
}
}
</script>
<template>
<div>
  <Case 
  :pagetitle1="pagetitle1" 
  :pagetitle2="pagetitle2" 
  :pagetitle3="pagetitle3" 
  :pagetitle4="pagetitle4" 
  :pagetitle5="pagetitle5" 
  :pagetitle6="pagetitle6" 
  :pagetitle7="pagetitle7" 
  :casename="casename" 
  :casetext="casetext" 
  :casetype="casetype" 
  :content1="content1"
  :content2="content2"
  :content3="content3"
  :content4="content4"
  :content5="content5"
  :content6="content6"
  :content7="content7"
  />
</div>
</template>