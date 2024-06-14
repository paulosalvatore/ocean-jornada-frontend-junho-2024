import { useEffect, useState } from 'react'

function ViewItemById() {
  const [item, setItem] = useState()

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/1'

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItem(body)
  }

  useEffect(function () {
    carregarDados()
  }, [])

  if (!item) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <h1>{item.name}</h1>
    </>
  )
}

export default ViewItemById
