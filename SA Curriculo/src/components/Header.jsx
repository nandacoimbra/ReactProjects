// Importa estilos do módulo CSS
import styles from './Header.module.css';

// Importa imagem do logo
import imgLogo from '../assets/reactLogo.png';

// Exporta função Header
export function Header() {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt='React Logo Header' />
      <strong>RPV - Curriculo</strong>
    </header>
  );
}