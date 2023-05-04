import React from "react";

const HomePostItem = ({
  image = "",
  content = "",
  desc = "",
}: {
  image: string;
  content: string;
  desc: string;
}) => {
  return (
    <li>
      <img className="photo" alt={content} src={image} />
      <div className="content">
        <h3>
          <a href={content} title={content}>
            {content}
          </a>
        </h3>
        <p className="section_desc">{desc}</p>
        <div className="section_btn">
          <a
            className="readmore"
            href="lighting-upgrades"
            title="Lighting Upgrades"
          >
            Read more
          </a>
        </div>
      </div>
    </li>
  );
};

export default HomePostItem;

/* <a href={link} target={target !== '' ? target: ''}>
        {label}
      </a> */
