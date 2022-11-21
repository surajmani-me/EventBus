import {
  Button,
  Container,
  Input,
  Row,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Event Bus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Text
            h1
            css={{
              textAlign: "center",
              margin: "2rem",
            }}
          >
            Get In Touch
          </Text>

          <Container
            css={{
              padding: "2rem",
            }}
          >
            <Row
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Spacer y={2} />
              <Input
                required
                clearable
                underlined
                type={"text"}
                labelPlaceholder="Name"
                css={{
                  margin: "1rem",
                  width: "50%",
                }}
              />
            </Row>
            <Row
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Spacer y={2} />
              <Input
                required
                clearable
                underlined
                type={"email"}
                labelPlaceholder="Email"
                css={{
                  margin: "1rem",
                  width: "50%",
                }}
              />
            </Row>
            <Row
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Spacer y={2} />
              <Textarea
                required
                clearable
                underlined
                type={"text"}
                labelPlaceholder="Message"
                css={{
                  margin: "1rem",
                  width: "50%",
                }}
              />
            </Row>
            <Spacer y={2} />
            <Row
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button>Send</Button>
            </Row>
          </Container>
        </Container>
      </main>
    </div>
  );
};

export default Contact;