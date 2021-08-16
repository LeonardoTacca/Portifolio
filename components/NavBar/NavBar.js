import Style from "../../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={Style.ContainerNavBar}>
      <button>Sobre</button>
      <button>Projetos</button>
      <button>Fale-Comigo</button>
    </div>
  );
}
