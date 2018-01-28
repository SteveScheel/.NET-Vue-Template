<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <FetchDataRow v-for="(row, index) in days" :day="row" :key="index" />
      </tbody>
    </table>
    <div class="clearfix">
      <div class="pull-left">
        <button id="prevButton" @click="changeDaysAhead(-5)" class="btn btn-primary">Prev</button>
      </div>
      <div class="pull-right">
        <button id="nextButton" @click="changeDaysAhead(5)" class="btn btn-primary">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FetchDataRow from './FetchDataRow.vue';

export default {
  components: { FetchDataRow },

  data() {
    return {
      days: [],
      daysAhead: 0
    };
  },

  mounted() {
    this.getData(0);
  },

  methods: {
    getData: function (daysAhead) {
      axios.get('/api/sampleData/weatherForecasts/' + daysAhead)
        .then(response => {
          this.days = response.data;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    },

    changeDaysAhead: function (change) {
      this.daysAhead += change;

      this.getData(this.daysAhead);
    }
  }
}
</script>