import React, { ReactNode, useState } from 'react';
import { Button, Drawer } from 'antd';
interface ChildCompenontProps {
  isDrawer: boolean
  onCloseDrawer: () => void
  title: string
  children: ReactNode
}
const DrawerComponent: React.FC<ChildCompenontProps> = ({ isDrawer, onCloseDrawer, title, children }) => {

  const showDrawer = () => {
    // setOpen(true);
  };

  const onClose = () => {
    // setOpen(false);
  };

  return (
    <>
      <Drawer title={title} onClose={onCloseDrawer} open={isDrawer}>
        {children}
      </Drawer>
    </>
  );
};

export default DrawerComponent;