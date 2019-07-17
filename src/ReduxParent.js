import React, { Component } from 'react'
import { Input,Button,List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
import {changeInputValue, addItemList, deleteItemList} from './store/actionCreators'

class ReduxParent extends Component{
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input style={{ width:'250px', marginRight:'10px'}}
                           onChange={this.changeInputValue}
                    />
                    <Button type="primary" onClick={this.addItemList}>增加</Button>
                </div>
                <div>
                    <div style={{marginTop:'10px',width:'300px'}}>
                        <List
                            bordered
                            //关键代码-----------start
                            dataSource={this.state.list}
                            //关键代码-----------end
                            renderItem={(item, index)=>(<List.Item onClick={this.deleteItemList.bind(this, index)}>{item}</List.Item>)}
                        />
                    </div>
                </div>
            </div>
        )
    }
    storeChange () {
        this.setState(store.getState())
    }
    changeInputValue (e) {
        const action = changeInputValue(e.target.value)
        store.dispatch(action)
    }
    addItemList () {
        const action = addItemList()
        store.dispatch(action)
    }
    deleteItemList (index) {
        const action = deleteItemList(index)
        store.dispatch(action)
    }
}
export default ReduxParent