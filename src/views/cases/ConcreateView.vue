<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    pagetitle1: 'Cover',
    pagetitle2: 'Photography',
    pagetitle3: 'Layout',
    pagetitle4: 'Index',
    pagetitle5: 'E-Publication',
    pagetitle6: 'Tutorials',
    pagetitle7: 'Chapters',

    casename: 'Concreate',
    casetype: 'Graphic Design',
    casetext: 'The CONCREATE zine is an exploration of brutalism across graphic design, architecture, art, typography and web design.Published in 2021, the editorial team consists of five design students from Jönköping University.',
    caselink: '/cases/concreate/concreate.epub',
    caselinktext: 'Get the e-Publication',
    caseroles: 'ArtDirector GraphicDesigner Editor Writer Photographer',
    casestakeholders: 'ManagingEditor Writers Bloggers DigitalPublisher',
    casetools: 'InDesign Photoshop Illustrator AfterEffects Lightroom',
    casemore: '',

    content1: '/cases/concreate/Concreate_1.jpg',
    content2: '/cases/concreate/Concreate_2.jpg',
    content3: '/cases/concreate/Concreate_3.jpg',
    content4: '/cases/concreate/Concreate_4.jpg',
    content5: '/cases/concreate/Concreate_5.mp4',
    content6: '/cases/concreate/Concreate _6.jpg',
    content7: '/cases/concreate/Concreate _7.jpg',
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