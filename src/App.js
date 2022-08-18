import "./styles.css";
import { useEffect, useImperativeHandle, useState } from "react";

export const users = [
  { id: 1, name: "User One", status: true },
  { id: 2, name: "User Two", status: undefined },
  { id: 3, name: "User Three", status: null }
];

// Case
// Ambil data users, simpan data menggunakan useState
// Tampilkan data user ID, user Name, user Status dan button untuk Delete.
// Jika status true tampilkan string "ready"
// Jika Status bukan ready tampilkan string "not ready"

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(users)
  }, [])

  const handleDelete = (id) => {
    setData(data.filter(val => val.id !== id))
  };

  const datas = data.map((val, id) => {
    return (
      <li>
        {val.id} {val.name} {val.status === true ? "ready" : "not ready"}{" "}
        <button onClick={() => handleDelete(val.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="App">
      <h1 className="title">Todo LIST / Show List</h1>
      <ul>{datas}</ul>
    </div>
  );
}
