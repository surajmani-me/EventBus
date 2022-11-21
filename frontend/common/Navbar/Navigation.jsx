import { useRouter } from "next/router";
import { Button, Dropdown, Link, Navbar, Text, User } from "@nextui-org/react";
import * as NavLink from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const { isAuthenticated, user } = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }));

  const { asPath } = useRouter();

  const dispatch = useDispatch();

  const collapseItems = [
    "Events",
    "Organizations",
    "About",
    "Contact",
    "Login",
    "Register",
    "Create Event",
    "Logout",
    "Create Organization",
  ];

  return (
    <Navbar
      shouldHideOnScroll
      variant={"static"}
      css={{
        width: "100%",
      }}
    >
      <Navbar.Brand>
        <Text
          as={NavLink}
          href="/"
          css={{
            fontWeight: "bold",
          }}
        >
          EventBus
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn={"xs"} activeColor={"primary"} variant={"default"}>
        <Navbar.Link
          as={NavLink}
          href="/events"
          isActive={asPath === "/events"}
        >
          Events
        </Navbar.Link>
        <Navbar.Link
          as={NavLink}
          href="/organizations"
          isActive={asPath === "/organizations"}
        >
          Organizations
        </Navbar.Link>
        <Navbar.Link as={NavLink} href="/about" isActive={asPath === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link
          as={NavLink}
          href="/contact"
          isActive={asPath === "/contact"}
        >
          Contact
        </Navbar.Link>
        {isAuthenticated ? (
          <>
            <Dropdown>
              <Dropdown.Button color={"default"} light>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name={user?.name.first + " " + user?.name.last}
                  bordered
                />
              </Dropdown.Button>
              <Dropdown.Menu
                color={"default"}
                variant="light"
                aria-label="Actions"
              >
                <Dropdown.Item key="create_organization">
                  <Navbar.Link
                    as={NavLink}
                    href="/organizations/new"
                    isActive={asPath === "/organizations/new"}
                  >
                    Create Organization
                  </Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item key="create_event">
                  <Navbar.Link
                    as={NavLink}
                    href="/create/event"
                    isActive={asPath === "/create/event"}
                  >
                    Create Event
                  </Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item key="logout" color="error" withDivider>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <>
            <Navbar.Link
              as={NavLink}
              href="/login"
              isActive={asPath === "/login"}
            >
              Login
            </Navbar.Link>
            <Navbar.Link
              as={NavLink}
              href="/register"
              isActive={asPath === "/register"}
            >
              Register
            </Navbar.Link>
          </>
        )}
      </Navbar.Content>
      <Navbar.Toggle showIn={"xs"} aria-label="toggle navigation" />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
