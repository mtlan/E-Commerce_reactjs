const FooterTagItem = ({
  link = "",
  label = "",
  target = "_self",
}: {
  link: string;
  label: string;
  target?: string;
}) => {
  return (
    <a href={link} target={target !== "" ? target : ""}>
      {label}
    </a>
  );
};

export default FooterTagItem;
