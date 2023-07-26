function App() {
  const get = async () => {
    const res = await fetch("http://localhost:3000/test");
    console.log("res", res);
  };
  return <div>welcome to frontend</div>;
}

export default App;
