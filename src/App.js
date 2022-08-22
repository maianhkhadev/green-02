import HomeTest04 from './components/HomeTest04'

function App () {
  return (
    <div>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <div className='container'>
          <a
            href='/'
            className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
          >
            <span className='fs-4'>Green Academy</span>
          </a>
        </div>
      </header>

      <main>
        <div className='container'>
          <HomeTest04 />
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default App
