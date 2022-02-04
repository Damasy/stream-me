import { Container, Button, Box, Typography } from "@mui/material";
import Link from "next/link";

export default function About () {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Example
        </Typography>
        <Link href="/">
          <Button variant="contained" color="primary">
            Go to home page
          </Button>
        </Link>
      </Box>
    </Container>
  )
}