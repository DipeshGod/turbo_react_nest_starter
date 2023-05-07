import { Button } from 'antd';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <Button type="primary">Antd Button</Button>
    </>
  );
}

export default App;
