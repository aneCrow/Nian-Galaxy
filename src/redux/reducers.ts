import * as actions from './actions';

function test(state = actions.TEST,action:any) {
    return state;
}
export default function reducers(state = {},action:any) {
    return{
        test:test(actions.TEST,action)
    }
}