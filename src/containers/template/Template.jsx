import "./template.css";
const Template = ({ heading, body }) => {
  return (
    <div className="template">
      <div className="container">
        <div>
          <h4>{heading}</h4>
          <hr />
        </div>

        <div className="body">{body}</div>
      </div>
    </div>
  );
};

export default Template;
