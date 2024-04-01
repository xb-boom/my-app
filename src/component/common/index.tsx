import React, { useEffect, ReactNode } from 'react';
import './index.scss'
// import axios from 'axios';
import {
    PlusOutlined,
    UserAddOutlined,
    DiffOutlined,
    ApartmentOutlined,
    AccountBookOutlined,
    CommentOutlined,
    CopyOutlined
} from '@ant-design/icons';
interface ChildCompenontProps {
    // isModalOpen: boolean,
    // changeModalState: (value: boolean) => void,
    // ModalTitle: string,
    // width: number,
}
interface utils {
    name: String,
    icon: ReactNode
    isAdd?: boolean,
}

const utilsArray: Array<utils> = [
    {
        name: '添加功能',
        isAdd: true,
        icon: <PlusOutlined />
    },
    {
        name: '客户信息录入',
        icon: <UserAddOutlined />
    },
    {
        name: '新增项目',
        icon: <DiffOutlined />
    },
    {
        name: '公司信息维护',
        icon: <ApartmentOutlined />
    },
    {
        name: '基金统计',
        icon: <AccountBookOutlined />
    },
    {
        name: '消息管理',
        icon: <CommentOutlined />
    },
    {
        name: '操作日志',
        icon: <CopyOutlined />
    },

]

const CommonUtils: React.FC<ChildCompenontProps> = function () {

    useEffect(() => {

    }, [])

    return (
        <div className='common-wrap'>
            <h5 className='title'>
                常用功能
            </h5>
            <ul>
                {
                    utilsArray.map((item, idx) => {
                        return (
                            <li className={item.isAdd ? 'add-utils' : 'utils-li'} key={idx}>
                                <div>{item.icon}</div>
                                <b>{item.name}</b>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );

}

export default CommonUtils