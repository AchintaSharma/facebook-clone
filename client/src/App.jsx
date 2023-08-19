function App() {
  const get = async () => {
    const result = await fetch("http://localhost:8000/test");
    console.log("result", result);
  };
  get();
  return <div>welcome to frontend</div>;
}

export default App;
