import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const[users,setusers]=useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault();

      axios.post("https://jsonplaceholder.typicode.com/users", {
         name: name,
         email: email
      })
     .then(res => {
       console.log("Data posted successfully:", res.data);
     })
     .catch(err => {
       console.error("Error posting data:", err);
     });
   };





  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log("the data in api is",res.data);
      setusers(res.data);
    })
    .catch(err => {
      console.log("api error",err);
    }
    );

    

  }, []);  //here we are reading json data using axios.get



  
  return(
    <div>
      <div style={{ padding: '20px' }}>
      <h2>📋 Axios User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}-{user.address.street}
          </li>
          
        ))}
      </ul>

      <h2>📤 Post User Data</h2>
       <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Name" value={name}
           onChange={(e) => setName(e.target.value)} /><br /><br />
      <input type="email" placeholder="Email" value={email}
           onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <button type="submit">Submit</button>
       </form>
      </div>

    </div>
  )
 
  
}

//  [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post("https://jsonplaceholder.typicode.com/users", {
//       name: name,
//       email: email
//     })
//     .then(res => {
//       console.log("Data posted successfully:", res.data);
//     })
//     .catch(err => {
//       console.error("Error posting data:", err);
//     });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>📤 Post User Data</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" value={name}
//           onChange={(e) => setName(e.target.value)} /><br /><br />
//         <input type="email" placeholder="Email" value={email}
//           onChange={(e) => setEmail(e.target.value)} /><br /><br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }


// export default App; 
// //"e65efcb6-defc-472a-a4cb-ca0527d552b6",
// //"clientSecret": "NSEXHkhRQncGcHtz"
// // {
// //     "token_type": "Bearer",
// //     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjMzMWExMmIwQG12Z3JjZS5lZHUuaW4iLCJleHAiOjE3NTE2MDkzNzQsImlhdCI6MTc1MTYwODQ3NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImJlMzRiZmVmLTY2ZGYtNGJmNS1hNjM3LTE5NGQ0ZGRkNTMwZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InN1bG9jaGFuYSIsInN1YiI6ImU2NWVmY2I2LWRlZmMtNDcyYS1hNGNiLWNhMDUyN2Q1NTJiNiJ9LCJlbWFpbCI6IjIyMzMxYTEyYjBAbXZncmNlLmVkdS5pbiIsIm5hbWUiOiJzdWxvY2hhbmEiLCJyb2xsTm8iOiIyMjMzMWExMmIwIiwiYWNjZXNzQ29kZSI6Im1VTlFIZSIsImNsaWVudElEIjoiZTY1ZWZjYjYtZGVmYy00NzJhLWE0Y2ItY2EwNTI3ZDU1MmI2IiwiY2xpZW50U2VjcmV0IjoiTlNFWEhraFJRbmNHY0h0eiJ9.Mn-hSKSBSMKr4IZI2Tn-HNeESm_WhqoHMws9pGCaFa0",
// //     "expires_in": 1751609374
// // }
// // {
// //     "logID": "32239e7f-23f1-48d0-a8a6-ce09b7e1c5d6",
// //     "message": "log created successfully"
// // }

// // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjMzMWExMmIwQG12Z3JjZS5lZHUuaW4iLCJleHAiOjE3NTE2MDkzNzQsImlhdCI6MTc1MTYwODQ3NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImJlMzRiZmVmLTY2ZGYtNGJmNS1hNjM3LTE5NGQ0ZGRkNTMwZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InN1bG9jaGFuYSIsInN1YiI6ImU2NWVmY2I2LWRlZmMtNDcyYS1hNGNiLWNhMDUyN2Q1NTJiNiJ9LCJlbWFpbCI6IjIyMzMxYTEyYjBAbXZncmNlLmVkdS5pbiIsIm5hbWUiOiJzdWxvY2hhbmEiLCJyb2xsTm8iOiIyMjMzMWExMmIwIiwiYWNjZXNzQ29kZSI6Im1VTlFIZSIsImNsaWVudElEIjoiZTY1ZWZjYjYtZGVmYy00NzJhLWE0Y2ItY2EwNTI3ZDU1MmI2IiwiY2xpZW50U2VjcmV0IjoiTlNFWEhraFJRbmNHY0h0eiJ9.Mn-hSKSBSMKr4IZI2Tn-HNeESm_WhqoHMws9pGCaFa0
// function App() {
//   const [user, setuser] = useState([])
//   const useEffect(() =>{

//   })

//   return (
//     <>
//       <div>
        
        
//       </div>
      
//     </>
//   )
// }

export default App
