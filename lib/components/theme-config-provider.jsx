import React from "react";
import { ThemeConfigContext } from "lib/states/config-context";

const ThemeConfigProvider = React.memo(({ onChange, children }) => {
  return (
    <ThemeConfigContext.Provider value={{ onChange }}>
      {children}
    </ThemeConfigContext.Provider>
  );
});

export default ThemeConfigProvider;
