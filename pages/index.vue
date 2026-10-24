<script setup lang="ts">
const agora = ref(Date.now())
let t: any
onMounted(() => { t = setInterval(() => (agora.value = Date.now()), 1000) })
onUnmounted(() => clearInterval(t))
const falta = computed(() => {
  let d = Math.max(0, new Date(dados.evento.inicio).getTime() - agora.value)
  return [[864e5, 'dias'], [36e5, 'horas'], [6e4, 'min'], [1e3, 'seg']].map(([u, l]) => { const n = Math.floor(d / (u as number)); d %= u as number; return { n: String(n).padStart(2, '0'), l } })
})
const proxima = computed(() => dados.atividades.find(a => new Date(`${(dados.evento.dias as any)[a.dia]}T${a.inicio}:00-03:00`).getTime() > agora.value) ?? dados.atividades[0])
</script>
<template>
  <section class="rounded-lg p-6 text-on-primary bg-gradient-to-br from-[#2b1055] via-primary to-secondary">
    <h1 class="text-4xl font-black uppercase leading-tight">Semana Nacional de Ciência e Tecnologia</h1>
    <p class="mt-2 opacity-90">Ciência feita por mulheres. Futuro feito por todas e todos.</p>
    <p class="mt-2 font-bold">17 e 18 de novembro de 2026 · IFPE Campus Palmares · Gratuito</p>
    <div class="grid grid-cols-4 gap-2 my-4 text-center">
      <div v-for="x in falta" :key="x.l" class="bg-white/15 rounded-2xl py-2"><b class="block font-display text-2xl">{{ x.n }}</b><span class="text-[11px]">{{ x.l }}</span></div>
    </div>
    <div class="flex flex-wrap gap-2">
      <a class="btn" href="https://even3.com.br" target="_blank" rel="noopener">Inscreva-se no Even</a>
      <NuxtLink class="btn !bg-white !text-[#2b1055]" to="/programacao">Ver programação</NuxtLink>
    </div>
  </section>
  <section class="mt-7"><h2 class="text-xl font-extrabold mb-3">Em seguida</h2><ActivityCard :a="proxima" /></section>
  <section class="mt-7"><h2 class="text-xl font-extrabold mb-3">Avisos da organização</h2>
    <div v-for="v in dados.avisos" :key="v.titulo" class="rounded-2xl bg-surface-container p-4 mb-3 text-sm"><b>{{ v.titulo }}</b><br />{{ v.texto }}</div>
  </section>
</template>
