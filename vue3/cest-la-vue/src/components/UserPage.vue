<script setup>
import UserCard from "./UserCard.vue";
import { uuidv4 } from "../utils/fn";

import { userList } from "../composables/useUserStore";

import { reactive } from "vue";

const fetchUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
};

userList.value = await fetchUsers();
</script>

<template>
  <main>
    <h1>C'est La Vue - Users</h1>
    <div class="user-container">
      <UserCard
        v-for="user in userList"
        :key="uuidv4()"
        :name="user.name"
        :email="user.email"
        :username="user.username"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px;
}

main h1 {
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
