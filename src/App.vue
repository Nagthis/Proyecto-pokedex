<template>
  <div id="app">
    <header>
      <h1>Pokedex</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}

h1 {
    font-size: 2.5rem;
    color: #ffcb05;
    text-shadow: 2px 2px 4px #3d7dca;
}
</style>
