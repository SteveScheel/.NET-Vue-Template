<template>
  <div>
    <h1>Counter app!</h1>
    <div class="row">
      Count: {{ count }}
    </div>
    <div class="row">
      <button @click="increment" class="btn btn-primary">Increment</button>
      <button @click="decrement" class="btn btn-primary">Decrement</button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
}
</script>
