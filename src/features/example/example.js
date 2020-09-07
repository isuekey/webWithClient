
import React from 'react';
import * as meta from '../../meta';
import { connect } from 'react-redux';
import axios from 'axios';

const Action = {
  code:'exmaple',
  resp:"example_resp"
};

const ActionType = Object.entries(Action).reduce((sum, [key, val])=> {
  sum[key] = meta.LoadComponent.getActionType(val);
  return sum;
}, {});
const refreshActionType = () => {
  Object.entries(Action).forEach(([key, val]) => {
    ActionType[key] = meta.LoadComponent.getActionType(val);
  })
}

class ExamplePresntation extends meta.LoadComponent {
  static urls = {
    getExample:'./mock.data.json'
  }
  reduxActionMaker(code=Action.code) {
    return (dispatch) =>{
      switch(code){
      case Action.code:
        return exampleGet(ExamplePresntation.urls.getExample, 'get').then(
          resp => {
            this.thenOk(resp, Action.resp, dispatch);
          },
        );
      default:
        return exampleGet(ExamplePresntation.urls.getExample, 'get').then(
          resp => {
            this.thenOk(resp, Action.resp, dispatch);
          },
        );
      }
    }
  }
  render() {
    return (
      <div>
        Example
      </div>
    );
  }
};

const mapStateToProps = (storeState, props) => {
  console.log('map state to props', props);
  return {
    ...props,
    ...storeState,
  }
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   // console.log('map dispatch to props', dispatch, ownProps)
//   return {
//     dispatch,
//     ...ownProps,
//   };
// }

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   // the default order
//   return {
//     ...ownProps, ...stateProps, ...dispatchProps
//   };
// };
/* //default options
{
  context?: Object,
  pure?: boolean,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
*/
// const options = undefined;

// const Example = connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(ExamplePresntation);
const Example = connect(mapStateToProps)(ExamplePresntation);

const exampleGet = (url, method='get', ...params) => {
  return axios[method](url, ...params);
};

const reducers = (storeState={}, action={})=>{
  switch(action.type){
  case ActionType.resp:
    // console.log('action type is matched', action);
    return {
      ...storeState,
      [ActionType.resp]: {
        ...storeState[ActionType.resp],
        ...action.resp
      }
    }    
  default:
    console.log('unkown action', action);
    return storeState;
  }
};

export {
  Example,
  reducers,
  ActionType,
  refreshActionType
}
