function News(props) {
    return (
      <div className="newsContainer">
        <div className="title">
          {props.children}
        </div>
      </div>
    );
}

export default Feed;
