import React from "react";
import styles from "./universityList.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AiOutlineDown } from "react-icons/ai";
import { Button, Dropdown, Menu, Space } from "antd";
import { Card } from "antd";
import { Link, Outlet, useOutlet } from "react-router-dom";
const { Meta } = Card;
const UniversityList = () => {
  const outlet = useOutlet();
  const universities = (
    <Menu
      items={[
        {
          key: "1",
          label: <a>1st menu item</a>,
        },
        {
          key: "2",
          label: <a>2nd menu item</a>,
        },
        {
          key: "3",
          label: <a>3rd menu item</a>,
        },
      ]}
    />
  );
  return (
    <div className={styles.uniMain}>
      <Header />

      {outlet ? (
        <Outlet />
      ) : (
        <div className={styles.uniCont}>
          <div className={styles.uniTop}>
            <h1>Choose Your University</h1>
            <div className={styles.topRight}></div>
          </div>
          <div className={styles.uniReviews}>
            <ul>
              <li>
                <Link to="university">
                  <div className={styles.uniDropdown}></div>
                  <Dropdown
                    overlay={universities}
                    // placement={`right`}
                    overlayStyle={{ backgroundColor: "red", width: "200px" }}
                  >
                    <Card
                      hoverable={true}
                      title="University Of The Western Cape"
                      style={{
                        width: 200,
                        position: "relative",
                      }}
                      cover={
                        <img alt="example" src="/images/UWC_logo.svg.png" />
                      }
                    />
                  </Dropdown>
                </Link>
              </li>
              <li>
                <Link to="/university_of_the_western_cape">
                  <div className={styles.uniDropdown}></div>
                  <Dropdown
                    overlay={universities}
                    // placement="right"
                    overlayStyle={{ backgroundColor: "red", width: "200px" }}
                  >
                    <Card
                      hoverable={true}
                      title="University Of The Western Cape"
                      style={{
                        width: 200,
                        position: "relative",
                      }}
                      cover={
                        <img alt="example" src="/images/UWC_logo.svg.png" />
                      }
                    />
                  </Dropdown>
                </Link>
              </li>
              <li>
                <Link to="/university_of_the_western_cape">
                  <div className={styles.uniDropdown}></div>
                  <Dropdown
                    overlay={universities}
                    // placement="right"
                    overlayStyle={{ backgroundColor: "red", width: "200px" }}
                  >
                    <Card
                      hoverable={true}
                      title="University Of The Western Cape"
                      style={{
                        width: 200,
                        position: "relative",
                      }}
                      cover={
                        <img alt="example" src="/images/UWC_logo.svg.png" />
                      }
                    />
                  </Dropdown>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UniversityList;
