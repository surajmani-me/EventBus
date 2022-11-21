import {
  Avatar,
  Button,
  Col,
  Container,
  Input,
  Modal,
  Row,
  Spacer,
  Text,
  Textarea,
  useModal,
} from "@nextui-org/react";
import { useState } from "react";
import { FaCloudUploadAlt, FaPlus, FaTrash } from "react-icons/fa";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createOrganization } from "../../../redux/actionCreators/organization.actionCreator";

const NewOrganization = () => {
  const { userId } = useSelector(
    (state) => ({
      userId: state.auth.user._id,
    }),
    shallowEqual
  );

  const [coverModalVisible, setCoverModalVisible] = useState(false);
  const [socialLinks, setSocialLinks] = useState([
    {
      name: "",
      link: "",
    },
  ]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [username, setUsername] = useState("");
  const [gpsLocation, setGpsLocation] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [picture, setPicture] = useState("");
  const [banner, setBanner] = useState("");
  const [country, setCountry] = useState("");

  const [success, setSuccess] = useState(false);
  const [creating, setCreating] = useState(false);

  const dispatch = useDispatch();

  const { setVisible, bindings } = useModal();

  const handleSubmit = () => {
    if (!name || !username || !state || !city || !description || !country) {
      toast.error("Please fill the required fields");
      return;
    }

    const data = {
      name,
      slug: username.toLowerCase(),
      username,
      gpsLocation,
      address,
      state,
      city,
      description,
      picture,
      banner,
      country,
      socialLinks,
      user: userId,
    };

    dispatch(createOrganization(data, setSuccess, setCreating));
  };

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
        <Button
          onClick={() => setCoverModalVisible(true)}
          auto
          css={{
            position: "relative",
            top: "80%",
            left: "89%",
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: 'blur("4px")',
          }}
        >
          Upload Cover
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
      <Container>
        <Spacer y={2} />
        <Text h3>Profile Photo</Text>
        <Row>
          <Col>
            <Avatar
              squared
              zoomed
              size={"xl"}
              src="https://picsum.photos/200"
            />
          </Col>
          <Col
            css={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Button icon={<FaCloudUploadAlt />}>Upload</Button>
          </Col>
        </Row>
        <Spacer y={2} />
        <Input
          underlined
          placeholder="Organization Name"
          clearable
          type="text"
          width="100%"
          size="large"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Spacer y={2} />
        <Input
          underlined
          labelLeft="@"
          placeholder="Choose an username"
          clearable
          type="text"
          width="100%"
          size="large"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Spacer y={2} />
        <Textarea
          underlined
          placeholder="Organization Description"
          clearable
          type="text"
          width="100%"
          size="large"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Spacer y={2} />
        <Row gap={2}>
          <Col span={3}>
            <Text h3>Organization Location:</Text>
          </Col>
          {/* add city, address, state, country */}

          <Col span={2}>
            <Input
              placeholder="City"
              underlined
              clearable
              required
              type="text"
              width="100%"
              size={"md"}
              css={{
                marginTop: "1rem",
                fontSize: "0.99rem",
              }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col span={3}>
            <Input
              placeholder="State"
              underlined
              clearable
              type="text"
              width="100%"
              size={"md"}
              css={{
                marginTop: "1rem",
                fontSize: "0.99rem",
              }}
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Col>
          <Col span={3}>
            <Input
              placeholder="Country"
              underlined
              clearable
              type="text"
              width="100%"
              size={"md"}
              css={{
                marginTop: "1rem",
                fontSize: "0.99rem",
              }}
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Col>
        </Row>
        <Spacer y={2} />
        <Row gap={2}>
          <Col span={3}>
            <Text h3>Social Links:</Text>
          </Col>
          <Col span={8}>
            {socialLinks.map((link, index) => (
              <Row
                key={index * 545}
                justify="space-between"
                align="center"
                css={{
                  marginTop: "1rem",
                }}
              >
                <Col span={4}>
                  <Input
                    placeholder="name"
                    underlined
                    clearable
                    type="text"
                    width="100%"
                    size={"md"}
                    css={{
                      marginTop: "1rem",
                      fontSize: "0.99rem",
                    }}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    placeholder="link"
                    underlined
                    clearable
                    type="url"
                    width="100%"
                    size={"md"}
                    css={{
                      marginTop: "1rem",
                      fontSize: "0.99rem",
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Row justify="center" align="center" gap={2}>
                    {socialLinks.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => {
                          setSocialLinks((prev) => {
                            const newLinks = [...prev];
                            newLinks.splice(index, 1);
                            return newLinks;
                          });
                        }}
                        size="xs"
                        color="error"
                      >
                        <FaTrash />
                      </Button>
                    )}

                    {socialLinks.length - 1 === index && (
                      <Button
                        type="button"
                        onClick={() => {
                          setSocialLinks((prev) => {
                            const newLinks = [...prev];
                            newLinks.push({
                              name: "",
                              link: "",
                            });
                            return newLinks;
                          });
                        }}
                        color="success"
                        size="xs"
                      >
                        <FaPlus />
                      </Button>
                    )}
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Spacer y={2} />
        <Row
          css={{
            paddingBottom: "4rem",
          }}
        >
          <Button
            auto
            css={{
              width: "100%",
            }}
            color="success"
            type="button"
            onClick={() => handleSubmit()}
          >
            Create Organization
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default NewOrganization;
