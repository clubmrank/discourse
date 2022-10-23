import React from "react";
import styles from "./moduleTabs.module.scss";
import { Tabs } from "antd";
import ReviewsTab from "../ReviewsTab/ReviewsTab";
const ModuleTabs = () => {
  return (
    <Tabs size="large" defaultActiveKey="1">
      <Tabs.TabPane tab={<b>Reviews</b>} key="1">
        <ReviewsTab />
      </Tabs.TabPane>
      <Tabs.TabPane tab={<b>Ratings</b>} key="2">
        Ratings
      </Tabs.TabPane>
    </Tabs>
  );
};

export default ModuleTabs;
