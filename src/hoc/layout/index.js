import React, { Component, Fragment } from 'react'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div>
          navbar aqui
        </div>
        <main className='container'>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}



export default Layout