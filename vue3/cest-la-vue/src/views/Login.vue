<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();

const emailInput = ref("");

const login = () => {
  const email = emailInput.value;

  if (email.includes("@") && email.length > 3) {
    router.replace("/users");
  }
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="emailInput" />
    <button @click="login">Continue with email</button>
  </main>
</template>
