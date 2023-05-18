import { Button } from 'antd';

const SiderButton = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <Button
      type="link"
      style={{ color: 'white', fontSize: '1rem' }}
      icon={icon}
    >
      {text}
    </Button>
  );
};

export default SiderButton;
