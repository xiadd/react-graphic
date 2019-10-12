import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import './index.scss'

function Home() {
  return (
    <div className="Home">
      <SEO title="首页" />
      <header className="App-header">
        <p>
          基于 <a href="https://github.com/antvis/g" target="_blank" rel="noopener noreferrer">@antv/g</a> 的canvas基础组件库
        </p>
        <Link to="/demos/" >示例</Link>

        <a href="https://github.com/xiadd/react-graphic" target="_blank" rel="noopener noreferrer">GITHUB</a>
      </header>
    </div>
  );
}

export default Home;