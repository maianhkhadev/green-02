import { useState, useMemo, useEffect, useRef } from 'react'
import Form from './Form'
import List from './List'
import ModalView from './ModalView'
import './style.css'
import { getUsers, createUser, editUser, deleteUser } from '../../apis/users'

const DEFAULT_FORM_DATA = { name: '', email: '' }

const validate = (list, formData) => {
  if (formData.name === '' || formData.email === '') {
    return false
  }

  // Create
  if (!formData.id) {
    const item = list.find(item => {
      return item.name === formData.name || item.email === formData.email
    })

    return item ? false : true
  }

  // Edit
  if (formData.id) {
    const item = list.find(item => {
      return (
        item.id !== formData.id &&
        (item.name === formData.name || item.email === formData.email)
      )
    })

    return item ? false : true
  }

  return false
}

const HomeTest04 = () => {
  const modalViewRef = useRef()
  const modalEditRef = useRef()
  const [selectedId, setSelectedId] = useState()
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const resultList = useMemo(() => {
    if (search) {
      const newResultList = list.filter(item => {
        return item.name.includes(search) || item.email.includes(search)
      })

      return newResultList
    }

    return list
  }, [search, list])

  const fetchData = async () => {
    setIsLoading(true)

    const response = await getUsers()
    setList(response.data)
    setIsLoading(false)
  }

  const onChange = e => {
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = () => {
    const isValidated = validate(list, formData)

    if (isValidated) {
      if (!formData.id) {
        setIsSubmitting(true)

        createUser(formData)
          .then(res => {
            fetchData()
            setFormData(DEFAULT_FORM_DATA)
            setIsSubmitting(false)
          })
          .catch(error => {
            console.log(error)
          })
      }

      if (formData.id) {
        setIsSubmitting(true)

        editUser(formData.id, formData)
          .then(res => {
            fetchData()
            setFormData(DEFAULT_FORM_DATA)
            setIsSubmitting(false)
          })
          .catch(error => {
            console.log(error)
          })
      }

      const element = modalEditRef.current
      const modal = window.bootstrap.Modal.getOrCreateInstance(element)
      modal.hide()
    }
  }

  const onCreate = () => {
    setFormData(DEFAULT_FORM_DATA)

    const element = modalEditRef.current
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  }

  const onView = id => {
    setSelectedId(id)

    const element = modalViewRef.current
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  }

  const onEdit = data => {
    setFormData(data)

    const element = modalEditRef.current
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  }

  const onDelete = id => {
    deleteUser(id)
      .then(res => {
        fetchData()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onSearch = e => {
    const value = e.target.value
    setSearch(value)
  }

  return (
    <div>
      <header className='header row'>
        <h4 className='col-7'>Users</h4>

        <div className='col-3'>
          <input
            className='form-control'
            value={search}
            placeholder='Type to search...'
            onChange={onSearch}
          />
        </div>

        <div className='col-2'>
          <button type='button' className='btn btn-primary' onClick={onCreate}>
            Create
          </button>
        </div>
      </header>

      {isLoading && ( 
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      {!isLoading && ( 
        <div>
            {resultList.length === 0 && <div>No data found</div>}

            <List list={resultList} onView={onView} onEdit={onEdit} onDelete={onDelete} />
        </div>
      )}

      <Form ref={modalEditRef} isSubmitting={isSubmitting} formData={formData} onChange={onChange} onSubmit={onSubmit} />

      <ModalView ref={modalViewRef} id={selectedId} />
    </div>
  )
}

export default HomeTest04
