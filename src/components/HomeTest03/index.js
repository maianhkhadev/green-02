import { useState } from 'react'

const HomeTest03 = () => {
  const [list, setList] = useState([])
  const [value, setValue] = useState('')

  const onChange = e => {
    const newValue = e.target.value
    setValue(newValue)
  }

  const onCreate = () => {
    if (value !== '') {
      const existValue = list.find(item => {
        return item === value
      })

      if (existValue === undefined) {
        setList([...list, value])

        setValue('')
      }
    }
  }

  const onDelete = (str) => {
    const newList = list.filter((item) => {
      return item !== str
    })

    setList(newList)
  }

  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={onCreate}>Add</button>

      {list.map(item => {
        return (
          <div key={item}>
            <div>{item}</div>
            <button onClick={() => { onDelete(item) }}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default HomeTest03
