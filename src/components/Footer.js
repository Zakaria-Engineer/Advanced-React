import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Zakaria • © 2025</p>
          <a 
            href="https://github.com/Zakaria-Engineer" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginLeft: '10px', textDecoration: 'underline', color: 'white' }}
          >
            GitHub
          </a>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
