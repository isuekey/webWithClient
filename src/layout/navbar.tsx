
import React from 'react';

interface NavbarProps extends React.ComponentProps<any> {
};
interface NavbarState {
};
class Navbar extends React.PureComponent<NavbarProps, NavbarState>{
  render(){
    return (
      <nav className="width-100 flex-row height-100px">
        top nav bar
      </nav>
    );
  }
}

export {
  Navbar,
}
