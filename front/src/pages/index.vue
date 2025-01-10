<template>
  <div class="about">
    <h1>This is an about page</h1>aaaaa
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { io } from 'socket.io-client';
import { onMounted } from 'vue';

onMounted(async () => {
  console.log((await axios.get('/api')).data);
});

io().on('connect', () => {
});
</script>
<style></style>
