import { useState } from 'react';

function CommentSection({ videoId }) {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const handlePost = () => {
    setAllComments([...allComments, comment]);
    setComment('');
  };

  return (
    <div>
      <h4>Comments</h4>
      <input
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
      <ul>
        {allComments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
}
export default CommentSection;
