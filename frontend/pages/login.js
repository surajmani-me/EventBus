import {
  Button,
  Col,
  Container,
  Input,
  Row,
  Spacer,
  Text,
  Link,
  Loading,
} from "@nextui-org/react";
import Head from "next/head";
import * as NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/actionCreators/auth.actionCreator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in all fields!!");
    }

    const payload = {
      email,
      password,
    };

    setLoggingIn(true);

    dispatch(login(payload, setSuccess, setLoggingIn));
  };

  useEffect(() => {
    if (success) {
      setEmail("");
      setPassword("");

      router.push("/");
    }
  }, [success, router]);

  return (
    <Container
      xs
      display="flex"
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Head>
        <title>Login | Event Bus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text size={"3.5rem"} h1>
        Login here
      </Text>
      <form
        onSubmit={handleSubmit}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Spacer y={1.5} />
        <Input
          clearable
          bordered
          required
          type={"password"}
          width="100%"
          labelPlaceholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Spacer y={1.5} />
        <Button
          type="submit"
          css={{
            width: "100%",
          }}
        >
          {loggingIn ? <Loading color="currentColor" size="sm" /> : "Login"}
        </Button>

        <Spacer y={1.5} />
        <Row justify="center">
          <Col
            css={{
              width: "100%",
              textAlign: "right",
              dflex: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <Text>{"Don't have an account?"}</Text>
            <Link as={NextLink} href="/register">
              Register
            </Link>
          </Col>
        </Row>
      </form>

      <Text p>Or login with</Text>

      <Spacer y={1} />

      <Row>
        <Col>
          <Button
            type="button"
            rounded
            bordered
            css={{
              backgroundColor: "#fff",
            }}
            icon={<FaGoogle />}
          >
            Login With Google
          </Button>
        </Col>
        <Col>
          <Button
            type="button"
            rounded
            bordered
            css={{
              backgroundColor: "#fff",
            }}
            icon={<FaGithub />}
          >
            Login With Github
          </Button>
        </Col>
        <Col>
          <Button
            type="button"
            rounded
            bordered
            icon={<FaLinkedinIn />}
            css={{
              backgroundColor: "#fff",
            }}
          >
            Login With Linkedin
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;