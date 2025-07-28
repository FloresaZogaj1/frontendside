const [form, setForm] = useState({ name: "", email: "", password: "" });

const handleSubmit = async (e) => {
  e.preventDefault();
  const url = isLogin ? `${API_URL}/api/auth/login` : `${API_URL}/api/auth/register`;
  try {
    const body = isLogin
      ? { email: form.email, password: form.password }
      : form;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.msg || "Gabim!");
    if (data.token && data.user) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoggedIn(true);
    }
  } catch {
    setError("Gabim gjatë lidhjes me serverin.");
  }
};
