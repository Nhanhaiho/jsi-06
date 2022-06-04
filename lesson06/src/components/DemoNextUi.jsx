import React from 'react'
import {Avatar, Button} from '@nextui-org/react'
const DemoNextUi = () => {
    const pictureUsers = [
    {
      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      color: "primary",
    },
    {
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      color: "secondary",
    },
    {
      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      color: "success",
    },
    {
      src: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      color: "warning",
    },
    {
      src: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      color: "gradient",
    },
  ];
    return <div>
        {pictureUsers.map((picture) => (
          <Avatar src={picture.src} color={picture.color} size="sm" bordered zoomed />
        ))}
        <Button size='sm'>Button</Button>
    </div>
}

export default DemoNextUi;
