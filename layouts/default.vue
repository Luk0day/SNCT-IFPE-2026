<script setup lang="ts">
const abas = [
  { to: '/', icon: 'home', nome: 'Início' }, { to: '/programacao', icon: 'calendar_month', nome: 'Programação' },
  { to: '/mapa', icon: 'location_on', nome: 'Mapa' }, { to: '/agenda', icon: 'bookmark', nome: 'Agenda' }, { to: '/guia', icon: 'menu', nome: 'Mais' }
]
</script>
<template>
  <div class="min-h-screen">
    <header class="fixed top-0 inset-x-0 z-20 bg-surface/90 backdrop-blur-xl shadow-n1 pt-[env(safe-area-inset-top)]">
      <div class="max-w-3xl mx-auto h-14 px-5 flex items-center justify-between">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-on-secondary text-sm font-bold"><span class="mi !text-base">science</span>Ciência Delas</span>
        <span class="text-xs font-bold text-primary">SNCT 2026 · IFPE Palmares</span>
      </div>
    </header>
    <main class="max-w-3xl mx-auto px-5 pt-[calc(4.5rem+env(safe-area-inset-top))] pb-28"><slot /></main>
    <nav aria-label="Navegação principal" class="fixed bottom-0 inset-x-0 z-20 bg-surface/90 backdrop-blur-xl shadow-n2 rounded-t-[2rem] pb-[env(safe-area-inset-bottom)]">
      <div class="max-w-3xl mx-auto h-16 flex justify-around">
        <NuxtLink v-for="t in abas" :key="t.to" :to="t.to" class="flex-1 flex flex-col items-center justify-center text-[11px] font-semibold text-on-surface-variant relative" active-class="!text-secondary !font-bold">
          <span class="mi">{{ t.icon }}</span>{{ t.nome }}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
