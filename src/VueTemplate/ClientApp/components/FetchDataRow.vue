<template>
  <tr>
    <td>{{ day.dateFormatted }}</td>
    <td>{{ day.temperatureC }}</td>
    <td>{{ day.temperatureF }}</td>
    <td>{{ day.summary }}</td>
  </tr>
</template>


<script>
export default {
  props: [ 'day' ]
}
</script>
