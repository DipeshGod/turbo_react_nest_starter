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
    </>
  );
}

export default App;
