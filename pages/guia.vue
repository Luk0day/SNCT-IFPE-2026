<template>
  <h1 class="text-3xl font-extrabold mb-4">Guia do visitante</h1>
  <div class="card mb-6"><h2 class="font-bold">Como chegar</h2>
    <p class="text-sm my-2">IFPE Campus Palmares · Palmares, PE.</p>
    <div class="grid grid-cols-2 gap-2">
      <a class="btn btn-p" target="_blank" rel="noopener" href="https://maps.google.com/?q=IFPE+Campus+Palmares">Google Maps</a>
      <a class="btn !bg-transparent !text-primary ring-2 ring-primary-container" target="_blank" rel="noopener" href="https://waze.com/ul?q=IFPE+Campus+Palmares">Waze</a>
    </div></div>
  <h2 class="text-xl font-extrabold mb-3">Perguntas frequentes</h2>
  <details v-for="f in dados.faq" :key="f.p" class="card mb-3 !py-1"><summary class="min-h-[48px] flex items-center font-display font-bold cursor-pointer">{{ f.p }}</summary><p class="text-sm text-on-surface-variant pb-3">{{ f.r }}</p></details>
  <h2 class="text-xl font-extrabold my-4">Contatos</h2>
  <div class="card"><p class="mb-3">Dúvidas sobre o evento? Fale com a comissão da SNCT.</p>
    <a class="btn btn-p" target="_blank" rel="noopener" href="https://wa.me/55DDDNUMERO">Chamar no WhatsApp</a>
    <p class="text-sm text-on-surface-variant mt-3">Instagram: @ifpepalmares</p></div>
</template>
