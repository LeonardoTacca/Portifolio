import Style from "../../styles/About.module.css";

export default function About() {
  return (
    <div className={Style.ContainerAbout}>
      <h3>
        Prazer, me chamo Leonardo Tacca, tenho 22 anos, e resido na cidade de
        Pinhalzinho-SC. Trabalho como desenvolvedor fazem aproximadamente 2 anos
        e meio.
      </h3>
      <h2>Técnologias que trabalho atualmente:</h2>
      <div className={Style.ContainerTecnologies}>
        <div className={Style.ContainerFlutter}>
          <label>Flutter</label>
          <label>Python</label>
        </div>
        <div className={Style.ContainerReactNext}>
          <label>React</label>
          <label>Next</label>
        </div>
      </div>

      <button>Saiba Mais sobre mim clicando aki!</button>
    </div>
  );
}
