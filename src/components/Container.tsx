import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
