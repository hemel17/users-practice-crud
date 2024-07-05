import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState([]);

  const handleDetails = async (email) => {
    const res = await axios.get(`http://localhost:5000/user?email=${email}`);
    const data = res.data;
    console.log(data);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("http://localhost:5000/users");
      const data = res.data;
      setUsers(data);
    };
    loadData();
  }, []);
  return (
    <section className="text-center my-4">
      <h2 className="text-5xl">Total users : {users.length}</h2>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {users.map((user) => {
          return (
            <div
              key={user._id}
              className="bg-blue-gray-900 text-white p-6 rounded my-4"
            >
              <h3 className="text-2xl font-body">Name : {user.name}</h3>
              <p>Email : {user.email}</p>
              <p>Age : {user.age}</p>
              <p>Salary : {user.salary}</p>
              <button
                className="bg-green-600 px-4 py-1 rounded"
                onClick={() => handleDetails(user.email)}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
