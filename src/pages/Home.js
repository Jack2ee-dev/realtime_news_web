import axios from "axios";
import { useEffect } from "react";

import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  NAVER_NEWS_API_URI,
} from "../const/NAVER";

function Home() {
  useEffect(() => {
    axios({
      method: "GET",
      url: NAVER_NEWS_API_URI,
      params: {
        query: "비트코인",
        sort: "sim",
        display: 100,
      },
      headers: {
        "X-Naver-Client-Id": NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
      },
    }).then((response) => console.log(response.data));
  }, []);

  return <div>홈</div>;
}

export default Home;
