import type { NextPage } from 'next'
import { Container, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useHello } from '../hooks/useHello'

const Home: NextPage = () => {
  const { isLoading, data } = useHello()

  return (
    <Container
      maxW="container.xl"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack gap="4">
        <Heading size="4xl">
          Welcome to{' '}
          <Text d="inline" color="blue.500">
            Hello App!
          </Text>
        </Heading>

        <Text textAlign="center">{data ? data.message : 'Loading...'}</Text>
      </Stack>
    </Container>
  )
}
export default Home
