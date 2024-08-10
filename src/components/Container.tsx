import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-14">{children}</div>
  );
};
