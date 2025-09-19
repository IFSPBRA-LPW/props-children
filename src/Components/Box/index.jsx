import style from "./box.module.css";

// Componente que recebe 'children'
function Box({ children }) {
  return (
    <div className={style.box_style}>
      {children}
      {/* Aqui usamos a prop children para renderizar o conteúdo */}
    </div>
  );
}

export default Box;
