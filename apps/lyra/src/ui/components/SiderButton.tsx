import { Button } from 'antd';

const SiderButton = ({
  text,
  icon,
  isActive,
  isPending,
}: {
  text: string;
  icon: React.ReactNode;
  isActive: boolean;
  isPending: boolean;
}) => {
  return (
    <Button
      loading={isPending}
      type="link"
      style={{
        fontSize: '1rem',
        color: isActive ? 'red' : 'white',
      }}
      icon={icon}
    >
      {text}
    </Button>
  );
};

export default SiderButton;
