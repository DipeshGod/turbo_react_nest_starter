import { Spin } from '@antd/index';

const PageSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Spin />
    </div>
  );
};

export { PageSpinner };
