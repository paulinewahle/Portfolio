<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    pagetitle1: 'The Project',
    pagetitle2: 'Wireframes',
    pagetitle3: 'Design System',
    pagetitle4: 'Atomic Design',
    pagetitle5: 'Mobile',
    pagetitle6: 'Accessibility',
    pagetitle7: 'Tablet',

    casename: 'NestLink',
    casetype: 'App Design',
    casetext: 'The UI design concept incorporates neomorphic elements for a soft and cohesive interface. This modern approach blends realism with simplicity, providing intuitive interactions. ',
    caselink: 'https://www.figma.com/proto/tKVNx3qBJN6PTV99s97kNm/Nest-Link?page-id=116%3A7267&node-id=116-7320&viewport=466%2C525%2C0.31&t=hxUTDL8SgG5ysqgz-1&scaling=scale-down&starting-point-node-id=116%3A7287&show-proto-sidebar=1',
    caselinktext: 'Interactive Wireframes - Mobile',
    caseroles: 'UIDesigner',
    casestakeholders: 'QA Users',
    casetools: 'Figma',
    casemore: 'In an effort towards democratization and inclusion, this concept is designed for accessibility. ',

    content1: '/cases/nestlink/Nestlink_1d.jpg',
    content2: '/cases/nestlink/Nestlink_2d.mp4',
    content3: '/cases/nestlink/Nestlink_3d.jpg',
    content4: '/cases/nestlink/Nestlink_4d.jpg',
    content5: '/cases/nestlink/Nestlink_5d.jpg',
    content6: '/cases/nestlink/Nestlink_6d.jpg',
    content7: '/cases/nestlink/Nestlink_7d.jpg',
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