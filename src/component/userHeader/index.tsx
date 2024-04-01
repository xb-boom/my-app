import { ReactNode, useState } from 'react'
import './index.scss'
import { Avatar, Dropdown, } from 'antd';
import type { MenuProps } from 'antd';
import Modal from '../modal'
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
interface userInfoType {
  name: string,
  age: number,
  imageUrl: string,
}

// interface MyComponentProps {
//   isModal: boolean;
// }
type NewMenuProps = MenuProps & {
  outLogin: () => void
}

const userObject: userInfoType = {
  name: '艾薇薇',
  age: 18,
  imageUrl: 'http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg'
}

function UserHeader() {
  const [isModal, setIsModal] = useState(false);
  const [ModalTitle, setModalTitle] = useState('提示');
  const [ModalContent, setModalContent] = useState<ReactNode>(null);
  const navigate = useNavigate();

  const items: NewMenuProps['items'] = [
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" onClick={tabAccent}>
          退出登录
        </a>
      ),
    },
  ];
  // 登出
  function outLogin() {
    navigate('/login', { replace: true });
    localStorage.removeItem('token')
  }
  // 切换用户
  function tabAccent() {
    setIsModal(true)
    setModalContent(<><ExclamationCircleTwoTone twoToneColor="red"/> 您确认要退出登录吗</>)
  }
  const handleValueChange = (newValue: boolean) => {
    setIsModal(newValue)
    newValue && outLogin()
  };
  return (
    <>
      <div className='userImage'>
        <p>欢迎，
          <span>{userObject.name}</span>
        </p>
        <Dropdown menu={{ items }} placement="bottom">
          <Avatar size="large" src={userObject.imageUrl} />
        </Dropdown>
        <Modal
          isModalOpen={isModal}
          changeModalState={handleValueChange}
          ModalTitle={ModalTitle}
          ModalContent={ModalContent}
          width={400}
        />
      </div>
    </>
  )
}

export default UserHeader