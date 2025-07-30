import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production.up.railway.app";

function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => setProfile(data))
      .catch(() => {
        // Ridrejto në ballinë nëse ndodh ndonjë gabim
        navigate("/");
      });
  }, [navigate]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profili im</h2>
      <div>Emri: {profile.name}</div>
      <div>Email: {profile.email}</div>
      {/* shto edhe të dhëna të tjera si të duash */}
    </div>
  );
}

export default Profile;
