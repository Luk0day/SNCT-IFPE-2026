import dados from '~/data/programacao.json'
export { dados }
export type Atividade = (typeof dados.atividades)[number]
export const TIPOS: Record<string, string> = { palestra: 'Palestras', oficina: 'Oficinas', workshop: 'Workshops', mesa: 'Mesa redonda', mostra: 'Mostras' }
export const nomeLocal = (id: string) => (dados.locais as any)[id]?.nome ?? id
export const minutos = (h: string) => { const [a, b] = h.split(':'); return +a * 60 + +b }
export const normaliza = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
export const sobrepoe = (a: Atividade, b: Atividade) => a.id !== b.id && a.dia === b.dia && minutos(a.inicio) < minutos(b.fim) && minutos(b.inicio) < minutos(a.fim)
export const linkCalendario = (a: Atividade) => {
  const d = (dados.evento.dias as any)[a.dia].replace(/-/g, '')
  const f = (h: string) => `${d}T${h.replace(':', '')}00`
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&ctz=America/Recife&text=${encodeURIComponent(a.titulo)}&dates=${f(a.inicio)}/${f(a.fim)}&location=${encodeURIComponent(nomeLocal(a.local) + ', IFPE Campus Palmares')}`
}
