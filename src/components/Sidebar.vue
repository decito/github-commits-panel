<template>

          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="{
                  'hover:text-white text-white bg-blue-600' : tab === 'login',
                  'hover:text-blue-600' : tab === 'register'
                }"
                @click.prevent="tab = 'login'"
              >Login</a>
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="{
                  'hover:text-white text-white bg-blue-600' : tab === 'register',
                  'hover:text-blue-600' : tab === 'login'
                }"
                @click.prevent="tab = 'register'"
              >Register</a>
            </li>
          </ul>

</template>

<script setup>
import { ref } from 'vue'

const tab = ref('login')
</script>
