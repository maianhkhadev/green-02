import './style.css'

const List = ({ list, onView, onEdit, onDelete }) => {
  return (
    <div className='row'>
      {list.map(item => {
        return (
          <div key={item.id} className='col-4'>
            <div className='user'>
              <main className='user-main'>
                <h6>Name: {item.name}</h6>
                <div>Email: {item.email}</div>
              </main>

              <footer className='user-footer'>
                <button
                  className='btn btn-sm'
                  onClick={() => {
                    onView(item.id)
                  }}
                >
                  View
                </button>

                <button
                  className='btn btn-sm'
                  onClick={() => {
                    onEdit(item)
                  }}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => {
                    onDelete(item.id)
                  }}
                >
                  Delete
                </button>
              </footer>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
