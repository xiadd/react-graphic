import React from 'react'
import { Row, Col } from 'antd'
import CodeBlock from '../CodeBlock'
import './index.scss'

export default function DemoWrap ({ Demo, codeString, title, desc  }) {
  return (
    <div className="demo-wrap">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Row style={{ marginBottom: 10 }}>
        <Col span={12} className="demo-code">
          <CodeBlock codeString={codeString} />
        </Col>
        <Col span={12} className="demo-preview">
          <Demo />
        </Col>
      </Row>
    </div>
  )
}