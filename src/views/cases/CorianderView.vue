<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    pagetitle1: 'The Project',
    pagetitle2: 'Use Context',
    pagetitle3: 'Research',
    pagetitle4: 'Low-fi',
    pagetitle5: 'Design Systems',
    pagetitle6: 'Product',
    pagetitle7: 'Product',

    casename: 'Coriander',
    casetype: 'App Design',
    casetext: 'Coriander is there to discover and share recipes. The interface and information architecture of the app are designed to accommodate for the wide range of user generated content. ',
    caselink: '',
    caselinktext: '',
    caseroles: 'UX Designer',
    casestakeholders: 'Text',
    casetools: 'Figma Instagram',

    content1: '/cases/coriander/Coriander_1.png',
    content2: '/cases/coriander/Coriander_2.png',
    content3: '/cases/coriander/Coriander_3.png',
    content4: '/cases/coriander/Coriander_4.png',
    content5: '/cases/coriander/Coriander_5.png',
    content6: '/cases/coriander/Coriander_6.png',
    content7: '/cases/coriander/Coriander_7.png',
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