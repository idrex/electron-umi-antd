import React from 'react'
import { Layout } from 'antd'
import './index.less'


const { Header } = Layout

const headerProps = {
  style: {
    background: '#A14EFF'
  }
}

const HeaderComponent = (props: any) => {

  return (
    <Header {...headerProps} className='layout-top-eader'>
      <div className='d-flex align-items-center justify-content-between'>
        <div style={{ marginLeft: 20 }} >Hello Electron-Umi-Antd</div>
      </div>
    </Header>
  )
}

export default HeaderComponent
