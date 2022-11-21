import {
  Card,
  Col,
  Container,
  Grid,
  Image,
  Link,
  Row,
  Text,
} from "@nextui-org/react";
import NextLink from "next/link";
import { FaLink } from "react-icons/fa";
import { useSelector } from "react-redux";

const EventsCard = ({ name, description, picture, id, linkSocial }) => {
  return (
    <Link as={NextLink} href={`/event/${id}`}>
      <Card
        css={{
          paddingBottom: "1.5rem",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Card.Header>
          <Image
            src={
              picture
                ? picture
                : "https://img.freepik.com/free-vector/modern-event-poster-template_1361-1219.jpg?w=2000"
            }
            width={"100%"}
            height={"100%"}
            alt="profile"
          />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Text h3>{name}</Text>
            </Col>
          </Row>
          {/* <Text>{description}</Text> */}
        </Card.Body>
        <Card.Footer>
          <Row
            gap={1}
            css={{
              justifyContent: "center",
            }}
          >
            <Col
              css={{
                width: "max-content",
              }}
            >
              <Link
                as={NextLink}
                href={linkSocial[0].link}
                target="_blank"
                css={{
                  color: "#1DA1F2",
                }}
              >
                <FaLink />
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
};

const EventsPage = () => {
  const { data } = useSelector((state) => ({
    data: state.event.events,
  }));

  return (
    <Container>
      <Text
        h1
        css={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        Events
      </Text>
      <Grid.Container gap={2}>
        {data.map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
            <EventsCard
              name={item.name}
              description={item.description}
              picture={item.banner}
              id={item._id}
              linkSocial={item.linkSocial}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default EventsPage;
