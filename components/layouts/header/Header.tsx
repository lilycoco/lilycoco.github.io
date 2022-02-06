import { Navbar } from "react-bootstrap";
import { Icon, Span } from "../Style";
import { NavberCollapse } from "./NavberCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Nav } from "react-bootstrap";

export const Header = () => (
  <Navbar bg="light" expand="lg" variant="light" className="py-10 px-20 w-full">
    <div className="w-full">
      <div className="flex w-full justify-between">
        <Navbar.Brand
          href="/"
          className="flex items-center"
          style={{ fontFamily: "cursive" }}
        >
          <Span>
            <Icon src="/static/icon/water_lily.png" />
          </Span>
          Lilycoco
        </Navbar.Brand>
        <div className="flex items-center">
          <Nav.Link href="https://twitter.com/llccr27" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Nav.Link>
          <Nav.Link href="https://github.com/lilycoco" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Nav.Link>
          <Nav.Link
            href="https://www.codewars.com/users/lilycoco"
            target="_blank"
          >
            <img src="/static/icon/codewars2.webp" className="w-5 h-5 block" />
          </Nav.Link>
        </div>
      </div>
      <NavberCollapse />
    </div>
  </Navbar>
);
