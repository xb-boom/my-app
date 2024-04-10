import React, { useEffect, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DrawerComponent from '../drawer/index'
import ModalComponent from '../modal'
// 定义一个消息列表
import { Avatar } from 'antd';
import './index.scss'
// import axios from 'axios';
import {
    PlusOutlined,
    UserAddOutlined,
    DiffOutlined,
    ApartmentOutlined,
    AccountBookOutlined,
    CommentOutlined,
    CopyOutlined,
    UserOutlined,
    BellTwoTone
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
    click?: () => void
}

interface MessageListParams {
    id: number,
    icon: ReactNode,
    time: string,
    name: string,
    tip: string,
    number: number
}
interface ChildrenMessageList {
    MessageList: Array<MessageListParams>
}

const CommonUtils: React.FC<ChildCompenontProps> = function () {
    const navigate = useNavigate();

    const [isDrawer, setIsDrawer] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const handleValueChange = (newValue: boolean) => {
        if (newValue) {
            setIsModal(false)
        } else {
            setIsModal(newValue)
        }
    };
    const onCloseDrawer = () => {
        setIsDrawer(false)
    }

    const utilsArray: Array<utils> = [
        {
            name: '添加功能',
            isAdd: true,
            icon: <PlusOutlined />,
            click: () => {
                setIsModal(true)
            }
        },
        {
            name: '客户信息录入',
            icon: <UserAddOutlined />,
            click: () => {
                navigate('/product', { state: { 'isModal': true } })
            }
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
            icon: <CommentOutlined />,
            click: () => {
                setIsDrawer(true)
            }
        },
        {
            name: '操作日志',
            icon: <CopyOutlined />
        },

    ]

    const MessageList: Array<MessageListParams> = [
        {
            id: 1,
            icon: <UserOutlined />,
            time: '08月07日 12:00:06',
            name: '王先生',
            tip: '办公资产',
            number: 1000
        },
        {
            id: 2,
            icon: <UserOutlined />,
            time: '08月07日 12:00:06',
            name: '王先生',
            tip: '办理定期存款',
            number: 1000
        },
        {
            id: 3,
            icon: <UserOutlined />,
            time: '08月07日 12:00:06',
            name: '王先生',
            tip: '办公资产',
            number: 1000
        },
    ]
    useEffect(() => {

    }, [])

    return (
        <>
            <div className='common-wrap'>
                <h5 className='title'>
                    常用功能
                </h5>
                <ul>
                    {
                        utilsArray.map((item, idx) => {
                            return (
                                <li className={item.isAdd ? 'add-utils' : 'utils-li'} key={idx} onClick={item.click}>
                                    <div>{item.icon}</div>
                                    <b>{item.name}</b>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <DrawerComponent isDrawer={isDrawer} onCloseDrawer={onCloseDrawer} title={<><BellTwoTone/> 消息通知</>} children={<DrawerComponentChildren MessageList={MessageList} />} />
            <ModalComponent
                isModalOpen={isModal}
                changeModalState={handleValueChange}
                ModalTitle={'添加功能'}
                ModalContent={<>还在加班开发</>}
                width={700}
                isFooter={false} />
        </>
    );

}


const DrawerComponentChildren: React.FC<ChildrenMessageList> = ({ MessageList }) => {
    return (
        <>
            <ul>
                {
                    MessageList.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <div>
                                    <Avatar size={26} icon={item.icon} />
                                    {item.time}
                                </div>
                                <div>
                                    <b>{item.name}</b>
                                    <span>{item.tip}</span>
                                </div>
                                <div>
                                    <b>{item.number}</b>
                                    <button>已读</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CommonUtils