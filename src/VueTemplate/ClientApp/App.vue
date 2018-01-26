<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <Navbar />
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar }
}
</script>
