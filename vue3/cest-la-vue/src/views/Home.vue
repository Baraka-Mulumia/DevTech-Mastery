<script setup>
import UserCard from "@/components/UserCard.vue";
import { userList } from "@/composables/useUserStore";
import { uuidv4 } from "@/utils/fn";

import { computed } from "vue";

const previewUsers = computed(() => {
  return userList.value.slice(0, 3);
});
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
  </main>
  <div class="user-container">
    <UserCard
      v-for="user in previewUsers"
      :key="uuidv4()"
      :name="user.name"
      :email="user.email"
      :username="user.username"
      :id="user.id"
    />
  </div>
</template>

<style scoped>
.user-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-template-rows: auto;
  padding: 10px;
}

@media screen and (max-width: 640px) {
  .user-container {
    grid-template-columns: 1fr;
  }
}
</style>
