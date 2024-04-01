const Card = () => {

  const items = ["elma","armut", "muz"]

  return (
    <>
      <h1> You have an Card </h1>
      {items.length > 0 &&  <h2> You have {items.length}-item in your Cad</h2> }

      <ul >
      {items.map((item) => ( <li key={Math.random()}> {item}</li> ))}  
    
      
      </ul>
    
    </>

  )

}


function App() {
  return (
    <>
     <Card/>
    </>
  );
}

export default App;
