import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="support">
        Did you like this website? Leave a star on{" "}
        <a href="https://github.com/dovidmoishe/help-web3-devs" target="_blank">
          Github
        </a>{" "}
        and help me build more websites:
        0x240b84CB53168e23542daeD8D8D7dcb8641c9530
      </div>
      <div className="my-socials">
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  );
}
