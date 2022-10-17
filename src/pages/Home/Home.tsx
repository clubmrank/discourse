import React from "react";
import Header from "../../components/header/Header";
import styles from "./home.module.scss";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Button, Dropdown, Menu, Space } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { GoFileSubmodule } from "react-icons/go";
const Home = () => {
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
    <div className={styles.homeMain}>
      <Header />
      <div className={styles.homeBody}>
        <h1>WELCOME TO DISCOURSE</h1>
        <p>
          A students guide to navigating their academic choices, from
          <br /> the perspective of students who have done or experienced <br />{" "}
          them before.
        </p>

        <div className={styles.dropdowns}>
          <div className={styles.dropdown}>
            <Dropdown
              overlay={universities}
              overlayStyle={{ backgroundColor: "red", width: "200px" }}
            >
              <Button>
                <Space align="center" size="large">
                  <FaUniversity />
                  Select Your University
                  <AiOutlineDown />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div className={styles.dropdown}>
            <Dropdown overlay={universities}>
              <Button>
                <Space>
                  <GiBookCover />
                  Select Your Course
                  <AiOutlineDown />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div className={styles.dropdown}>
            <Dropdown overlay={universities}>
              <Button>
                <Space>
                  <GiBookCover />
                  Select Your Module
                  <AiOutlineDown />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <button className={styles.dropdownBtn}>Search</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
