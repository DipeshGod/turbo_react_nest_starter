import {
  Button,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
} from '../../../../ui/antd';
import { useAtom } from 'jotai';
import { isDrawerOpen, setIsDrawerOpen } from '../user.atoms';
import { useGetRoles } from '../hooks/useGetRoles';
import { useGetBranches } from '../hooks/useGetBranches';

const UserDrawer = () => {
  const [isOpen] = useAtom(isDrawerOpen);
  const [, setIsOpen] = useAtom(setIsDrawerOpen);

  const { roles, isLoadingRoles } = useGetRoles();
  const { branches, isLoadingBranches } = useGetBranches();

  return (
    <Drawer
      width={600}
      title="Add User"
      placement="right"
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <Spin spinning={isLoadingRoles || isLoadingBranches}>
        <Form
          name="userForm"
          onFinish={(values) => {
            console.log('values', values);
          }}
        >
          <Row style={{ flexDirection: 'column' }}>
            <div style={{ minHeight: '85vh' }}>
              <Row justify="space-between">
                <Form.Item label="First Name" name="firstName">
                  <Input placeholder="Johan" />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName">
                  <Input placeholder="Liebert" />
                </Form.Item>
              </Row>
              <Form.Item label="Email" name="email">
                <Input placeholder="john@email.com" />
              </Form.Item>

              <Form.Item label="Role" name="role">
                <Select placeholder="Select Role" defaultValue="2">
                  {roles?.map((role: any) => (
                    <Select.Option key={role.id} value={role.id}>
                      {role.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Branch" name="branch">
                <Select showSearch placeholder="Select Branch">
                  {branches?.map((branch: any) => (
                    <Select.Option key={branch.id} value={branch.id}>
                      {branch.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <Row>
              <Space>
                <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Save
                </Button>
              </Space>
            </Row>
          </Row>
        </Form>
      </Spin>
    </Drawer>
  );
};

export { UserDrawer };
