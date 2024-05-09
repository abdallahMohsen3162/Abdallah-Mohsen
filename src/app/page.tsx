

// import Image from 'next/image';
// import myimg from "../../public/64645620_869024723458308_1197866069616754688_n.jpg"
import Landing from "./components/landing"
// import Projects from "./components/Projects"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Projects_describtion from "./components/projects_describtion"
export default function Home() {
  return (
    <main>
        < Landing />
{/*         < Projects />
        <br /> <br />
        <br /> <br /> <br /><br /> */}
        < Skills />
        <br /><br /><br /><br />
        <br /><br />
        < Projects_describtion />
        <br /><br /><br /><br />
        <br /><br />
      < Contact />
      < Footer />


    </main>
  )
}
