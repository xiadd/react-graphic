import React from 'react'
import { Row, Col } from 'antd'
import CodeBlock from '../CodeBlock'
import './index.less'

export default function DemoWrap ({ Demo, codeString }) {
  return (
    <Row>
      <Col span={12} className="demo-code">
        <CodeBlock codeString={codeString} />
      </Col>
      <Col span={12} className="demo-preview">
        <Demo />
      </Col>
    </Row>
  )
}