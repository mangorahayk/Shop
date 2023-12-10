import { Box,  useStyleConfig } from '@chakra-ui/react';

const Cards = ({content, children, variant,...rest }) => {
  const cardStyles = useStyleConfig(variant);

  return (
    <Box as="article" sx={cardStyles} {...rest}>
       {children}
    </Box>
  );
};

export default Cards;