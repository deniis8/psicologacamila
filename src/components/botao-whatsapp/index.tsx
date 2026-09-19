import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contato } from "../../data/contato";
import styles from "./botao-whatsapp.module.css";

type Props = {
  children: ReactNode;
  variante?: "primario" | "claro";
  tamanho?: "normal" | "compacto";
  className?: string;
};

export function BotaoWhatsApp({
  children,
  variante = "primario",
  tamanho = "normal",
  className = "",
}: Props) {
  const classes = [styles.botao, styles[variante], styles[tamanho], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={contato.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp aria-hidden="true" className={styles.icone} />
      {children}
    </a>
  );
}
