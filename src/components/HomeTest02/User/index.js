const User = ({ data, onDelete }) => {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.phone}</div>
      <button
        onClick={() => {
          onDelete(data.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default User
