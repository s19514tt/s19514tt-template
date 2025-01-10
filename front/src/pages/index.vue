<template>
  <div class="about">
    <h1>This is an about page</h1>aaaaa
  </div>
</template>
<script setup lang="ts">
import type { ClientToServerEvents, ServerToClientEvents } from '@/shared-types/ws';
import axios from 'axios';
import { io, Socket } from 'socket.io-client';
import { onMounted } from 'vue';

onMounted(async () => {
  console.log((await axios.get('/api')).data);
});

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io().on('connect', () => {
  console.log('connected');
});

socket.on("messageToClient", (data) => {
  console.log(data);
});
</script>
<style></style>
