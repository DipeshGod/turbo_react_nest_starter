import { PlusOutlined } from '@icons/index';
import { Button, Row, Typography } from '@antd/index';
import { setIsDrawerOpen } from '../user.atoms';
import { useAtom } from 'jotai';

const UserPageHeader = () => {
  const [, setIsOpen] = useAtom(setIsDrawerOpen);

  return (
    <Row justify="space-between" align="middle">
      <Typography.Title level={2}>Users</Typography.Title>
      <Button
        onClick={() => setIsOpen(true)}
        type="primary"
        icon={<PlusOutlined />}
      >
        Add User
      </Button>
    </Row>
  );
};

export { UserPageHeader };
