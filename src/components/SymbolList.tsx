import { symbols } from "../constants";
import Symbolbox from "./Symbolbox";

const SymbolList = () => {
  return (
    <div className="max-container w-full flex flex-1 flex-row max-lg:flex-col max-lg:gap-90 mt-[120px]">
      {symbols.map((symbol) => (
        <Symbolbox
          key={symbol.title}
          icon={symbol.icon}
          title={symbol.title}
          desc={symbol.desc}
        />
      ))}
    </div>
  );
};

export default SymbolList;
