const FooterContactItem = ({
  label = "",
  content = "",
}: {
  label: string;
  content: string;
}) => {
  return (
    <li>
      <span className="contact-info-label">{label}</span>{content}
    </li>
  );
};

export default FooterContactItem;

