<template>
  <div id="app">
    <header>
      <h1 class="main-title">Pokédex</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 2rem 0;
  text-align: center;
}

.main-title {
  font-size: 5rem;
  font-weight: 900;
  color: #ffcb05;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0;
  /* Efecto de borde azul estilo Pokémon */
  text-shadow: 4px 4px 0 #3b4cca, -2px -2px 0 #3b4cca, 2px -2px 0 #3b4cca,
    -2px 2px 0 #3b4cca, 4px 4px 10px rgba(0, 0, 0, 0.5);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 0.3s ease;
  display: inline-block;
}

.main-title:hover {
  transform: scale(1.05) rotate(-2deg);
}
</style>
