import "./style.scss";
import { Empty } from "antd";

const NoDataAvailable = (props) => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<span>No Data Found</span>}
    ></Empty>
  );
};

export default NoDataAvailable;
