import { useMemo } from "react"

const Form = ({ ref, isSubmitting, formData, onChange, onSubmit }) => {

  const disabled = useMemo(() => {
    return formData.name === '' || formData.email === ''
  }, [formData])

  return (
    <div ref={ref} id='modal-form-user' className='modal fade'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              {formData.id ? 'Edit' : 'Create'} User
            </h5>
            <button className='btn-close' data-bs-dismiss='modal' />
          </div>
          <div className='modal-body'>
            <div className='mb-3'>
              <label htmlFor='form-name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                id='form-name'
                name='name'
                className='form-control'
                placeholder='Nguyen Van A'
                value={formData.name}
                onChange={onChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='form-name' className='form-label'>
                Email
              </label>
              <input
                type='email'
                id='form-email'
                name='email'
                className='form-control'
                placeholder='name@example.com'
                value={formData.email}
                onChange={onChange}
              />
            </div>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-secondary' data-bs-dismiss='modal'>
              Cancel
            </button>

            {isSubmitting && ( 
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}

            {!isSubmitting && ( 
              <button className='btn btn-primary' disabled={disabled} onClick={onSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
