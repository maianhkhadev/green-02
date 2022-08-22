import { useState } from 'react'
import User from './User'

const HomeTest01 = () => {
  const [list, setList] = useState([])

  const onCreate = () => {
    setList([
      ...list,
      { id: Math.random(), name: 'kha', phone: '12345567' }
    ])
  }

  const onDelete = (id) => {
    const newList = list.filter(item => {
      return item.id !== id
    })

    setList(newList)
  }

  return (
    <div>
      <button onClick={onCreate}>
        Add
      </button>

      {list.map(item => {
        return <User key={item.id} data={item} onDelete={onDelete} />
      })}
    </div>
  )
}

export default HomeTest01
