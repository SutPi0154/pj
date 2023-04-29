import React from "react";

const Review = () => {
  return (
    <div>
      <div className="my-5">
        <div>
          <h1 className=" mb-5">What Out Customer Says?</h1>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-8 col-lg-4 col-xl-4"
            style={{ width: "25rem" }}
          >
            <div className="card p-5 rounded-4 bg-warning">
              <p className=" fs-5 text mb-4">
                "The aroma of the dish reached my nostrils before it even
                arrived at the table. As soon as I took the first bite, I knew I
                was in for a treat. The ingredients were perfectly balanced and
                complemented each other well, resulting in a harmonious
                explosion of flavors in my mouth."
              </p>
              <img
                className=" rounded-pill"
                width="70px"
                src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/326870813_3473898962895133_5409831447640404300_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=su5FryH-iTYAX-6RUsO&_nc_ht=scontent-sin6-1.xx&oh=00_AfD303fjWS-WeLYQRuCVv3iBlppw6aLUyshjx63hmPT_HA&oe=640254EE"
                alt=""
              />
              <h4 className="mt-3">Kyaw Phyo Thar</h4>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4 col-xl-4">
            <div
              className="card p-5 rounded-4 bg-warning"
              style={{ width: "25rem" }}
            >
              <p className=" fs-5 w-100 text mb-4">
                "I've tried many similar dishes at different restaurants, but
                this one really stood out. The presentation was exceptional, and
                the taste was beyond compare. The flavors were rich and complex,
                and the texture was perfectly balanced. The portion size was
                generous, but not overwhelming.
              </p>
              <img
                className=" rounded-pill"
                width="70px"
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-1/312611993_792207865381277_562602498309856746_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=QyICuI_7NCgAX_WpGr_&_nc_ht=scontent-sin6-2.xx&oh=00_AfB9CUttddBHe5VJOIxjQ44jrton2B2xKocGgGAYor2zMA&oe=64032677"
                alt=""
              />
              <h4 className="mt-3">Kyaw Min Khant</h4>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4 col-xl-4">
            <div
              className="card p-5 rounded-4 bg-warning"
              style={{ width: "25rem" }}
            >
              <p className=" fs-5 w-100 text mb-4">
                "I had a wonderful experience trying this dish, and it brought
                back childhood memories for me. The flavors were familiar, yet
                elevated, and I appreciated the chef's attention to
                detail.Delicious and versatile, with endless topping options.
                meal.It was a delightful culinary experience."
              </p>
              <img
                className=" rounded-pill"
                width="70px"
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-1/183316533_499315991271220_8808795775113106677_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZaBE1NG07JYAX8aQrPi&tn=GUlS5ljRRXXRqEGV&_nc_ht=scontent-sin6-2.xx&oh=00_AfC1FIpDcBh64nmbzNooFns2gfyOqQMeByLzU8vOj3qjlw&oe=641BD283"
                alt=""
              />
              <h4 className="mt-3">Nein Kyaw</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
