import "./blog.css";
const Blog = ({ image, texts }) => {
  return (
    <div className="blog">
      <div className="container">
        <div className="media">
          <img src={image} />
        </div>
        <div className="text">
          {texts.map((text, index) => (
            <p key={index}>&emsp;&emsp;{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
