const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" className="input" placeholder="Nome completo" />
      <input type="text" className="input" placeholder="Endereço de email" />
      <input type="text" className="input" placeholder="Número de telefone" />
      <textarea
        className="textarea mb-2"
        placeholder="Sua mensagem:"
      ></textarea>
      <button type="submit" className="btn self-start">
        Enviar mensagem
      </button>
    </form>
  );
};

export default Form;
