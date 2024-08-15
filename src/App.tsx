import { useState } from "react";
import axios from "axios";

const HubSpotForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    // adicione outros campos do formulário aqui
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      name: formData.name,
    };

    try {
      const response = await axios.post(
        `https://api.hubapi.com/crm/v3/objects/contacts`,
        {
          properties: {
            email: "gabriel_lopes.g@hotmail.com",
            firstname: "Gabriel",
            lastname: "Lopes",
          },
        },
        {
          headers: {
            Authorization: `Bearer pat-na1-ade213be-6aa5-4288-ba4e-26ec49f0716a`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Dados enviados com sucesso para o HubSpot:", response);
    } catch (error) {
      console.error("Erro ao enviar dados para o HubSpot:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default HubSpotForm;
