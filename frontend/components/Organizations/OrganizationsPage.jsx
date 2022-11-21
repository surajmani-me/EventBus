import {
  Avatar,
  Card,
  Col,
  Container,
  Grid,
  Link,
  Row,
  Text,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useEffect } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";
import { useSelector } from "react-redux";

const OrganizationCard = ({
  name,
  description,
  picture,
  username,
  linkSocial,
}) => {
  return (
    <Link as={NextLink} href={`/organizations/${username}`}>
      <Card
        css={{
          padding: "1.5rem",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Card.Header>
          <Row>
            <Col>
              <Avatar
                squared
                src={
                  picture
                    ? picture
                    : "https://img.freepik.com/free-vector/modern-event-poster-template_1361-1219.jpg?w=2000"
                }
                size={"xl"}
              />
            </Col>
            <Col>
              <Text h3>{name}</Text>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Text>{description}</Text>
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
                href={linkSocial[0]?.link}
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

const OrganizationsPage = () => {
  const { data } = useSelector((state) => ({
    data: state.organization.organizations,
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
        Organizations
      </Text>
      <Grid.Container gap={2}>
        {data.map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
            <OrganizationCard
              name={item.name}
              description={item.description}
              picture={item.banner}
              username={item.username}
              linkSocial={item.linkSocial}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default OrganizationsPage;
