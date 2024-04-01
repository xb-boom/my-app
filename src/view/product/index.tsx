import React, { useState, ReactNode, useEffect, createContext } from "react";
import './index.scss'
import MyTable from '../../component/table/index'
import Modal from '../../component/modal'
import { useMyContext } from '../../utils/Mycontext'
import {
    PlusOutlined,
} from '@ant-design/icons';



interface Formtype {
    name: string,
    mobile: string
}
// 定义一个展示的From表单
const AddUserForm: React.FC = function ({  }) {
    const { FormData, setFormData } = useMyContext()
    useEffect(() => {
        
    }, [])
    const handleInputChange  = function (event: React.ChangeEvent<HTMLInputElement>) {
        // const {name, value} =  event.target
        setFormData({
            ...FormData,
            name: event.target.value
        })

    }
    const FormMobile = function (event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...FormData,
            mobile: event.target.value
        })
    }
    return (
        <>
            <p>
                <input type="text" placeholder="名字" value={FormData.name} onChange={handleInputChange } />
                <input type="text" placeholder="电话" value={FormData.mobile} onChange={handleInputChange } />
            </p>
        </>
    )
}

const Product = function () {
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {

    }, [])

    // 这里要注意， 与取消按钮不同的是，要处理完确认按钮的事件，再去改变弹窗状态
    const handleValueChange = (newValue: boolean) => {
        if (newValue) {
            setIsModal(false)
        } else {
            setIsModal(newValue)
        }
    };
    const TabModalState = () => {
        setIsModal(true)
    }
    return (
        <>
            <button className="addUser" onClick={TabModalState}><PlusOutlined /> 客户信息录入</button>
            <MyTable />
            {
                <Modal
                    isModalOpen={isModal}
                    changeModalState={handleValueChange}
                    ModalTitle={'用户信息录入'}
                    ModalContent={<AddUserForm/>}
                    width={700}
                />
            }
        </>
    )
}



export default Product