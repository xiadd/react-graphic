import React from 'react'
import { Layout, Menu } from 'antd'
import BasicLayout from '../../layouts/BasicLayout'
import SEO from '../../components/SEO'
import DemoWrap from '../../components/DemoWrap'
import Rect, { codeString as rectCode } from '../../components/Demos/Rect'
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
            <Menu.Item key="1">Rect</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content className="demo-wrapper">
        <DemoWrap Demo={Rect} codeString={rectCode} />
      </Content>
    </BasicLayout>
  )
}

export default IndexPage
