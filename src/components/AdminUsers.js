import React, { useEffect, useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false); // për të rifreskuar pas veprimeve
  const token = localStorage.getItem("token");

  // Merr user-at
  useEffect(() => {
    fetch("http://localhost:4000/api/admin/users", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [token, reload]);

  // Fshij përdorues
  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/api/admin/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    setReload(r => !r);
  };

  // Ndrysho rolin (user/admin)
  const handleRole = async (id, role) => {
    await fetch(`http://localhost:4000/api/admin/users/${id}/role`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ role })
    });
    setReload(r => !r);
  };

  // Blloko/zhblloko user
  const handleBlock = async (id) => {
    await fetch(`http://localhost:4000/api/admin/users/${id}/block`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` }
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
