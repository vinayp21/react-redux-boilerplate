const REDUX_TESTER= 'REDUX_TESTER';


export const testAction = (msg) => {
  return {
    type:REDUX_TESTER,
    message:msg
  }
}

//export default testAction;
