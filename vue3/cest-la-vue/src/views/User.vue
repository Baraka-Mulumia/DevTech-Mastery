<script setup>
import { useRoute } from "vue-router";
import UserCard from "@/components/UserCard.vue";

const route = useRoute();

const id = route.params.id;

const fetchUser = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());

  return response;
};

const user = await fetchUser();
</script>

<template>
  <main>
    <h1>C'est La Vue - {{ user.username }}</h1>
    <UserCard
      :name="user.name"
      :email="user.email"
      :username="user.username"
      :id="user.id"
    />
  </main>
</template>
