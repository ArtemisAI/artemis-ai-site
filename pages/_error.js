import { Box, Heading, Text } from "@chakra-ui/react";
export default function Error({ statusCode }) {
  return <Box py={16} textAlign="center">
    <Heading>{statusCode ? `Error ${statusCode}` : "An error occurred"}</Heading>
    <Text color="gray.400">Sorry, this page could not be loaded.</Text>
  </Box>
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};