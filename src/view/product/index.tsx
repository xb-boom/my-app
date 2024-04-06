import React, { useState, useEffect, ReactNode } from "react";
import './index.scss'
import MyTable from '../../component/table/index'
import ModalComponent from '../../component/modal'
// import { useMyContext } from '../../utils/Mycontext'
import { useLocation } from 'react-router-dom';
import { Button, Form, type FormProps, Input, Col, Row, Radio, DatePicker } from 'antd';
import {
    UserAddOutlined,
} from '@ant-design/icons';


type FieldType = {
    name?: string;
    mobile?: string;
    sex?: string
};
interface ChildCompenontProps {
    UpValueData: (value: FieldType) => void,
}
interface FromMapDataType {
    label: string
    name: string | any
    rules?: Array<object>
    inputType: ReactNode
}

const FormMapData: Array<FromMapDataType> = [
    {
        label: '客户名称',
        name: 'name',
        rules: [{ required: true, message: '请输入客户名称！' }],
        inputType: <Input />
    },
    {
        label: '手机号码',
        name: 'mobile',
        rules: [{ required: true, message: '请输入手机号码！' }],
        inputType: <Input />
    },
    {
        label: '性别',
        name: 'sex',
        inputType: (
            <Radio.Group>
                <Radio value="man"> 男</Radio>
                <Radio value="woman">女</Radio>
            </Radio.Group>
        )
    },
    {
        label: '用户地址',
        name: 'address',
        rules: [{ required: true, message: '请输入用户地址！' }],
        inputType: <Input />
    },
    {
        label: '时间',
        name: 'time',
        rules: [{ required: true, message: '请选择时间！' }],
        inputType: <DatePicker />
    },



]
// 定义一个展示的From表单
const AddUserForm: React.FC<ChildCompenontProps> = function ({ UpValueData }) {
    useEffect(() => {

    }, [])
    // 正确输入后提交
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        // console.log('Success:', values);
        UpValueData(values)
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                preserve={false}
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                variant="filled"
            >
                {
                    FormMapData.map((item, idx) => {
                        return (
                            <Form.Item<FieldType>
                                key={idx}
                                label={item.label}
                                name={item.name}
                                rules={item.rules}
                            >
                                {item.inputType}
                            </Form.Item>
                        )
                    })
                    // <Row>
                    //     <Col span={12}></Col>
                    //     <Col span={12}></Col>
                    // </Row>
                }
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

const Product: React.FC = function () {
    const location = useLocation();
    const { state } = location;
    const [isModal, setIsModal] = useState(state?.isModal || false);
    const [FromData, setFormData] = useState<FieldType>({
        name: '',
        mobile: '',
        sex: ''
    })
    useEffect(() => {
        // console.log(FromData)
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
    const upFromData = (newValue: FieldType) => {
        setFormData(newValue)
        setIsModal(false)
    }
    return (
        <>
            <button className="addUser" onClick={TabModalState}><UserAddOutlined /> 客户信息录入</button>
            <MyTable />
            {
                <ModalComponent
                    isModalOpen={isModal}
                    changeModalState={handleValueChange}
                    ModalTitle={'用户信息录入'}
                    ModalContent={<AddUserForm UpValueData={upFromData} />}
                    width={700}
                    isFooter={false}
                />
            }
        </>
    )
}



export default Product