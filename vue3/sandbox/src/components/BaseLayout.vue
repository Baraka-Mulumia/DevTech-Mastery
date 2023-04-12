<script></script>

<template>
  <div class="wrapper">
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
    <main class="main">
      <slot name="main" />
    </main>
  </div>
  <footer class="footer">
    <slot name="footer" />
  </footer>
</template>

<style scoped>
.wrapper {
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar {
  border: 2px solid red;
}
.main {
  padding: 10px;
  border: 2px solid green;
}

.footer {
  background-color: blueviolet;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  padding: 8px;
}
</style>
