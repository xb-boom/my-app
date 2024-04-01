import React, { useState, useEffect, useContext, ReactNode } from 'react';
import { Button, Modal } from 'antd';
import { getUserArr } from '../mock/userInfo'
import { useMyContext } from '../utils/Mycontext'
import axios from 'axios';

interface ChildCompenontProps {
    isModalOpen: boolean,
    changeModalState: (value: boolean) => void,
    ModalTitle: string | ReactNode,
    width: number,
    ModalContent: string | ReactNode,
    isFooter:boolean
}

// isModalOpen 绑定弹窗展示/隐藏
// changeModalState 自定义事件，定义不同场景 点击确认按钮的操作
// ModalTitle 弹窗标题 
// width 弹窗宽
// ModalContent 弹窗展示内容

const ModalComponent: React.FC<ChildCompenontProps> = function ({ isModalOpen, changeModalState, ModalTitle, width, ModalContent, isFooter}) {
    // const { FormData,setFormData } = useMyContext()
    useEffect(() => {

    }, [])

    // 确认
    const handleOk = () => {
        // setFormData({
        //     name:'',
        //     mobile:''
        // })
        changeModalState(true)
    }
    // 取消
    const handleCancel = () => {
        changeModalState(false)
    }
    const renderFooter = () => {  
        if (!isFooter) {  
          return null; // 如果不需要显示按钮，返回 null  
        }  
        return [  
          <Button key="ok" type="primary" onClick={handleOk}>  
            确定  
          </Button>,  
          <Button key="cancel" onClick={handleCancel}>  
            取消  
          </Button>,  
        ];  
      };  

    return (
        <>
            <Modal destroyOnClose={true} title={ModalTitle} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={width} cancelText='取消' okText='确认' footer={renderFooter}>
                   {ModalContent}
            </Modal>
        </>
    );

}

export default ModalComponent
