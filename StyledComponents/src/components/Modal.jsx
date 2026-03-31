import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Aviso</h2>
        <p>Este é apenas um treinamento</p>
        <button className={styles.button} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}