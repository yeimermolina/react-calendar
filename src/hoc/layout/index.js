import React, { Component, Fragment } from 'react'
import NavBar from '../../components/layout/navbar'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className='container'>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}



export default Layout