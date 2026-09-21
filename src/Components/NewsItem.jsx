const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 bg-dark text-light">
      <img
        src={src}
        style={{ width: "100%", height: "220px", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description.slice(0, 100)}...</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
