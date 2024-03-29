const COOKIE_URL = "https://seunggabi.com";
const COOKIE_NAME = "AutoSkipDisable";

const data = {
  site: [
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
      image: "",
    },
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      image: "",
    },
    {
      name: "YouTube Music",
      url: "https://www.music.youtube.com/",
      image: "",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/",
      image: "",
    },
    {
      name: "Naver",
      url: "https://tv.naver.com/",
      image: "",
    },
    {
      name: "JobPlanet",
      url: "https://www.jobplanet.co.kr/",
      image: "",
    },
    {
      name: "Kakao",
      url: "https://tv.kakao.com/",
      image: "",
    },
    {
      name: "Afreeca",
      url: "https://www.afreecatv.com/",
      image: "",
    },
    {
      name: "DailyMotion",
      url: "https://www.dailymotion.com/",
      image: "",
    },
    {
      name: "JTBC",
      url: "https://news.jtbc.joins.com",
      image: "",
    },
    {
      name: "VLIVE",
      url: "https://vlive.tv",
      image: "",
    },
  ],
  review: {
    className: "red bold",
    urls: [
      {
        name: "Whale",
        url: "https://store.whale.naver.com/detail/elgcmjohjpjgmogomciohcdgofjmddaj",
      },
      {
        name: "Toonation",
        url: "https://toon.at/donate/637225213338784448",
      }
    ]
  },
  project: [
    {
      name: "국민청원",
      urls: [
        {
          name: "Whale",
          url: "https://store.whale.naver.com/detail/klmljnjajpkoeidgjpdeplhgcflpdelh",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Clip History",
      urls: [
        {
          name: "Whale",
          url: "https://store.whale.naver.com/detail/nclmnfnglpbfhdnmdpkjpnnagbkdlhai",
        }
      ],
      className: "bold",
      style: "",
    },
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
          name: "Whale",
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
          name: "Chrome",
          url: "https://chrome.google.com/webstore/detail/autorefresh/kpblfhpdgghcabcfkndaicjhkppckdfk",
        },
        {
          name: "Whale",
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
  a: '<a href="#" target="_blank" class="padding-left-3"></a>',
  li: '<li>'
};
