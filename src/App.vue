<template>
  <a-layout>
    <a-layout>
      <a-layout-content>
        <Board />
        <List />
      </a-layout-content>
      <a-layout-sider>
        <Sidebar />
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Board from './components/Board.vue'
import List from './components/List.vue'
import Sidebar from './components/Sidebar.vue'
</script>
