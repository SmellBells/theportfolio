import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.instagram.com/elliottsmelly/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/SmellBells/">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/elliott-gonzales-586188142/">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
