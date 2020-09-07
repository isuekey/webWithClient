
import React from 'react';
import { base } from './base';


class LoadComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  loading = false;
  componentDidMount(){
    const action = this.reduxAction || ( this.reduxActionMaker && this.reduxActionMaker() );
    if(this.props.dispatch){
      this.props.dispatch(action);    
    } else if (this.dispatch) {
      this.dispatch(action)
    }
  }
  static getActionType = (code) => {
    return [base.code, code].filter(ele => !!ele).join('-');
  }
  thenOk = (resp, code='', dispatch=this.props.dispatch) => {
    if(!dispatch) return resp;
    dispatch({
      type: LoadComponent.getActionType(code),
      resp
    });
  }
}

export {
  LoadComponent
}