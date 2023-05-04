const FooterServiceItem = ({
  link = "",
  label = "",
  target = "_self",
}: {
  link: string;
  label: string;
  target?: string;
}) => {
  return (
    <li>
      <a href={link} target={target !== "" ? target : ""}>
        {label}
      </a>
    </li>
  );
};

export default FooterServiceItem;
