/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import './index.less'
// import { useStaticQuery, graphql } from 'gatsby'
const { Header, Content } = Layout

const LayoutContainer = ({ children }) => {

  return (
    <Layout className="basic-layout">
      <Header className="header">
        <div className="header-inner">
          <div className="logo">
            REACT-GRAPHIC
          </div>
          <Menu
            mode="horizontal"
            className="header-menu"
          >
            <Menu.Item key="1">
              <Icon type="bulb" />
              快速开始
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="appstore-o" />
              示例
            </Menu.Item>
            <Menu.Item key="3">
              <a href="https://github.com/xiadd/react-g" target="_blank" rel="noopener noreferrer">
                <Icon type="github" />
                Github
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content style={{ margin: '0 auto', width: 1200 }}>
        <Layout style={{ background: '#fff' }}>
          {children}
        </Layout>
      </Content>
    </Layout>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutContainer
