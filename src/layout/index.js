
import React from 'react';
import { Navbar } from './navbar.js';
import { SideMenu } from './sideMenu.js';

import './layout.css';

class Layout extends React.PureComponent{
  render() {
    return (
      <div className="flex-row flex-wrap bg-show height-100 content-top">
        <Navbar />
        <SideMenu />
        <div className="flex-col flex">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export {
  Layout
}
