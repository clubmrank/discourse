import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const Home = () => {
  const [searcher, setSearcher] = useState({
    university: "",
    course: "",
    module: "",
  });

  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [universities, setUniversities] = useState([]);

  const getModules = async () => {
    await fetch(`https://discoursemrank.azurewebsites.net/get_all_modules`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setModules(data))
      .catch((err) => console.log(err));
  };
  const getCourses = async (id: number) => {
    await fetch(
      `https://discoursemrank.azurewebsites.net/get_all_courses_by_institution/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  };
  const getUniversities = async () => {
    await fetch(`https://discoursemrank.azurewebsites.net/get_institutions`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUniversities(data))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  const [submitDisable, setSubmitDisable] = useState(false);

  const handleSearch = (e: { preventDefault: () => void }) => {
    navigate(
      `/universities/${searcher.university}/${searcher.course}/${
        searcher.module === "" ? "" : searcher.module
      }`
    );
  };
  const handleSubmitBtn = () => {
    searcher.university !== "" && searcher.course !== ""
      ? setSubmitDisable(false)
      : setSubmitDisable(true);
  };
  useEffect(() => {
    handleSubmitBtn();
    getCourses(1);
    getModules();
    getUniversities();
  }, [searcher]);
  return (
    <div className={styles.homeMain}>
      <Header />
      <div className={styles.homeBody}>
        <h1>WELCOME TO DISCOURSE</h1>
        <h2>
          A students guide to navigating their academic choices, from
          <br /> the perspective of students who have done or experienced <br />{" "}
          them before.
        </h2>

        <div className={styles.dropdowns}>
          <div className={styles.dropdown}>
            <Select
              style={{ width: 205, borderRadius: "20px" }}
              onChange={(e) =>
                setSearcher((prev) => ({ ...prev, university: e }))
              }
              size="large"
              showSearch={true}
              placeholder={
                <Space>
                  <FaUniversity />
                  Select Your University
                </Space>
              }
            >
              {universities.map((uni: any) => (
                <Option value={uni.name}>{uni.name}</Option>
              ))}
            </Select>
          </div>
          <div className={styles.dropdown}>
            <Select
              size="large"
              style={{ width: 205 }}
              showSearch={true}
              onChange={(e) => setSearcher((prev) => ({ ...prev, course: e }))}
              placeholder={
                <Space>
                  <GoFileSubmodule />
                  Select Your Course
                </Space>
              }
            >
              {courses.map((el: any) => (
                <Option value={el.name} key={el.name}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className={styles.dropdown}>
            <Select
              size="large"
              showSearch={true}
              style={{ width: 205 }}
              onChange={(e) => setSearcher((prev) => ({ ...prev, module: e }))}
              placeholder={
                <Space>
                  <GiBookCover />
                  Select Your Module
                </Space>
              }
            >
              {modules.map((el: any) => (
                <Option value={el.code}>{el.name}</Option>
              ))}
            </Select>
          </div>
          <Button
            className={styles.dropdownBtn}
            onClick={handleSearch}
            htmlType="submit"
            disabled={submitDisable}
          >
            Search
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
