import React, { Component } from 'react';
import { Button } from 'antd'
import './DefaultLayout.less'

export default class DefaultLayout extends Component {
    render() {
        return (
            <div id="DefaultLayout">
                <div>HelloWorld!</div>
                <Button onClick={()=>{window.location.href='/#/home'}}>首页</Button>
            </div>
        )
    }
}
