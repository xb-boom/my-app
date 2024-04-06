import React, { useEffect, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DrawerComponent from '../drawer/index'
import ModalComponent from '../modal'
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
    click?: () => void
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
            <DrawerComponent isDrawer={isDrawer} onCloseDrawer={onCloseDrawer} title="消息通知" children={<div>暂无消息</div>} />
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

export default CommonUtils