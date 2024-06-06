<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    pagetitle1: 'Landing Page',
    pagetitle2: 'Interactions',
    pagetitle3: 'Templates',
    pagetitle4: 'Interactions',
    pagetitle5: 'Navigation',
    pagetitle6: 'Navigation',
    pagetitle7: 'Interactions',

    casename: 'Gamél',
    casetext: 'The web presence of the danish production agency Gamél centralises its photo- and videographic content in the modern minimalist grid style design in muted tones. With attention to detail elements in the animation of user interaction points. The project was build in CMS with custom code and launched July 2022. ',
    casetype: 'Web Design',
    caselink: '',
    caselinktext: '',
    caseroles: 'UIDesigner WebDesigner Developer',
    casestakeholders: 'CEO ProjectManager FreelanceDevelopers',
    casetools: 'Wordpress Elementor HTML/CSS Javascript Figma Github',
    casemore: 'The Challenge: In the heart of this re-design stood the wish to make this website as much a portfolio of beautiful work as well as a platform to connect, update and share. This was achieved by dividing the home screen into two. Users can toggle between “work” and the overlaying full-page “meanwhile” slider, containing three individually scrollable columns.',

    content1: '/cases/gamel/Gamel_1d.mp4',
    content2: '/cases/gamel/Gamel_2d.mp4',
    content3: '/cases/gamel/Gamel_3d.mp4',
    content4: '/cases/gamel/Gamel_4d.mp4',
    content5: '/cases/gamel/Gamel_5d.jpg',
    content6: '/cases/gamel/Gamel_6d.jpg',
    content7: '/cases/gamel/Gamel_7d.mp4'
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
  :casetype="casetype" 
  :casetext="casetext" 
  :caselink="caselink" 
  :caselinktext="caselinktext"
  :caseroles="caseroles"
  :casestakeholders="casestakeholders"
  :casetools="casetools"
  :casemore="casemore"

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