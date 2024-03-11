import React, { useEffect } from "react";

const LoungeContext = React.createContext();

//Provider, Consumer

const LoungeProvider = ({ children }) => {
  const [size, setSize] = React.useState(null);
  const [height, setHeight] = React.useState(null);

  useEffect(() => {
    if (window) {
      setSize(window.innerWidth);
      setHeight(window.pageYOffset);

      window.addEventListener("resize", () => {
        setSize(window.innerWidth);
      });
      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset);
      });
    }
    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <LoungeContext.Provider
      value={{
        size,
        height,
      }}
    >
      {children}
    </LoungeContext.Provider>
  );
};

export { LoungeContext, LoungeProvider };
