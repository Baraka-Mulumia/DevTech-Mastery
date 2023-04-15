<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <p class="card-title">
      <span class="item-label">Username:</span> {{ username }}
    </p>
    <p class="card-body"><span class="item-label">Name:</span> {{ name }}</p>
    <p class="card-footer">
      <span class="item-label">Email:</span> {{ email }}
    </p>
  </div>
</template>

<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px 16px;
  min-width: 240px;
  border-radius: 10px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.01);
}
.card-title {
  font-weight: 600;
}

.card-footer {
  color: blueviolet;
}

.item-label {
  color: gray;
  font-weight: 300;
}
</style>
