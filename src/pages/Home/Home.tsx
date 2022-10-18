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
import { Select } from "antd";

const { Option } = Select;
const Home = () => {
  const universities = [
    "University of The Western Cape",
    "University of Cape Town",
    "Stellenbosch University",
  ];

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
            <Select
              // defaultValue="lucy"
              // style={{ width: 120 }}

              placeholder={
                <Space>
                  <FaUniversity />
                  Select Your University
                </Space>
              }
            >
              {universities.map((uni) => (
                <Option value={uni}>{uni}</Option>
              ))}
            </Select>
          </div>
          <div className={styles.dropdown}>
            <Select
              // defaultValue="lucy"
              // style={{ width: 120 }}

              placeholder={
                <Space>
                  <GoFileSubmodule />
                  Select Your Course
                </Space>
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className={styles.dropdown}>
            <Select
              // style={{ width: 120 }}

              placeholder={
                <Space>
                  <GiBookCover />
                  Select Your Module
                </Space>
              }
            >
              <Option value="University Of The western Cape">
                University Of The western Cape
              </Option>
              <Option value="University of Cape Town">
                University of Cape Town
              </Option>

              <Option value="Stellenbosch University">
                Stellenbosch University
              </Option>
            </Select>
          </div>
          <button className={styles.dropdownBtn}>Search</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
