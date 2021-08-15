import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

import Icon from "../components/Icon";
// Icons
import Html from "../components/icons/Html";
import Css from "../components/icons/Css";
import Javascript from "../components/icons/Javascript";
import Tailwind from "../components/icons/Tailwind";
import Bootstrap from "../components/icons/Bootstrap";
import Sass from "../components/icons/Sass";
import ReactJs from "../components/icons/ReactJs";
import NextJs from "../components/icons/NextJs";
import NodeJs from "../components/icons/NodeJs";
import Firebase from "../components/icons/Firebase";
import Figma from "../components/icons/Figma";
import Photoshop from "../components/icons/Photoshop";
import Illustrator from "../components/icons/Illustrator";
import AfterEffects from "../components/icons/AfterEffects";
import AdobeXd from "../components/icons/AdobeXd";
// Project Card
import ProjectCard from "../components/ProjectCard";
import Live from "../components/Live";
import GitHub from "../components/Source";
import MockupToolbar from "../components/MockupToolbar";
import GitHubProfile from "../components/icons/GitHubProfile";
import TwitterProfile from "../components/icons/TwitterProfile";
import LinkedInProfile from "../components/icons/LinkedInProfile";

const projects = [
  {
    title: "Rate My Film",
    overview:
      "Project overview goes here, telling the user a little about the problem that this program solves.",
    stack: ["Html", "ReactJs", "Sass"],
    link: "http://www.ratemyfilm.co.uk",
    repo: "http://www.repo.com",
  },
  {
    title: "Spotlight Media",
    overview:
      "Project overview goes here, telling the user a little about the problem that this program solves.",
    stack: ["Html", "ReactJs", "NextJs", "NodeJs"],
    link: "http://www.wearespotlight.co.uk",
    repo: "http://www.repo.com",
  },
  {
    title: "GPS Embroidery",
    overview:
      "Project overview goes here, telling the user a little about the problem that this program solves.",
    stack: ["Html", "ReactJs", "NextJs"],
    link: "http://www.gps-embroidery.com",
    repo: "http://www.repo.com",
  },
];

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Home() {
  const [visibleSection, setVisibleSection] = useState();
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      console.log("LESS THAN 768!");
      setIsMobile(true);
    } else {
      console.log("MORE THAN 768!");
      setNavbarOpen(false);
      setIsMobile(false);
    }
  };

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const myWorkRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "home", ref: homeRef, id: 1 },
    { section: "about", ref: aboutRef, id: 2 },
    { section: "skills", ref: skillsRef, id: 3 },
    { section: "my-work", ref: myWorkRef, id: 4 },
    { section: "blog", ref: blogRef, id: 5 },
    { section: "contact", ref: contactRef, id: 6 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
        // console.log(visibleSection);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolling(window.pageYOffset > 110)
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      className={`relative w-full bg-right-bottom bg-cover bg-dark overflow-auto min-h-screen ${
        navbarOpen ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      <Head>
        <title>Daniel Cranney | Frontend Developer & Designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Full-screen Menu */}
      <div
        className={`fixed w-full z-50 h-screen pt-24 bg-darker bg-opacity-100 transform delay-100 transition-all duration-300 ${
          navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="container relative mx-auto">
          <nav className="block ml-auto">
            <ul className="z-50 flex flex-col items-start">
              <li className="z-50 block py-2 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "home"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(homeRef.current);
                  }}
                >
                  Home
                </button>
              </li>
              <li className="z-50 block py-2 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "about"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(aboutRef.current);
                  }}
                >
                  About
                </button>
              </li>
              <li className="z-50 block py-2 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "skills"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(skillsRef.current);
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="z-50 block py-2 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "my-work"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(myWorkRef.current);
                  }}
                >
                  My Work
                </button>
              </li>
              <li className="z-50 block py-2 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "blog"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(blogRef.current);
                  }}
                >
                  Blog
                </button>
              </li>
              <li className="z-50 block py-2 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "contact"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(contactRef.current);
                  }}
                >
                  Contact
                </button>
              </li>
              <li className="z-50 block py-2 list-none md:inline-block">
                <button className="text-xl btn-brand btn-lg">Hire me</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Header and Nav */}
      <header
        className={`header top-0 mx-auto flex items-center py-6 z-50 fixed w-full transition-all duration-500 h-24 ${
          scrolling && !navbarOpen ? "bg-dark" : "bg-transparent"
        }`}
        ref={headerRef}
      >
        {/* Logo and Nav container */}
        <div className="container relative flex items-center mx-auto">
          {/* Logo */}
          <div className="z-50 w-12 h-12">
            <svg
              id="b613d120-e911-4f71-b7bc-d9b9e1bbdc6f"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.13 75.2"
            >
              <rect
                className="fill-current text-brand"
                x="-3.43"
                y="39.29"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(-27.18 21.75) rotate(-45)"
              />
              <rect
                className="fill-current text-brand"
                x="-3.43"
                y="22.74"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(22.89 -1.01) rotate(45)"
              />
              <rect
                className="fill-current text-brand"
                x="64.37"
                y="22.74"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(156.55 -10.59) rotate(135)"
              />
              <rect
                className="fill-current text-brand"
                x="64.37"
                y="39.29"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(106.48 131.47) rotate(-135)"
              />
              <rect
                className="fill-current text-brand"
                x="41.93"
                y="-1.17"
                width="8.78"
                height="77.54"
                rx="4.39"
                transform="translate(11.31 -10.71) rotate(15)"
              />
            </svg>
          </div>
          {/* Nav */}
          <nav className="block ml-auto">
            <ul className="z-50 flex items-center">
              <li className="z-50 hidden mx-5 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "home"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    scrollTo(homeRef.current);
                  }}
                >
                  Home
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "about"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    scrollTo(aboutRef.current);
                  }}
                >
                  About
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "skills"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    scrollTo(skillsRef.current);
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "my-work"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    scrollTo(myWorkRef.current);
                  }}
                >
                  My Work
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "blog"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    scrollTo(blogRef.current);
                  }}
                >
                  Blog
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none md:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${
                    visibleSection === "contact"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                  }`}
                  onClick={() => {
                    scrollTo(contactRef.current);
                  }}
                >
                  Contact
                </button>
              </li>
              <li className="z-50 hidden ml-5 list-none md:inline-block">
                <button className="btn-brand btn-md">Hire me</button>
              </li>
              <li className="z-50 inline-block ml-5 list-none md:hidden">
                <button
                  className="block text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Video background */}
      {/* <div className="absolute z-10 w-auto h-full max-w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          src="/videos/landing-page-video.mp4"
          className="relative z-10 w-auto max-w-full min-h-full opacity-20"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div> */}

      {/* Content Container */}
      <div className="container relative z-30 mx-auto">
        {/* Hero Content */}
        <main className={`flex-col flex h-screen`} id="home" ref={homeRef}>
          {/* Main */}
          <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
            <div className="w-3/5">
              <span className="text-2xl font-semibold text-brand">
                Hello! My name is
              </span>

              <h1 className="mb-4 text-7xl">Daniel Cranney</h1>
              <h2 className="mb-4 text-4xl text-light">
                <ReactTypingEffect
                  speed={50}
                  eraseSpeed={30}
                  eraseDelay={1500}
                  text={[`Frontend Developer`, "Designer"]}
                />
              </h2>
              <p className="text-xl">
                Brief introduction and description of my skills.
              </p>
              <button className="mt-4 btn-brand btn-lg">Button</button>
            </div>
          </div>
        </main>

        {/* About */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="about"
          ref={aboutRef}
        >
          <div className="flex flex-col">
            <h2 className="text-5xl">About</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

            <div className="flex flex-col-reverse items-start w-full md:flex-row">
              <div className="flex flex-col w-full md:pr-8 md:w-3/5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque est urna, dignissim et mauris id, ultrices finibus
                  ligula. Nulla accumsan mauris eu neque dapibus, ac ullamcorper
                  nunc pulvinar. Suspendisse odio justo.
                </p>
                <p className="text-lg">
                  Mauris feugiat quam metus, in tincidunt velit maximus vitae.
                  Aenean vitae venenatis arcu. Praesent ut egestas arcu. Duis
                  purus orci, cursus eget tortor scelerisque.
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque est urna, dignissim et mauris id, ultrices finibus
                  ligula. Nulla accumsan mauris eu neque dapibus, ac ullamcorper
                  nunc pulvinar. Suspendisse odio justo, rutrum nec risus vel,
                  ornare ultricies diam. Vestibulum nec convallis justo.
                </p>
                <button className="self-start inline-block mt-8 btn-outline btn-lg">
                  See my CV
                </button>
              </div>
              <div className="flex w-full h-full md:pl-8 md:w-2/5">
                <Image
                  src="/headshot-with-frame.png"
                  width={1624}
                  height={1624}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="skills"
          ref={skillsRef}
        >
          <h2 className="text-5xl">Skills</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          {/* Skills icons */}
          <div className="flex flex-wrap w-full pr-4 mt-8">
            {/* HTML icon */}
            <Icon
              IconType={Html}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="HTML"
              marginBottom={"mb-4"}
            />

            {/* CSS */}
            <Icon
              IconType={Css}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="CSS"
              marginBottom={"mb-4"}
            />

            {/* Sass */}
            <Icon
              IconType={Sass}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Sass"
              marginBottom={"mb-4"}
            />

            {/* Bootstrap */}
            <Icon
              IconType={Bootstrap}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Bootstrap"
              marginBottom={"mb-4"}
            />

            {/* Tailwind */}
            <Icon
              IconType={Tailwind}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Tailwind"
              marginBottom={"mb-4"}
            />

            {/* Javascript */}
            <Icon
              IconType={Javascript}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Javascript"
              marginBottom={"mb-4"}
            />

            {/* React */}
            <Icon
              IconType={ReactJs}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="React"
              marginBottom={"mb-4"}
            />

            {/* Next */}

            <Icon
              IconType={NextJs}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Next"
              marginBottom={"mb-4"}
            />

            {/* Node */}

            <Icon
              IconType={NodeJs}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Node"
              marginBottom={"mb-4"}
            />

            {/* Firebase */}

            <Icon
              IconType={Firebase}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Firebase"
              marginBottom={"mb-4"}
            />

            {/* Photoshop */}

            <Icon
              IconType={Photoshop}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Photoshop"
              marginBottom={"mb-4"}
            />

            {/* Illustrator */}

            <Icon
              IconType={Illustrator}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Illustrator"
              marginBottom={"mb-4"}
            />

            {/* After Effects */}

            <Icon
              IconType={AfterEffects}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="After Effects"
              marginBottom={"mb-4"}
            />

            {/* Adobe XD */}

            <Icon
              IconType={AdobeXd}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Adobe XD"
              marginBottom={"mb-4"}
            />

            {/* Figma */}

            <Icon
              IconType={Figma}
              columnSizing={"w-1/2 sm:w-1/3 lg:w-1/6"}
              width={"w-24"}
              height={"h-24"}
              padding={"p-0"}
              title="Figma"
              marginBottom={"mb-4"}
            />
          </div>
        </section>

        {/* My Work */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="my-work"
          ref={myWorkRef}
        >
          {/* My Work header */}
          <h2 className="text-5xl">My Work</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          {/* Featured Projects Container */}
          <div className="flex flex-col w-full mb-12">
            {/* Project one */}
            <article className="relative flex flex-col items-end w-full my-4 lg:flex-row">
              {/* Empty Column */}
              <div className="hidden w-1/6 lg:flex"></div>
              {/* Project image */}
              <div className="flex flex-col w-full p-3 rounded-md lg:w-5/6 bg-mid">
                <MockupToolbar />
                <Image src="/projects/culors.png" width={1366} height={666} />
              </div>

              {/* Project info */}
              <div className="relative w-full px-8 py-8 border-t-4 rounded-tl-none rounded-tr-none lg:transform lg:-translate-y-1/2 lg:w-1/2 lg:left-0 lg:absolute lg:-translate-x-0 lg:top-1/2 bg-mid rounded-bl-md rounded-br-md border-brand">
                <p className="mb-2 tracking-wider small-text">
                  Currently working on
                </p>
                <h3>Culors</h3>
                <div className="flex mb-4">
                  {/* React */}
                  <div className="flex items-center mr-5">
                    <Icon
                      IconType={ReactJs}
                      columnSizing={"w-full"}
                      width={"w-6"}
                      height={"h-6"}
                      padding={"p-0"}
                      title={null}
                    />
                    <span className="ml-1 small-text">React</span>
                  </div>
                  {/* NextJS */}
                  <div className="flex items-center mr-5">
                    <Icon
                      IconType={NextJs}
                      columnSizing={"w-full"}
                      width={"w-6"}
                      height={"h-6"}
                      padding={"p-0"}
                      title={null}
                    />

                    <span className="ml-1 small-text">Next</span>
                  </div>
                  {/* Tailwind */}
                  <div className="flex items-center mr-5">
                    <Icon
                      IconType={Tailwind}
                      columnSizing={"w-full"}
                      width={"w-6"}
                      height={"h-6"}
                      padding={"p-0"}
                      title={null}
                    />
                    <span className="ml-1 small-text">Tailwind</span>
                  </div>
                </div>
                <p>
                  Project outline and description of what problem it solves.
                  More information here.
                </p>
                <div className="flex">
                  <Live />
                  <GitHub />
                </div>
              </div>
            </article>

            {/* Project two */}
            <article className="relative flex flex-col items-end w-full my-4 lg:flex-row">
              {/* Project image */}
              <div className="flex flex-col w-full p-3 rounded-md lg:w-5/6 bg-mid">
                <MockupToolbar />
                <Image
                  src="/projects/quotr.png"
                  width={1366}
                  height={806}
                  className="rounded-bl-md rounded-br-md"
                />
              </div>
              {/* Empty Column */}
              <div className="hidden w-1/6 lg:flex"></div>

              {/* Project info */}
              <div className="relative w-full px-8 py-8 border-t-4 rounded-tl-none rounded-tr-none lg:transform lg:-translate-y-1/2 lg:w-1/2 lg:right-0 lg:absolute lg:-translate-x-0 lg:top-1/2 bg-mid rounded-bl-md rounded-br-md border-brand">
                <p className="mb-2 tracking-wider small-text">
                  Featured Project
                </p>
                <h3>Quotr</h3>
                <div className="flex mb-4">
                  {/* HTML */}
                  <div className="flex items-center mr-5">
                    <Icon
                      IconType={Html}
                      columnSizing={"w-full"}
                      width={"w-6"}
                      height={"h-6"}
                      padding={"p-0"}
                      title={null}
                    />

                    <span className="ml-1 small-text">Next</span>
                  </div>
                  {/* React */}
                  <div className="flex items-center mr-5">
                    <Icon
                      IconType={ReactJs}
                      columnSizing={"w-full"}
                      width={"w-6"}
                      height={"h-6"}
                      padding={"p-0"}
                      title={null}
                    />
                    <span className="ml-1 small-text">React</span>
                  </div>
                  {/* Tailwind */}
                  <div className="flex items-center mr-5">
                    <Icon
                      IconType={Tailwind}
                      columnSizing={"w-full"}
                      width={"w-6"}
                      height={"h-6"}
                      padding={"p-0"}
                      title={null}
                    />
                    <span className="ml-1 small-text">Tailwind</span>
                  </div>
                </div>
                <p>
                  Project outline and description of what problem it solves.
                  More information here.
                </p>
                <div className="flex">
                  <Live />
                  <GitHub />
                </div>
              </div>
            </article>
          </div>

          {/* Other Projects header */}
          <h2 className="text-4xl text-center">Other Projects</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 mx-auto border-0"></hr>
          <p className="mb-16 text-lg text-center">
            Here's some of the other things I've built or worked on
          </p>

          {/* Other Projects Container */}
          <div className="flex flex-col flex-wrap justify-between w-full lg:flex-row">
            {projects.map(function (project, i) {
              return <ProjectCard project={project} key={i} />;
            })}
          </div>
        </section>

        {/* My Blog */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="blog"
          ref={blogRef}
        >
          <h2 className="text-5xl">Blog</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          {/* Blog */}
          <div className="flex flex-col flex-wrap justify-between w-full mt-8 md:flex-row">
            <article className="flex flex-col w-full md:w-32pc">
              <div className="rounded-sm bg-mid h-60"></div>
            </article>
            <article className="flex flex-col w-full md:w-32pc">
              <div className="rounded-sm bg-mid h-60"></div>
            </article>
            <article className="flex flex-col w-full md:w-32pc">
              <div className="rounded-sm bg-mid h-60"></div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="contact"
          ref={contactRef}
        >
          <h2 className="text-5xl">Contact</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          {/* Contact */}

          <div className="flex flex-col-reverse w-full md:flex-row">
            <form
              method="post"
              // onSubmit={handleOnSubmit}
              className="w-full md:pr-6 md:w-3/5"
            >
              <label htmlFor="name" className="flex mb-2">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <label htmlFor="name">Name:</label>
                </div>
              </label>

              <input
                type="text"
                placeholder="John Smith"
                // ref={nameElement}
                className="mt-2 mb-8"
                required
                name="name"
              />

              <label className="flex mb-2">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <label htmlFor="email">Email:</label>
                </div>
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@smith.com"
                // ref={emailElement}
                className="mt-2 mb-8"
                required
              />

              <label className="flex mb-2">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <label htmlFor="message">Message:</label>
                </div>
              </label>

              <textarea
                type="text"
                name="message"
                className="mt-2 h-36"
                // ref={messageElement}
                required
              />

              <button className="mt-8 btn-brand btn-lg">Button</button>
            </form>
            <div className="w-full mb-4 md:pl-6 md:w-2/5 md:mb-0">
              <p>
                If you'd like to work with me on a project, then I'd love to
                discuss it with you!
              </p>
              <p>
                Either send me a message using the form, or send one straight to
                my inbox at{" "}
                <Link href="mailto:me@danielcranney.com">
                  <a>me@danielcranney.com</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col w-full px-0 py-16 md:px-20 lg:px-24 section">
          <hr className="w-full h-1 mb-16 bg-white border-0 opacity-10"></hr>
          <div className="w-8 mb-6">
            <svg
              id="abbe8588-8b21-44fd-a605-eb7de7f82941"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.13 75.2"
            >
              <path
                className="opacity-50 fill-current text-light"
                d="M24.05,38.51,7.5,55.06a4.39,4.39,0,1,1-6.21-6.21L14.74,35.41,1.29,22A4.39,4.39,0,0,1,7.5,15.75L24.05,32.3A4.4,4.4,0,0,1,24.05,38.51Z"
              />
              <path
                className="opacity-50 fill-current text-light"
                d="M91.85,55.06a4.38,4.38,0,0,1-6.21,0L69.09,38.51a4.4,4.4,0,0,1,0-6.21L85.64,15.75A4.39,4.39,0,0,1,91.85,22L78.41,35.41,91.85,48.85A4.4,4.4,0,0,1,91.85,55.06Z"
              />
              <rect
                className="opacity-50 fill-current text-light"
                x="41.93"
                y="-1.17"
                width="8.78"
                height="77.54"
                rx="4.39"
                transform="translate(11.31 -10.71) rotate(15)"
              />
            </svg>
          </div>

          <p className="mb-0">Designed and built by Daniel Cranney 2021</p>
        </footer>
      </div>

      {/* Fixed Container */}
      <div className="fixed bottom-0 z-30 w-full">
        <div className="container relative flex h-full mx-auto">
          {/* Profile Icons */}
          <div className="absolute bottom-0 items-center hidden mt-auto mr-auto text-white left-8 md:flex md:flex-col">
            <GitHubProfile />
            <TwitterProfile />
            <LinkedInProfile />
            <div className="w-0.5 bg-white h-24 opacity-20 mt-2"></div>
          </div>

          {/* Pagination */}
          <div className="absolute bottom-0 items-center hidden mt-auto ml-auto text-white right-8 md:flex md:flex-col">
            {/* Hero - Diamond 1 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(homeRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                  visibleSection === "home"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${
                    visibleSection === "home"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                  }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${
                    visibleSection === "home"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                  }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* About - Diamond 2 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(aboutRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                  visibleSection === "about"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${
                    visibleSection === "about"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                  }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${
                    visibleSection === "about"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                  }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* Skills - Diamond 3 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(skillsRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                  visibleSection === "skills"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${
                    visibleSection === "skills"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                  }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${
                    visibleSection === "skills"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                  }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* My Work - Diamond 4 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(myWorkRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                  visibleSection === "my-work"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${
                    visibleSection === "my-work"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                  }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${
                    visibleSection === "my-work"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                  }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* Blog - Diamond 5 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(blogRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                  visibleSection === "blog"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${
                    visibleSection === "blog"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                  }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${
                    visibleSection === "blog"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                  }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* Contact - Diamond 6 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${
                  visibleSection === "contact"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${
                    visibleSection === "contact"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                  }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${
                    visibleSection === "contact"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                  }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>

            {/* Line */}
            <div className="w-0.5 bg-white h-24 opacity-20 mt-2 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
