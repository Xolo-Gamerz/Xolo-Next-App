import { Content } from "./Content"
import { Box } from "./Box";
import React from "react";

export const Layout = ({ children }:React.PropsWithChildren) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);
