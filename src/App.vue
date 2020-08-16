<template>
  <div id="app">
  <site-header></site-header>
    <router-view/>
 <site-footer></site-footer> 
  </div>
</template>

<script>
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'
import store from './store/store'

export default {
  store,
  name: 'app',
  components : {
    'site-header' : SiteHeader,
    'site-footer' : SiteFooter,
  }
}
</script>

<style>
</style>
