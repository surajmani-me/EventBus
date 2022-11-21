import {
  Avatar,
  Button,
  Col,
  Input,
  Modal,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { FaCloudUploadAlt } from "react-icons/fa";

const EditOrganization = ({ setVisible, bindings }) => {
  return (
    <div>
      <Modal
        scroll
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Edit Organization Profile
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Spacer y={1} />
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
          <Spacer y={1} />
          <Input
            clearable
            labelPlaceholder="Organization Name"
            initialValue="Organization 1"
          />
          <Spacer y={1.5} />
          <Input clearable labelPlaceholder="Desciption" initialValue="India" />
          <Spacer y={1.5} />
          <Input clearable labelPlaceholder="Country" initialValue="India" />
          <Spacer y={1.5} />
          <Input
            labelLeft="twitter.com/"
            placeholder="username"
            initialValue="mytwitter"
          />
          <Input
            labelLeft="instagram.com/"
            placeholder="username"
            initialValue="myinsta"
          />
          <Input
            clearable
            labelLeft="LinkedIn"
            placeholder="https://www.linkedin.com/company/example"
            initialValue="https://linkedin.com/company/mycompany"
          />
          <Spacer y={1.5} />
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button onClick={() => setVisible(false)}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditOrganization;
