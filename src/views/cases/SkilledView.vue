<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    pagetitle1: 'The Project',
    pagetitle2: 'Introduction',
    pagetitle3: 'Research',
    pagetitle4: 'Design Systems',
    pagetitle5: 'Wireframes',
    pagetitle6: 'Prototype',
    pagetitle7: 'Prototype',
    casename: 'Skilled',
    casetext: 'Skilled is the concept of an educational platform app with all aspects reduced to the optimal usability. The user experience is build on a brand identity in flat primary blue duotone design with an icon category system in vector line style. ',
    casetype: 'App Design',
    casemore: '',
    content1: '/cases/skilled/Skilled_1d.jpg',
    content2: '/cases/skilled/Skilled_2d.jpg',
    content3: '/cases/skilled/Skilled_3d.jpg',
    content4: '/cases/skilled/Skilled_4d.jpg',
    content5: '/cases/skilled/Skilled_5d.jpg',
    content6: '/cases/skilled/Skilled_6d.jpg',
    content7: '/cases/skilled/Skilled_7.jpg'
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
