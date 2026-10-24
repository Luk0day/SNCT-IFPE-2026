<script setup lang="ts">
const dia = ref(1), tipo = ref('todos'), busca = ref('')
const lista = computed(() => dados.atividades.filter(a =>
  a.dia === dia.value && (tipo.value === 'todos' || a.tipo === tipo.value) &&
  normaliza(`${a.titulo} ${a.quem} ${nomeLocal(a.local)}`).includes(normaliza(busca.value))))
</script>
<template>
  <h1 class="text-3xl font-extrabold">Programação</h1>
  <p class="text-sm text-on-surface-variant mt-1 mb-4">Salve o que quer ver e monte seu roteiro.</p>
  <input v-model="busca" type="search" aria-label="Buscar na programação" placeholder="Buscar atividade, pessoa ou local" class="w-full h-12 px-4 rounded-xl border border-[#d8c7e8] bg-white mb-3" />
  <div class="grid grid-cols-2 gap-1 p-1 bg-surface-container-high rounded-full mb-3">
    <button v-for="d in [1, 2]" :key="d" class="min-h-[48px] rounded-full font-bold text-sm" :class="dia === d ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'" @click="dia = d">Dia {{ d }} · {{ d === 1 ? '17/11' : '18/11' }}</button>
  </div>
  <div class="flex gap-2 overflow-x-auto -mx-5 px-5 pb-2">
    <button class="chip" :class="{ 'chip-on': tipo === 'todos' }" @click="tipo = 'todos'">Todas</button>
    <button v-for="(n, k) in TIPOS" :key="k" class="chip" :class="{ 'chip-on': tipo === k }" @click="tipo = k as string">{{ n }}</button>
  </div>
  <div class="flex flex-col gap-4 mt-3">
    <ActivityCard v-for="a in lista" :key="a.id" :a="a" />
    <div v-if="!lista.length" class="card">Nenhuma atividade encontrada. Tente outro filtro ou outra palavra.</div>
  </div>
</template>
