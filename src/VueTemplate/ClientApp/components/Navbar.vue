<template>
  <div class="main-nav">
    <div class="navbar navbar-inverse">
      <div class='navbar-header'>
          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
              <span class='sr-only'>Toggle navigation</span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
          </button>
          <router-link class="navbar-brand" to="/">VueTemplate</router-link>
      </div>
      <div class="clearfix"></div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link active-class="active" :to="{ name: 'home' }" exact>Home</router-link>
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'counter' }">Counter</router-link>
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'fetchData' }">Fetch Data</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
