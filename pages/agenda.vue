<script setup lang="ts">
const { ids, choques } = useAgenda()
const salvas = computed(() => dados.atividades.filter(a => ids.value.includes(a.id)).sort((a, b) => minutos(a.inicio) - minutos(b.inicio)))
const temChoque = computed(() => salvas.value.some(a => choques(a).length))
const horas = computed(() => salvas.value.reduce((t, a) => t + (minutos(a.fim) - minutos(a.inicio)) / 60, 0))
</script>
<template>
  <h1 class="text-3xl font-extrabold">Minha agenda</h1>
  <p class="text-sm text-on-surface-variant mt-1 mb-4">Salva só neste aparelho. Não pedimos cadastro nem dados pessoais.</p>
  <div v-if="salvas.length" class="rounded-2xl p-4 text-sm mb-4" :class="temChoque ? 'bg-error-container text-on-error-container' : 'bg-surface-container'">
    {{ temChoque ? 'Há atividades no mesmo horário. Escolha uma delas.' : 'Agenda sem choques de horário.' }} Total: {{ horas.toFixed(1).replace('.', ',') }} h em {{ salvas.length }} atividades.
  </div>
  <template v-for="d in [1, 2]" :key="d">
    <template v-if="salvas.some(a => a.dia === d)">
      <h2 class="font-bold my-3">Dia {{ d }} · {{ d === 1 ? '17 de novembro' : '18 de novembro' }}</h2>
      <div class="flex flex-col gap-4"><ActivityCard v-for="a in salvas.filter(x => x.dia === d)" :key="a.id" :a="a" remover /></div>
    </template>
  </template>
  <div v-if="!salvas.length" class="card"><b>Sua agenda está vazia.</b><p class="text-sm text-on-surface-variant my-2">Salve atividades na programação para montar seu roteiro.</p><NuxtLink to="/programacao" class="btn">Ver programação</NuxtLink></div>
</template>
