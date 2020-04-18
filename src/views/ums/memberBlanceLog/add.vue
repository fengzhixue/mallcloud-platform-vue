<template> 
  <memberBlanceLog-detail :is-edit='false'></memberBlanceLog-detail>
</template>
<script>
  import MemberBlanceLogDetail from './components/MemberBlanceLogDetail'
  export default {
    name: 'addMemberBlanceLog',
    components: { MemberBlanceLogDetail }
  }
</script>
<style>
</style>


