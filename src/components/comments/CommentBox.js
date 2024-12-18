import React from "react"

const CommentBox = ({ data }) => {
  return (
    data.map((comment) => (
        <div className="pl-10 border-l-2 border-grey">
          <div>
            <img
              className="w-16 p-2 rounded full"
              src="https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold px-2 py-4">{comment.username}</div>
            <div className="px-2">{comment.comment}</div>
          </div>
          <div>
            {comment.replies && <CommentBox data={comment.replies} />}
          </div>
        </div>
      ))
  );
};

export default CommentBox