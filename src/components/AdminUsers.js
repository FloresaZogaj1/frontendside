import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [token, reload]);

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/api/admin/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include"
    });
    setReload(r => !r);
  };

  const handleRole = async (id, role) => {
    await fetch(`${API_URL}/api/admin/users/${id}/role`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ role }),
      credentials: "include"
    });
    setReload(r => !r);
  };

  const handleBlock = async (id) => {
    await fetch(`${API_URL}/api/admin/users/${id}/block`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include"
    });
    setReload(r => !r);
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <h2>Përdoruesit</h2>
      <table border="1" cellPadding={4} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th><th>Emri</th><th>Email</th><th>Roli</th><th>Veprime</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>Fshij</button>{" "}
                <button onClick={() => handleRole(u.id, u.role === "admin" ? "user" : "admin")}>
                  {u.role === "admin" ? "Kthe në User" : "Bëj Admin"}
                </button>{" "}
                <button onClick={() => handleBlock(u.id)}>Blloko/Zhblloko</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
