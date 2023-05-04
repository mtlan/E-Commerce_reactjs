import React from "react";
import FooterContact from "../../FooterContact";

import { contacts } from "../../../data/contacts";
import FooterContactItem from "../../FooterContactItem";
import FooterService from "../../FooterService";
import { services } from "../../../data/services";
import FooterServiceItem from "../../FooterServiceItem";
import FooterAbout from "../../FooterAbout";
import FooterTag from "../../FooterTag";
import { tags } from "../../../data/tags";
import FooterTagItem from "../../FooterTagItem";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex">
          <FooterAbout />
          <FooterContact>
            {contacts.map((contact) => (
              <FooterContactItem
                key={contact.id}
                label={contact.label}
                content={contact.content}
              />
            ))}
          </FooterContact>
          <FooterService>
            {services.map((service) => (
              <FooterServiceItem
                key={service.id}
                link={service.link}
                target={service.target}
                label={service.label}
              />
            ))}
          </FooterService>
          <FooterTag>
            {tags.map((tag) => (
              <FooterTagItem
                key={tag.id}
                link={tag.link}
                target={tag.target}
                label={tag.label}
              />
            ))}
          </FooterTag>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
