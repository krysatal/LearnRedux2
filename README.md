## Learn Redux
    把所有的Redux Action放到一个文件里进行管理
    1.创建actionTypes.js文件，写入
        export const  CHANGE_INPUT = 'changeInput'
    2.创建actionCreatores.js，引入
        import {CHANGE_INPUT} from './actionTypes.js'
        
        export const changeInputValue = (value)=>({
            type: CHANGE_INPUT,
            value
        })
    3.将actionCreatores.js引入组件ReduxParent.js中
        import {changeInputAction} from './store/actionCreatores'
    4.给input的onchange事件添加方法如下：
        changeInputValue (e) {
                const action = changeInputValue(e.target.value)
                store.dispatch(action)
        }
    5.在reduer.js中写入
        if (action.type === CHANGE_INPUT) {
                let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
                newState.inputValue = action.value
                return newState
        }
