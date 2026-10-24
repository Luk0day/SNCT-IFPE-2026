<script setup lang="ts">
const props = defineProps<{ a: Atividade; remover?: boolean }>()
const { salva, alternar, choques } = useAgenda()
const conflito = computed(() => (salva(props.a.id) ? choques(props.a)[0] : undefined))
</script>
<template>
  <article class="card flex flex-col gap-3">
    <div class="flex flex-wrap gap-2 items-center justify-between">
      <span class="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">{{ TIPOS[a.tipo] }}</span>
      <span class="px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-bold"><span class="mi !text-[15px]">schedule</span> {{ a.inicio }} – {{ a.fim }}</span>
    </div>
    <h3 class="text-[17px] font-bold leading-snug">{{ a.titulo }}</h3>
    <p class="text-sm text-on-surface-variant"><span class="mi !text-[18px]">person</span> {{ a.quem }}</p>
    <p class="text-sm text-on-surface-variant"><span class="mi !text-[18px]">location_on</span> {{ nomeLocal(a.local) }}</p>
    <p v-if="conflito" class="rounded-2xl bg-error-container text-on-error-container text-sm p-3">
      <span class="mi !text-[18px]">warning</span> Choque de horário com “{{ conflito.titulo }}”.
    </p>
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs font-semibold text-on-surface-variant">{{ a.vagas }}</span>
      <div class="flex gap-2">
        <a :href="linkCalendario(a)" target="_blank" rel="noopener" aria-label="Adicionar ao calendário do celular" class="w-12 h-12 grid place-items-center rounded-full bg-surface-container text-primary"><span class="mi">event</span></a>
        <NuxtLink :to="{ path: '/mapa', query: { local: a.local } }" aria-label="Ver no mapa" class="w-12 h-12 grid place-items-center rounded-full bg-surface-container text-primary"><span class="mi">map</span></NuxtLink>
        <button :aria-label="salva(a.id) ? 'Remover da minha agenda' : 'Salvar na minha agenda'" class="w-12 h-12 grid place-items-center rounded-full" :class="salva(a.id) ? 'bg-secondary-fixed text-secondary' : 'bg-surface-container text-primary'" @click="alternar(a.id)">
          <span class="mi">{{ remover ? 'delete' : 'bookmark' }}</span>
        </button>
      </div>
    </div>
  </article>
</template>
