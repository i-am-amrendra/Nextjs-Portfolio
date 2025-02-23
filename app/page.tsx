"use client";

import Image from "next/image";
import pp from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHashnode, FaXTwitter } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import image1 from '../public/1.png'
import image2 from '../public/2.jpg'
import image3 from '../public/3.png'
import image4 from '../public/4.png'
import image5 from '../public/5.png'
import image6 from '../public/6.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-color duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={pp}
              alt="profile picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Amrendra Singh
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Software Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-400">Remote, India</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Scalable Solutions for Clients
              </h2>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                <span className="text-black dark:text-white">
                  Full Stack Web Developer and Programmer
                </span>{" "}
                with a passion for creating dynamic and responsive web apps.
                Proficient in{" "}
                <span className="text-black dark:text-white">
                  C++, Python, Javascript, ReactJS, Tailwind CSS, MongoDB, Redux, Git, AWS,
                </span>{" "}
                I&apos;m also diving into 
                <span className="text-black dark:text-white"> Django, flask</span> to broaden my backend skills.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Always eager to explore new technologies, I focus on delivery
                seamless user experience and optimizing performance. Beyond technical architecture, I&apos;m
                passionate about DevOps practices, open-source, Artificial
                Intelligence(AI) and building resilient systems that can scale
                effectively while maintaining high availability and performance. Let&apos;s build
                something amazing together! 
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover: scale-105">
                Resume
              </Button>

              <Link
                href="https://github.com/i-am-amrendra"
                className="text-grey-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/i-amrendra-singh/"
                className="text-grey-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              <Link
                href="https://x.com/_amrendrasingh"
                className="text-grey-600 dark:text-gray-400 hover: text-black dark: hover:text-white transition-colors"
                target="_blank"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>

              <Link
                href="https://hashnode.com/@amrendrasingh"
                className="text-grey-600 dark:text-gray-400 hover: text-black dark: hover:text-white transition-colors"
              >
                <FaHashnode className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>
          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">September 2024 - January 2025</p>
                <p className="font-medium">AI Trainer (Freelance)</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Outlier.ai</p>
              </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">

              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">July 2024 - October 2024</p>
                <p className="font-medium">Technical Content Intern</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">GeeksforGeeks</p>
              </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">June 2023 - July 2023</p>
                <p className="font-medium">Tech Intern</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">iDEX-DIO</p>
              </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of database applications using MongoDB services, implementing architecture that reduced operational costs by 40%, 
                Established CI/CD pipelines and automated deployment processes, resulting in 60% faster release cycles.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">June 2023 - July 2023</p>
                <p className="font-medium">Tech Intern</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">iDEX-DIO</p>
              </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">

              </p>
            </div>
          </motion.section>
          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
          >
           <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between"></div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">Nov 2020 - June 2024</p>
                <p className="font-medium">KIET Group of Institutions</p>
                <p className="text-gray-600 dark:text-gray-400">Computer Science and Information Technology</p>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-sm">
               CGPA: 8.4/10
              </p>
            </div>
          </motion.section>
          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
          >
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
          via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4">
                <Image src={image1} alt="Project 1" className="rounded-lg mb-4"/>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project 1</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Tailwind CSS</p>
                  </div>
                  <Button variant="ghost" size="icon">+</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4">
                <Image src={image2} alt="Project 1" className="rounded-lg mb-4"/>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project 2</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Tailwind CSS</p>
                  </div>
                  <Button variant="ghost" size="icon">+</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4">
                <Image src={image3} alt="Project 1" className="rounded-lg mb-4"/>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project 3</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Tailwind CSS</p>
                  </div>
                  <Button variant="ghost" size="icon">+</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4">
                <Image src={image4} alt="Project 1" className="rounded-lg mb-4"/>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project 4</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Tailwind CSS</p>
                  </div>
                  <Button variant="ghost" size="icon">+</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4">
                <Image src={image5} alt="Project 1" className="rounded-lg mb-4"/>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project 5</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Tailwind CSS</p>
                  </div>
                  <Button variant="ghost" size="icon">+</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4">
                <Image src={image6} alt="Project 1" className="rounded-lg mb-4"/>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project 6</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Tailwind CSS</p>
                  </div>
                  <Button variant="ghost" size="icon">+</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-gray-500">Made with ❤️ @ 2025 <Link href="">Amrendra Singh</Link></p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
