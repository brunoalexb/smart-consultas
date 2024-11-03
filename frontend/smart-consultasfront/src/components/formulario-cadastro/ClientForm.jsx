import { useState } from 'react';

const ClientForm = ({ onSubmit }) => {
  const [client, setClient] = useState({ name: '', birthdate: '', phone: '', email: '', address: '', notes: '' });

  const handleChange = (e) => setClient({ ...client, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(client);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome" value={client.name} onChange={handleChange} required />
      <input type="date" name="birthdate" value={client.birthdate} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Telefone" value={client.phone} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={client.email} onChange={handleChange} />
      <input type="text" name="address" placeholder="Endereço" value={client.address} onChange={handleChange} />
      <textarea name="notes" placeholder="Notas" value={client.notes} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ClientForm;
