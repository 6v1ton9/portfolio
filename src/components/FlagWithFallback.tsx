import FlagBrazil from "./FlagBrazil";
import FlagUSA from "./FlagUSA";

type Props = {
  code: "pt-BR" | "en";
  size?: number;
};

export default function FlagWithFallback({ code, size = 20 }: Props) {
  const label = code === "pt-BR" ? "PT" : "EN";
  const Flag = code === "pt-BR" ? FlagBrazil : FlagUSA;

  return (
    <span className="flagWrap" aria-label={code === "pt-BR" ? "Português" : "English"}>
      <span className="flagFallbackText">{label}</span>
      <span className="flagSvg">
        <Flag size={size} />
      </span>
    </span>
  );
}
