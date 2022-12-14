import { Container, Loading, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const VerifyEmail = () => {
  const router = useRouter();
  const { token } = router.query;

  const [isVerified, setIsVerified] = useState(false);
  const [tokenError, setTokenError] = useState(false);

  return (
    <Container
      xs
      display="flex"
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Head>
        <title>Verify Email | Event Bus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        // If the user is verified, show the success message
        isVerified ? (
          <>
            <Text size={"3.5rem"} h1>
              Email Verified
            </Text>
            <Text color="success" size={"5.5rem"}>
              <FaCheckCircle />
            </Text>
            <Text size={"1.2rem"}>Your email has been verified..</Text>
          </>
        ) : tokenError ? (
          <>
            <Text size={"3.5rem"} h1>
              Invalid Token
            </Text>
            <Text color="error" size={"5.5rem"}>
              <FaTimesCircle />
            </Text>

            <Text size={"1.2rem"}>The token you provided is invalid.</Text>
          </>
        ) : (
          <>
            <Text size={"3.5rem"} h1>
              Verifying your Email
            </Text>
            <Spacer y={1.5} />
            <Text size={"1.5rem"} h2>
              <Loading color="currentColor" size="lg" />
            </Text>
          </>
        )
      }
    </Container>
  );
};

export default VerifyEmail;
