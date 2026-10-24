<script setup lang="ts">
const route = useRoute()
const sel = ref<string>((route.query.local as string) in dados.locais ? (route.query.local as string) : 'aud')
const L = computed(() => (dados.locais as any)[sel.value])
const atividades = computed(() => dados.atividades.filter(a => a.local === sel.value))
</script>
<template>
  <h1 class="text-3xl font-extrabold">Mapa do Campus</h1>
  <p class="text-sm text-on-surface-variant mt-1 mb-4">Toque em um espaço. Versão esquemática: troque pela planta oficial quando a organização enviar.</p>
  <svg viewBox="0 0 500 390" role="img" aria-label="Mapa esquemático do Campus" class="w-full rounded-3xl bg-surface-container-low shadow-n1">
    <g v-for="(p, k) in (dados.locais as any)" :key="k" class="cursor-pointer" @click="sel = k as string">
      <rect :x="p.x" :y="p.y" :width="p.w" :height="p.h" rx="18" :fill="k === sel ? '#ffd9e3' : '#fff'" :stroke="k === sel ? '#fd519f' : 'none'" stroke-width="4" />
      <text :x="p.x + p.w / 2" :y="p.y + p.h / 2 + 4" text-anchor="middle" font-size="12" font-weight="800" fill="#231437" style="pointer-events:none">{{ p.nome.split(' · ')[0].toUpperCase() }}</text>
    </g>
  </svg>
  <div class="card my-4"><h2 class="font-bold">{{ L.nome }}</h2><p class="text-sm text-on-surface-variant mt-1">{{ L.info }}</p></div>
  <div class="flex flex-col gap-4">
    <ActivityCard v-for="a in atividades" :key="a.id" :a="a" />
    <div v-if="!atividades.length" class="card text-sm">Nenhuma atividade neste espaço.</div>
  </div>
</template>
