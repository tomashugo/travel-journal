import './App.css'
import Post from './components/Post'
import data from './data'

function App() {
  const posts = data.map((item) => {
    return (
      <Post 
        {...item}
      />
    )
  })
  
  return (
    <div>
      <nav>
        <h1><i className="fa-sharp fa-solid fa-earth-americas"></i> my travel journal.</h1>
      </nav>
      <main>
        {posts}
      </main>
    </div>
  )
}

export default App
