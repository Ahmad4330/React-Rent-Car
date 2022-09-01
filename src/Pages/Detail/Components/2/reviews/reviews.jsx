import React from 'react'
import './reviews.css'



const Reviews = ({boy, name, post, date, comment}) => {
  return (
    <>

    <div className="review-comments">
            <div className="first-comment">
              <div className="comment-top">
                <div className="comment-left">
                  <img src={boy} alt="" />
                  <div>
                    <span className="secondary-heading">{name}</span>
                    <span className="fourth-text">{post}</span>
                  </div>
                </div>
                <div className="comment-right">
                  <p className="fourth-text">{date}</p>
                  <div className="staar">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-comment">
              <p className="fourth-text">{comment}</p>
            </div>
          </div>
      
    </>
  )
}

export default Reviews
