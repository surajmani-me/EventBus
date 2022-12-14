import { Col, Container, Row, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";

import {
  CreateAccount,
  CreateEvent,
  CreateOrganization,
  EnjoyEvent,
  PromoteEvent,
  ScheduleEvent,
} from "../assets/images";

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Event Bus</title>
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
            EventBus
          </Text>
          <Text
            h2
            css={{
              textAlign: "center",
            }}
          >
            A platform to create and manage events.
          </Text>
          <Text>
            EventBus is an Event Management system developed by{" "}
            <strong>Google Developer Student Clubs - LPU</strong>, that helps to
            create and manage events. Organising an event comes with a lot of
            chores, and we&apos;re here to make sure communities don&apos;t feel
            that way when it comes to managing their events. At EventBus our
            mission is to help organisers create events, Online, Offline and
            Hybrid with utmost ease. With our intuitive design, you can schedule
            sessions, meet-ups, hackathons and much more with built-in custom
            features catering to every need.
          </Text>
          <Spacer y={2} />
          <Text
            h2
            css={{
              textAlign: "center",
            }}
          >
            How does EventBus work?
          </Text>
          <Container>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                margin: "auto 2rem auto 4rem",
              }}
            >
              <Col>
                <Text h3>Step 1</Text>
                <Text>Create an account and login to the platform.</Text>
              </Col>
              <Col>
                <Image src={CreateAccount} alt="Create Account" />
              </Col>
            </Row>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                margin: "auto 2rem auto 4rem",
              }}
            >
              <Col>
                <Image src={CreateOrganization} alt="Create Organization" />
              </Col>
              <Col>
                <Text h3>Step 2</Text>
                <Text>Create an organization.</Text>
              </Col>
            </Row>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                margin: "auto 2rem auto 4rem",
              }}
            >
              <Col>
                <Text h3>Step 3</Text>
                <Text>Collaborate with your team and create an event.</Text>
              </Col>
              <Col>
                <Image src={CreateEvent} alt="Create Event" />
              </Col>
            </Row>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                margin: "auto 2rem auto 4rem",
              }}
            >
              <Col>
                <Image src={ScheduleEvent} alt="Schedule Event" />
              </Col>
              <Col>
                <Text h3>Step 4</Text>
                <Text>Schedule your event.</Text>
              </Col>
            </Row>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                margin: "auto 2rem auto 4rem",
              }}
            >
              <Col>
                <Text h3>Step 5</Text>
                <Text>Promote event.</Text>
              </Col>
              <Col>
                <Image src={PromoteEvent} alt="Promote Event" />
              </Col>
            </Row>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                margin: "auto 2rem auto 4rem",
              }}
            >
              <Col>
                <Image src={EnjoyEvent} alt="Enjoy Event" />
              </Col>
              <Col>
                <Text h3>Step 6</Text>
                <Text>Enjoy your event.</Text>
              </Col>
            </Row>
          </Container>
          {/* <Image
            src="https://firebasestorage.googleapis.com/v0/b/gdsc-lpu.appspot.com/o/eventbus%2Fabout.png?alt=media&token=e2a1c070-6c4c-4149-b00b-c273410f5c4d"
            alt="about"
            width="100%"
            height="100%"
          /> */}
        </Container>
      </main>
    </div>
  );
};

export default About;
