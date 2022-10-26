import React from "react";
import styles from "./moduleTabs.module.scss";
import { Tabs } from "antd";
import ReviewsTab from "../ReviewsTab/ReviewsTab";
export interface Ipros {
  reviews: any[];
}
const ModuleTabs = ({ reviews }: Ipros) => {
  return (
    <Tabs size="large" defaultActiveKey="1">
      <Tabs.TabPane tab={<b>Reviews</b>} key="1">
        <ReviewsTab reviews={reviews} />
      </Tabs.TabPane>
      <Tabs.TabPane tab={<b>Ratings</b>} key="2">
        Ratings
      </Tabs.TabPane>
    </Tabs>
  );
};

export default ModuleTabs;
