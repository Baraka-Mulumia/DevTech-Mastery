<script setup>
import UserCard from "@/components/UserCard.vue";
import { uuidv4 } from "@/utils/fn";
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
userStore.fetchUsers();
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
      v-for="user in userStore.previewList"
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
