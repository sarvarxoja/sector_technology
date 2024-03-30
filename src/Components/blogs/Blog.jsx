import React, { Component } from "react";
import "./blog.css";
import years from "../../images/2024.png";
import park from "../../images/park.png";
import news from "../../images/okala.png";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-backgrund mt-5">
        <div className="repo_blog container">
          <h1 className="text-center mt-5">Новости и события</h1>
          <div className="blog-grid mt-5 mb-4">
            <div className="repo1">
              <img src={years} alt="" width={600} height={250} className="banner_img"/>
              <div className="text_1">
              <span className="h2 mt-2 mb-2 d-block">Blog</span>
              <p className="text-blog">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                perferendis odit dolorum. Neque illo animi nisi minus eligendi
                blanditiis.
              </p>
              </div>
            </div>
            <div className="repo2">
              <img src={park} alt="" width={480} height={180} className="banner_img"/>
              <div className="info_news">
                <span className="h2 d-block pt-2">SUCCESS STORIES</span>
                <p className="text-inf">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, quisquam.
                </p>
              </div>
            </div>
            <div className="repo3">
              <img src={news} alt="" width={480} height={180} className="banner_img"/>
              <div className="info_news">
                <span className="h2 text d-block pt-2">News</span>
                <p className="text-inf">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
