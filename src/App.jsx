import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import HYRequest from "./services/request"

function App() {
  // 函数式组件使用useEffect发起请求，class组件在componentDidmount里发起请求
  useEffect(() => {
    HYRequest.get({
      url: "/home/highscore"
    }).then((res) => { console.log(res); })
  }, [])
  return (
    <div className="App">
      路由：
      <div>
        {useRoutes(routes)}
      </div>
    </div>
  );
}

export default App;
