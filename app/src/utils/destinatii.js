export function getOrase(list) {
  return list.map((destinatie) => destinatie.oras)
}

export function getNevizitate(list) {
  return list.filter((destinatie) => destinatie.vizitat === false)
}

export function totalZile(list) {
  return list.reduce((total, destinatie) => total + destinatie.zile, 0)
}

export function formatDestinatie({ oras, tara, zile, vizitat }) {
  const marcaj = vizitat ? '[x]' : '[ ]'
  return `${marcaj} ${oras}, ${tara} (${zile} zile)`
}

export function numarPeTara(list) {
  return list.reduce((numar, destinatie) => {
    const tara = destinatie.tara
    numar[tara] = (numar[tara] || 0) + 1
    return numar
  }, {})
}

export function sortDupaZile(list) {
  return [...list].sort((a, b) => b.zile - a.zile)
}

export function marcheazaVizitat(list, id) {
  return list.map((destinatie) =>
    destinatie.id === id
      ? { ...destinatie, vizitat: !destinatie.vizitat }
      : destinatie,
  )
}

export function adaugaDestinatie(list, d) {
  return [...list, d]
}

export function stergeDestinatie(list, id) {
  return list.filter((destinatie) => destinatie.id !== id)
}
