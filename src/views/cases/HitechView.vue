<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},

data() {
  return {
    casename: 'HiTech',
    casetext: 'Conceptualised and developed as IT manager on the board of the engineering student association at Jönköping University, the website is dark themed and has a deep information structure. Launched in 2020, the site is build in elementor with custom code, MySQL database and FTP connection. Including anonymous voting systems, webshop and easy to update content.',
    content1: '/cases/hitech/Hitech_1.jpg',
    content2: '/cases/hitech/Hitech_2.mp4',
    content3: '/cases/hitech/Hitech_3.jpg',
    content4: '/cases/hitech/Hitech_4.jpg',
    content5: '/cases/hitech/Hitech_5.jpg',
    content6: '/cases/hitech/Hitech_6.jpg',
    content7: '/cases/hitech/Hitech_7.mp4',
  }
}
}
</script>
<template>
<div>
  <Case 
  :casename="casename" 
  :casetext="casetext" 
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