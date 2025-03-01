import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]); // Estado para guardar los usuarios
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los datos de la API
  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al obtener los datos");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Manejo del cambio en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Envío del formulario para agregar un nuevo usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        // Agregamos el usuario nuevo a la lista; se simula un id único.
        setUsers([...users, { ...response.data, id: users.length + 1 }]);
        // Limpiamos el formulario después del envío
        setFormData({ name: '', email: '' });
      })
      .catch((err) => console.error("Error al agregar usuario:", err));
  };

  // Función para borrar un usuario de la lista
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} |{" "}
            <a
              href={`https://jsonplaceholder.typicode.com/users/${user.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Detalles
            </a>
            <button onClick={() => deleteUser(user.id)}>Borrar</button>
          </li>
        ))}
      </ul>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={fetchData}>Reload</button>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UsersList;