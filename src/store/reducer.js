

export default (state ={}, payload) => {
  switch(payload.type){
    case 'REDUX_TESTER':
    return{
      message:payload.message
    }
  }

}
