/// <reference types="react-scripts" />



const devEnvironment = {
  mTBaseUrl:'http://localhost:2002'
}


const prodEnvironment = {
  // TODO: Add server ec2
  mTBaseUrl:''
}

export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
  environment = prodEnvironment
}