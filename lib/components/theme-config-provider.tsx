import React from "react";
import { ThemeConfigContext } from "../states/config-context";

const ThemeConfigProvider = React.memo(({ onChange, children }: any) => {
  return (
    <ThemeConfigContext.Provider value={{ onChange }}>
      {children}
    </ThemeConfigContext.Provider>
  );
});

export default ThemeConfigProvider;
