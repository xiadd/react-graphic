import React, { Component } from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import SEO from '../../components/seo'

class Page extends Component {
  render () {
    return (
      <BasicLayout location={this.props.location}>
        <SEO title="快速开始" />
        快速开始
      </BasicLayout>
    )
  }
}

export default Page