<script setup>
import UserCard from "@/components/UserCard.vue";
import { uuidv4 } from "@/utils/fn";

import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();

if (userStore.users.length < 1) {
  userStore.fetchUsers();
}
</script>

<template>
  <main :class="$style.main">
    <h1>C'est La Vue - Users</h1>
    <div :class="$style['user-container']">
      <UserCard
        v-for="user in userStore.users"
        :key="uuidv4()"
        :name="user.name"
        :email="user.email"
        :username="user.username"
        :id="user.id"
      />
    </div>
  </main>
</template>

<style module>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px;
}

.main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
  text-align: center;
}

.user-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-template-rows: auto;
}

@media screen and (max-width: 640px) {
  .user-container {
    grid-template-columns: 1fr;
  }
}
</style>
