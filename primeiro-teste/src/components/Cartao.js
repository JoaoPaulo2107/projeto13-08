function Cartao(props) {
  return (
    <div>
      <img src={props.foto} alt="Foto do usuário" />
      <h2>{props.nome}</h2>
      <h4>{props.profissao}</h4>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Cartao;
