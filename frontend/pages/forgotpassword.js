import { Button, Container, Input, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";

const ForgotPassword = () => {
  return (
    <Container
      xs
      display="flex"
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Head>
        <title>Forgot Password | Event Bus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text size={"3.5rem"} h1>
        Forgot Password
      </Text>
      <form
        style={{
          width: "80%",
          padding: "3rem",
          borderRadius: "0.5rem",
        }}
      >
        <Input
          clearable
          bordered
          required
          type={"email"}
          width="100%"
          labelPlaceholder="Email"
        />
        <Spacer y={1.5} />
        <Button
          type="submit"
          css={{
            width: "100%",
          }}
        >
          Send Reset Link
        </Button>
      </form>
    </Container>
  );
};

export default ForgotPassword;
