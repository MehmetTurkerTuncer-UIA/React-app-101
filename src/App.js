

function App() {
  
  
  const userInfo = [
    {
      id:1,
      username: "Mehmet",
      email:"test@gmail.com",
      location: "Norway"
    },
    {
      id:2,
      username: "Ali",
      email:"test1@gmail.com",
      location: "Germany"
    },
    {
      id:3,
      username: "Veli",
      email:"test2@gmail.com",
      location: "Turkey"
    }
  ]


  
  
  return(

      <>
        {userInfo.map(user => (
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.location}</li>
          
          </ul>

        ))}

      </>
  ) 
  
  
  
}

export default App;
