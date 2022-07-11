import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import './style.css'

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const Profile = () => (
    <div className={'profileBody'}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="个人信息" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="策略一览" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="预测记录" key="3">
                Content of Tab Pane 3
            </TabPane>
            <TabPane tab="充值" key="4">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </div>

);

export default Profile;