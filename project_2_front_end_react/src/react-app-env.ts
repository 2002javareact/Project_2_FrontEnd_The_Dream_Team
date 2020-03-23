/// <reference types="react-scripts" />



const devEnvironment = {
  revatureBaseUrl:'http://localhost:2002'
}


const prodEnvironment = {
  // TODO: Add server ec2
  revatureBaseUrl:''
}

export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
  environment = prodEnvironment
}