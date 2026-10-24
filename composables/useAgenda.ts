// Agenda pessoal: fica só no aparelho (localStorage). Sem cadastro, sem backend.
export const useAgenda = () => {
  const ids = useState<number[]>('agenda', () => [])
  const carregada = useState('agenda-ok', () => false)
  onMounted(() => {
    if (carregada.value) return
    try { ids.value = JSON.parse(localStorage.getItem('snct_agenda') || '[]') } catch {}
    carregada.value = true
  })
  const gravar = () => { try { localStorage.setItem('snct_agenda', JSON.stringify(ids.value)) } catch {} }
  const salva = (id: number) => ids.value.includes(id)
  const alternar = (id: number) => { ids.value = salva(id) ? ids.value.filter(i => i !== id) : [...ids.value, id]; gravar() }
  const choques = (a: Atividade) => dados.atividades.filter(o => ids.value.includes(o.id) && sobrepoe(a, o))
  return { ids, salva, alternar, choques }
}
