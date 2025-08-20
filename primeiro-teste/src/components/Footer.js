function Footer() {
  const anoAtual = new Date().getFullYear();
  return <footer>© {anoAtual}</footer>;
}

export default Footer;
