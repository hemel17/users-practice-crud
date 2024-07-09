import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Docs() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("http://localhost:5000/users", {
        withCredentials: true,
      });
      const data = res.data;
      setUsers(data);
    };
    loadData();
  }, []);
  return (
    <section className="py-4 text-center bg-white dark:bg-blue-gray-700">
      <h2 className="text-5xl">Total users : {users.length}</h2>
      <div></div>
      <div className="grid grid-cols-1 gap-6 m-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => {
          return (
            <div
              key={user._id}
              className="p-6 my-4 text-white rounded bg-blue-gray-900"
            >
              <h3 className="text-2xl font-body">Name : {user.name}</h3>
              <p>Email : {user.email}</p>
              <p>Age : {user.age}</p>
              <p>Salary : {user.salary}</p>
              <Link>
                <button className="px-4 py-1 bg-green-600 rounded">
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Docs;
