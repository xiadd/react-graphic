import React from 'react'
import { Layout, Menu } from 'antd'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import BasicLayout from '../../layouts/BasicLayout'
import SEO from '../../components/SEO'
import RectDemo from './components/Rect'
import CircleDemo from './components/Circle'
import PathDemo from './components/Path'
import DragDemo from './components/Drag'
import './index.scss'

const { SubMenu } = Menu
const { Content, Sider } = Layout

const IndexPage = ({ location }) => {
  return (
    <BasicLayout location={location} hasSider={true}>
      <SEO title="示例" />
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu
            key="sub1"
            title="基础形状"
          >
            <Menu.Item key="rect">
              <Link to="/demos/rect">Rect</Link>
            </Menu.Item>

            <Menu.Item key="circle">
              <Link to="/demos/circle">Circle</Link>
            </Menu.Item>
            
            <Menu.Item key="path">
              <Link to="/demos/path">Path</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title="事件"
          >
            <Menu.Item key="5">
              <Link to="/demos/drag" >拖拽事件</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub4"
            title="API"
          >
            <Menu.Item key="6">Rect</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content className="demo-wrapper">
        <Switch>
          <Route path="/demos/rect" component={RectDemo} />
          <Route path="/demos/circle" component={CircleDemo} />
          <Route path="/demos/path" component={PathDemo} />
          <Route path="/demos/drag" component={DragDemo} />
          <Redirect exact from="/demos" to="/demos/rect" />
        </Switch>
        
      </Content>
    </BasicLayout>
  )
}

export default IndexPage
