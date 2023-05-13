import { Button } from 'antd';

const SiderButton = ({ text }: { text: string }) => {
  return (
    <Button type="link" style={{ color: 'white', fontSize: '1rem' }}>
      {text}
    </Button>
  );
};

export default SiderButton;
