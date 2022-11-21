import {
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Link,
  Modal,
  Row,
  Spacer,
  Text,
  useModal,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaCloudUploadAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import EditOrganization from "./components/EditOrganization";

const OrganizationPage = () => {
  const { org } = useRouter().query;

  const [coverModalVisible, setCoverModalVisible] = useState(false);
  const { setVisible, bindings } = useModal();

  const { organization } = useSelector((state) => ({
    organization: state.organization.organizations.find(
      (org2) => org2.username === org
    ),
  }));

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/01/18/10/43/banner-1989514_1280.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          width: "100%",
          marginTop: "-5rem",
        }}
      >
        <Avatar
          squared
          zoomed
          size={"xl"}
          src="https://picsum.photos/200"
          css={{
            position: "relative",
            top: "90%",
            left: "5%",
          }}
        />
        <Button
          onClick={() => setCoverModalVisible(true)}
          auto
          css={{
            position: "relative",
            top: "60%",
            left: "89%",
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: 'blur("4px")',
          }}
        >
          Change Cover
        </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={coverModalVisible}
          onClose={() => setCoverModalVisible(false)}
        >
          <Modal.Body>
            <Spacer y={1} />
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2017/01/18/10/43/banner-1989514_1280.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "150px",
                width: "100%",
              }}
            ></div>
            <Spacer y={1} />
            <Button
              auto
              icon={<FaCloudUploadAlt />}
              css={{
                width: "max-content",
                alignSelf: "center",
              }}
            >
              Upload
            </Button>
            <Spacer y={1} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              auto
              flat
              color="error"
              onClick={() => setCoverModalVisible(false)}
            >
              Close
            </Button>
            <Button auto>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Container
        css={{
          marginTop: "4rem",
        }}
      >
        <Container
          css={{
            marginTop: "2rem",
          }}
        >
          <Grid.Container
            css={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Text h2>{organization?.name}</Text>
            </Grid>
            <Grid>
              <Button
                onClick={() => setVisible(true)}
                bordered
                color="gradient"
                auto
              >
                Edit Profile
              </Button>
              <EditOrganization setVisible={setVisible} bindings={bindings} />
            </Grid>
          </Grid.Container>
          <Grid.Container>
            <Grid
              css={{
                width: "max-content",
              }}
            >
              <Text>@{organization?.username}</Text>
            </Grid>
            <Grid
              css={{
                width: "max-content",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <Text>
                <MdLocationOn /> {organization?.country}
              </Text>
            </Grid>
            <Grid
              css={{
                width: "max-content",
              }}
            >
              <Text>
                <FaCalendarAlt /> Joined on{" "}
                {new Date(organization?.createdAt).toLocaleDateString()}
              </Text>
            </Grid>
          </Grid.Container>
          <Text>{organization?.description}</Text>
          <Row
            css={{
              marginTop: "1rem",
            }}
          >
            <Col
              css={{
                width: "max-content",
              }}
            >
              <Link
                href={"https://twitter.com"}
                target="_blank"
                css={{
                  color: "#000",
                }}
              >
                <FaTwitter />
              </Link>
            </Col>
            <Col
              css={{
                width: "max-content",
              }}
            >
              <Link
                href={"https://instagram.com"}
                target="_blank"
                css={{
                  color: "#000",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                <FaInstagram />
              </Link>
            </Col>
            <Col
              css={{
                width: "max-content",
              }}
            >
              <Link
                href={"https://linkedin.com"}
                target="_blank"
                css={{
                  color: "#000",
                }}
              >
                <FaLinkedin />
              </Link>
            </Col>
          </Row>
        </Container>
        <Container
          css={{
            marginTop: "2rem",
          }}
        >
          <Text h3>Upcoming Events</Text>
          <Grid.Container gap={2}>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Card
                css={{
                  padding: "1.5rem",
                }}
              >
                <Card.Header>
                  <Text h3>Event 1</Text>
                </Card.Header>
                <Card.Body>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod ex a nisl aliquam, nec ultricies nunc.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Text>Event Date</Text>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Card
                css={{
                  padding: "1.5rem",
                }}
              >
                <Card.Header>
                  <Text h3>Event 2</Text>
                </Card.Header>
                <Card.Body>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod ex a nisl aliquam, nec ultricies nunc.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Text>Event Date</Text>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>
        <Container
          css={{
            marginTop: "2rem",
          }}
        >
          <Text h3>Past Events</Text>
          <Grid.Container gap={2}>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Card
                css={{
                  padding: "1.5rem",
                }}
              >
                <Card.Header>
                  <Text h3>Event 1</Text>
                </Card.Header>
                <Card.Body>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod ex a nisl aliquam, nec ultricies nunc.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Text>Event Date</Text>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Card
                css={{
                  padding: "1.5rem",
                }}
              >
                <Card.Header>
                  <Text h3>Event 2</Text>
                </Card.Header>
                <Card.Body>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod ex a nisl aliquam, nec ultricies nunc.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Text>Event Date</Text>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>
      </Container>
    </>
  );
};

export default OrganizationPage;
