import React, { useEffect ,useState } from 'react';
import { HashRouter  as Router, Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home'
import Profile from './components/profile'
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


export default function App() {

    return (
        <Router>
            <div className="App">
                <div className="App-body">
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                        <Menu.Item key="mail" icon={<MailOutlined />}>
                            LOGO
                        </Menu.Item>
                    </Menu>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/profile" element={<Profile/>}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );

}