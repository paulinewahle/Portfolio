<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},

data() {
  return {
    pagetitle1: 'The Project',
    pagetitle2: 'Research',
    pagetitle3: 'Low-fi',
    pagetitle4: 'Product',
    pagetitle5: 'Product',
    pagetitle6: 'Product',
    pagetitle7: 'Responsive',

    casename: 'Nordik',
    casetext: 'Nordik is a webshop concept in minimalistic grid design. With a compact top-down deep information structure the design is user intuitive according to the sites hierarchical task analysis.',
    casetype: 'E-commerce Ui Concept',
    caselink: '',
    caselinktext: '',
    caseroles: 'UI Designer',
    casestakeholders: 'Client End Users Advisors',
    casetools: 'Figma',
    casemore: '',

    content1: '/cases/nordik/Nordik_1d.mp4',
    content2: '/cases/nordik/Nordik_2d.jpg',
    content3: '/cases/nordik/Nordik_3d.jpg',
    content4: '/cases/nordik/Nordik_4d.jpg',
    content5: '/cases/nordik/Nordik_5d.jpg',
    content6: '/cases/nordik/Nordik_6d.jpg',
    content7: '/cases/nordik/Nordik_7d.jpg',
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