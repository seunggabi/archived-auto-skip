const COOKIE_URL = "https://www.youtube.com";
const COOKIE_NAME = "AutoSkipDisable";

const links = {
  default: {
    style: "",
    className: "",
  },
  site: [
    {
      name: "",
      url: "",
      image: "",
      className: "",
      style: "",
    }
  ],
  review: {
    className: "red bold",
    urls: [
      {
        name: "chrome",
        url: "https://chrome.google.com/webstore/detail/autoskip/bmiijndgbkepjhffnidelmdkagfgcnil/reviews?hl=ko",
      },
      {
        name: "whale",
        url: "https://store.whale.naver.com/detail/elgcmjohjpjgmogomciohcdgofjmddaj",
      },
      {
        name: "toonation",
        url: "https://toon.at/donate/637225213338784448",
      }
    ]
  },
  project: [
    {
      name: "Smart Boook",
      urls: [
        {
          name: "click",
          url: "http://smartboook.com/",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Auto Skip",
      urls: [
        {
          name: "whale",
          url: "https://store.whale.naver.com/detail/elgcmjohjpjgmogomciohcdgofjmddaj",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Auto Refresh",
      urls: [
        {
          name: "chrome",
          url: "https://chrome.google.com/webstore/detail/autorefresh/kpblfhpdgghcabcfkndaicjhkppckdfk",
        },
        {
          name: "whale",
          url: "https://store.whale.naver.com/detail/dmfiihebfllgebodghhgbldipmpiehem",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Instagram Follower Count",
      urls: [
        {
          name: "click",
          url: "https://seunggabi.tistory.com/entry/insta-follwer-%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%ED%8C%94%EB%A1%9C%EC%9B%8C-%EC%88%98-%EC%B9%B4%EC%9A%B4%ED%8A%B8-%EB%B4%87",
        }
      ],
      className: "bold",
      style: "",
    },
  ]
};

const doms = {
  link_wrapper: '<div class="link-wrapper"></div>',
  a: '<a href="#" target="_blank" class="small-padding-horizontal"></a>',
  li: '<li>'
};
