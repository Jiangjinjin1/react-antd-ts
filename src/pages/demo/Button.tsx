import React, { FC } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu, Tooltip, Dropdown } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import CSS from './demo.module.css'
import {useNavigate} from "react-router";

const Demo1: FC = () => {
    const navigate = useNavigate()
    const onMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    }
    const menu = (
        <Menu
            onClick={onMenuClick}
            items={[
                {
                    key: '1',
                    label: 'item1',
                },
                {
                    key: '2',
                    label: 'item2',
                }
            ]}
        />
    )

    const toNextRouter = () => {
        navigate('/nestrouter')
    }

    return (
        <div className="App">
            <Button block type="primary">primary Button</Button>
            <Button type="dashed">dashed Button</Button>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" icon={<DownloadOutlined />} size={'small'}>
                Download
            </Button>
            <Button type="primary" loading>Loading</Button>
            <Button type="dashed" ghost>dashed</Button>
            <Button type="primary" ghost danger>dashed</Button>
            <Button type="primary" disabled>
                Primary(disabled)
            </Button>
            <Button type="text" href="www.baidu.com" target="_blank">Text(baidu)</Button>
            <Dropdown.Button type="primary" overlay={menu}>Actions</Dropdown.Button>
            <div className={CSS.box1}></div>
            <Button type='primary' onClick={toNextRouter}>to NestRouter</Button>
        </div>
    )
}

export default Demo1;
