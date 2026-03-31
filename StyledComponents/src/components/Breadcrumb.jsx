import "../styles/breadcrumb.css";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <a href="#">Home</a>
      <span>/</span>
      <a href="#">Sobre</a>
      <span>/</span>
      <a href="#">Perfil</a>
      <span></span>
    </div>
  );
}