/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import './index.scss'

const { Header, Content } = Layout

class LayoutContainer extends React.Component {
  render () {
    const { location, hasSider, children } = this.props
    const pathname = location.pathname
    return (
      <Layout className="basic-layout" >
        <Header className="header">
          <div className="header-inner">
            <div className="logo">
              REACT-GRAPHIC
            </div>
            <Menu
              mode="horizontal"
              className="header-menu"
              selectedKeys={[pathname]}
            >
              <Menu.Item key="/">
                <Link to="/">
                  <Icon type="home" />
                  首页
                </Link>
              </Menu.Item>

              <Menu.Item key="/quick-start/">
                <Link to="/quick-start/">
                  <Icon type="bulb" />
                  快速开始
                </Link>
              </Menu.Item>
              <Menu.Item key="/demos/">
                <Link to="/demos/">
                  <Icon type="appstore" />
                  示例
                </Link>
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
        <Content className="layout-content">
          <Layout className="layout-content-wrapper" hasSider={hasSider}>
            {children}
          </Layout>
        </Content>
      </Layout>
    )
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRouter(LayoutContainer)
