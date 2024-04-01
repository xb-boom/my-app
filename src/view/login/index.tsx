import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './index.scss'
import { useMyContext } from '../../utils/Mycontext'

const LoginPage = () => {
    const { setLoading } = useMyContext();
    type userInfoType = {
        userName: string,
        passWord: string,
    }
    const [UserInfo, setUserInfo] = useState<userInfoType>({
        userName: '',
        passWord: ''
    })
    const navigate = useNavigate();
    const login = (): void => {
        if (UserInfo.userName === 'admin' && UserInfo.passWord === '123456') {
            navigate('/index',{ replace: true });
            localStorage.setItem('token', '1gkjdbcgsfnbf1hgffkcjhi673')
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }

    }
    const enterName = function (event: React.ChangeEvent<HTMLInputElement>) {
        setUserInfo({
            ...UserInfo,
            userName: event.target.value
        })
    }
    const enterPwd = function (event: React.ChangeEvent<HTMLInputElement>) {
        setUserInfo({
            ...UserInfo,
            passWord: event.target.value
        })
    }
    return (
        <>
            <div className="loginPage">
                <div className="loginModal">
                    <div className="loginImage">
                        <Avatar size={100} icon={<UserOutlined />} />
                        <p>WELCOME</p>
                    </div>
                    <div className="loginForm">
                        <div className='formUtils'>
                            <input type="text" placeholder='用户名' value={UserInfo.userName} onChange={enterName}   onKeyDown={login}/>
                            <input type="password" placeholder='密码' value={UserInfo.passWord} onChange={enterPwd}  onKeyDown={login}/>
                            <p>
                                <span>记住密码</span>
                                <span>忘记密码</span>
                            </p>
                            <button onClick={login}>立即登录</button>
                            <span>没有账号？立即注册</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage