import React, { FC } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu, Tooltip, Dropdown } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

const Demo1: FC = () => {
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
        </div>
    )
}

export default Demo1;
