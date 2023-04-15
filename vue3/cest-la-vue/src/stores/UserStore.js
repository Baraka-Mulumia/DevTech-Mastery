import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    users: [],
  }),

  getters: {
    previewList(state) {
      return state.users.slice(0, 4);
    },
  },

  actions: {
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      this.users = response;
    },
  },
});
