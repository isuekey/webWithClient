import axios from 'axios';

class RemoteAction {
  static basePath = "";
  constructor(url, method='get'){
    this.method=method.toLowerCase();
    this.url = url;
  }
  action(...params){
    if(!axios[this.method]) return Promise.reject('unkown axios action:'+this.method);
    return axios[this.method](...params).then((resp)=> {
      return this.thenable && this.thenable(resp);
    });
  }
  thenable(resp) {
    return resp;
  }
}

const exampleGet = new RemoteAction(RemoteAction.basePath + './mock.data.json');

const actions = {
  exampleGet
};

export {
  RemoteAction,
  actions
}
