import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import './index.scss'
import {
    EditOutlined,
    CloseOutlined,
} from '@ant-design/icons';
interface DataType {
    key: string;
    name: string;
    account: string;
    state: string;
    time: string;
    mobile: string
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        // render: (text) => <a>{text}</a>,
        width: '80px',
        align: 'center',
    },
    {
        title: '交易账号',
        dataIndex: 'account',
        key: 'key',
        width: '150px',
        align: 'center',
    },
    {
        title: '用户名称',
        dataIndex: 'name',
        key: 'key',
        width: '150px',
        align: 'center',
    },
    {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'key',
        width: '150px',
        align: 'center',
    },
    {
        title: '开户时间',
        dataIndex: 'time',
        key: 'key',
        width: '350px',
        align: 'center',
    },
    {
        title: '状态',
        align: 'center',
        key: 'key',
        dataIndex: 'state',
        width: '150px',
        render: (_, { state }) => (
            <>
                <Tag color='green' key={state}>
                    {state}
                </Tag>
            </>
        ),
    },
    {
        title: '操作',
        align: 'center',
        key: 'action',
        width: '250px',
        render: (_, record) => (
            <Space size="middle">
                    <div className='ActionEdit'>
                        <EditOutlined /> 编辑
                    </div>
                    <div className='ActionDel'>
                        <CloseOutlined /> 删除
                    </div>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '2',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '3',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '4',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '5',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '6',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '7',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '8',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '9',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
    {
        key: '10',
        name: '周星星',
        account: '001711',
        mobile: '159****3687',
        state: '正常',
        time: '2024年 02月20日 18:50:39'
    },
];

const MyTable: React.FC = () => {
    return (
        <div className="MyTableGrid">
            <h5 className='title'>
                用户信息
            </h5>
            <Table columns={columns} dataSource={data} />
        </div>
    )
};

export default MyTable;