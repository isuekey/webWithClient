import axios from 'axios';

class RemoteAction {
  static basePath = "";
  constructor(method='get'){
    this.method=method.toLowerCase();
  }
  action(...params){
    if(!axios[this.method]) return Promise.reject('unkown axios action:'+this.method);
    return axios[this.method](...params).then((resp)=> {
      return (this.thenable && this.thenable(resp)) || resp;
    });
  }
  thenable(resp) {
    return resp;
  }
}
const actions = {
  get: new RemoteAction('get'),
  post: new RemoteAction('post'),
}

export {
  RemoteAction,
  actions
}
