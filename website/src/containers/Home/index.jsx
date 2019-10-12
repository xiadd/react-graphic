import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <p>
          基于 <a href="https://github.com/antvis/g" target="_blank" rel="noopener noreferrer">@antv/g</a> 的canvas基础组件库
        </p>
        <Link to="/demos/" className="App-link " >示例</Link>

        <a href="https://github.com/xiadd/react-graphic" target="_blank" rel="noopener noreferrer" className="App-link">GITHUB</a>
      </header>
    </div>
  );
}

export default Home;