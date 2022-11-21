import { Button, Col, Container, Image, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { event } = useSelector((state) => ({
    event: state.event.events.find((event) => event._id === id),
  }));

  return (
    <Container
      fluid
      css={{
        padding: 0,
        paddingBottom: "4rem",
      }}
    >
      <Row
        fluid
        css={{
          padding: 0,
          height: "70vh",
          position: "relative",
        }}
      >
        <Image
          width={"100%"}
          height={"100%"}
          src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
          alt="Default Image"
          objectFit="cover"
        />
      </Row>

      <Row
        css={{
          padding: "3rem",
        }}
        justify="space-between"
        align="center"
      >
        <Col span={4}>
          <Text
            h2
            css={{
              marginTop: "1rem",
              fontSize: "3rem",
            }}
          >
            {event?.name}
          </Text>
        </Col>

        <Col span={2}>
          <Button type="button" onClick={() => router.back()} color="primary">
            <FaAngleLeft />
            Go Back
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          span={11}
          dangerouslySetInnerHTML={{ __html: event?.description }}
        />
      </Row>
      <Row
        justify="center"
        css={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginTop: "4rem",
        }}
        gap={2}
        align="flex-end"
      >
        <Col span={3}>
          <Text h3>Event Address:</Text>
        </Col>
        <Col span={8}>{event?.address}</Col>
      </Row>

      <Row
        justify="center"
        css={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginTop: "4rem",
        }}
        gap={2}
        align="flex-end"
      >
        <Col span={3}>
          <Text h3>Social Links</Text>
        </Col>
        <Col span={8}>
          {event?.linkSocial.map((link) => (
            <a href={link} key={"link" + link} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </Col>
      </Row>

      {/* submit  */}
      <Row
        justify="center"
        css={{
          paddingTop: "1rem",
          paddingBottom: "4rem",
          marginTop: "4rem",
        }}
        gap={2}
        align="flex-end"
      >
        <Col
          span={11}
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="button"
            color="success"
            size="lg"
            css={{
              width: "100%",
            }}
          >
            Register Event
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventPage;
