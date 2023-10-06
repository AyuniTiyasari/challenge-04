import React, { useState } from 'react'
import PopularMovie from '../components/PopularMovie'
import { Home1 } from '../components/Home1'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState ("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="App">
        <Home1 onSearch={handleSearch} />
        <PopularMovie searchQuery={searchQuery} />
    </div>
  )
}

export default Home;