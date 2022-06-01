import { useContext, useRef, useState } from "react";
import { ReviewDispatchContext } from "./ReviewContext";
import styled from "styled-components";
import ReviewRating from "./ReviewRating";

const ReviewCreate = () => {
  const { onCreate } = useContext(ReviewDispatchContext);
  const [review, setReview] = useState({
    author: "",
    content: "",
    rating: "",
  });

  const changeReview = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const ButtonChangeReview = () => {
    if (review.author.length < 1) {
      authorRef.current.focus();
      return;
    }
    if (review.content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(review.author, review.content, review.rating);
    alert("Add Review !");

    setReview({
      author: "",
      content: "",
      rating: "",
    });
  };

  const authorRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <ReviewCreateStyle>
      <div className="ReviewCreate-container">
        <h2>What's Review rating ?</h2>
        <ReviewRating selected={changeReview} />
        <ReviewRatingStyle>
          <div>
            {/* <ul className="rating">
              <li key={1}>
                <input
                  name="rating"
                  type="radio"
                  value={1}
                  onChange={changeReview}
                />
                <label htmlFor="1">1</label>
              </li>
            </ul> */}
          </div>
        </ReviewRatingStyle>
        <div className="input-button">
          <div className="input-wrap">
            <input
              className="author"
              name="author"
              placeholder="Nickname"
              type="text"
              value={review.author}
              onChange={changeReview}
            />
            <input
              className="content"
              name="content"
              placeholder="Add a review"
              type="text"
              value={review.content}
              onChange={changeReview}
            />
          </div>
          <div className="send-button">
            <button onClick={ButtonChangeReview}>SEND</button>
          </div>
        </div>
      </div>
    </ReviewCreateStyle>
  );
};

const ReviewCreateStyle = styled.div`
  display: flex;
  justify-content: center;

  .ReviewCreate-container {
    width: 50vw;
    display: flex;
    min-height: 17em;
    // margin-bottom: 20px;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    word-break: break-word;
    background-color: #fff;
    border-radius: 5px;
    letter-spacing: 0.02em;
    word-spacing: 0.1em;
  }

  .input-button {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-right: 20px;
  }

  .author {
    height: 20%;
    margin-bottom: 15px;
  }

  .content {
    height: 50%;
  }

  .send-button button {
    width: 5em;
    height: 7em;
    border: none;
    border-radius: 7px;
    background-color: hsl(238, 40%, 52%);
    color: hsl(228, 33%, 97%);
  }
`;
export default ReviewCreate;

const ReviewRatingStyle = styled.div`
  width: 90%;
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
  }

  .rating li {
    display: flex;
    justify-content: space-around;
    positon: relative;
    background: hsl(228, 33%, 97%);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: 16px;
    padding: 10px;
    transition: 0.1s;
    color: hsl(239, 57%, 85%);
  }

  .rating li label {
    position: absolute;
    // padding: 5px 10px;
    cursor: pointer;
  }

  .rating li:hover {
    background: hsl(211, 10%, 45%);
    color: #fff;
  }

  [type="radio"] {
    // opacity: 0;
  }

  [type="radio"]:checked {
    background: #ff6a95;
    color: #fff;
  }
`;