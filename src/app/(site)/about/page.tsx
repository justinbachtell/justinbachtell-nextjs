import * as React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="relative bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/about/alycia-justin.png"
            alt="Alycia and Justin"
            fill
            sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAAAAD/4QNDaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMiA3OS5kYmEzZGEzYjUsIDIwMjMvMTIvMTUtMTA6NDI6MzcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI1MUI1NTdBMTFGMjExRUY5NDk5RkMxNEJDRUQzNTQ3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI1MUI1NTc5MTFGMjExRUY5NDk5RkMxNEJDRUQzNTQ3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBMaWdodHJvb20gQ2xhc3NpYyAxMS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTU5MDMxMTUyMTFFRkE5NzFBQjc5QUExQjJFQzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ3NTU5MDQxMTUyMTFFRkE5NzFBQjc5QUExQjJFQzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAbGhopHSlBJiZBQi8vL0JHPz4+P0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHAR0pKTQmND8oKD9HPzU/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAUAB4DASIAAhEBAxEB/8QAcAAAAgIDAAAAAAAAAAAAAAAAAAMFBgECBAEBAQEAAAAAAAAAAAAAAAAAAAIBEAABAgMEBwkAAAAAAAAAAAABAAIREgMhMVFhQZHBIjITBPCB4fFCYtIzBREBAQADAQAAAAAAAAAAAAAAAAFBYYEC/9oADAMBAAIRAxEAPwCWodFRogQEXYm9dEKdPeIAjpWoMjYlKrkvIaFFs8hPUdQBBjN2a7M4Qh5pLa9BzS8P4TaIW3y6o6Vj9MNoUw+94hLkY261WW1CHE6T8gdibyqrg/mTNm+v1dsEx19uPu7rsvBCFgh/0+fE8rgl3tsYqvWS5oQrjL1//9k="
            style={{
              objectPosition: "top",
              objectFit: "cover",
            }}
          />
          <div
            className="absolute inset-0 bg-gray-500"
            style={{ mixBlendMode: "multiply" }}
            aria-hidden="true"
          />
        </div>
        <div className="relative flex flex-col justify-center items-start mx-auto my-0 max-w-7xl mx-auto py-24 px-4 sm:py-[14rem] md:h-full md:py-[14rem] lg:h-screen sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="mt-6 max-w-[44rem] text-xl text-gray-200">
            Welcome to my developer haven&mdash;a place where code meets purpose
            and where pixels transform into meaningful solutions.
          </p>
        </div>
      </div>
      <div className="container flex flex-col py-12">
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <p>
              Hello there! My name is Justin Bachtell, and I&apos;m a Software
              Developer. This site serves as a portal to showcase my portfolio,
              update you on projects I&apos;m passionately working on, and offer
              an easy way to get in touch with me.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex text-2xl">My Background & Skills</h2>
            <p className="text-base">
              I am a proud Wisconsinite, living in the southeastern part of the
              state with my beautiful wife, Alycia, and our three adorable cats,
              Emmy, plus her two sons, Calvin and Leo.
            </p>
            <Image
              src={"/images/about/elc.jpg"}
              height={800}
              width={600}
              sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              alt={"Image of Emmy, Leo, and Calvin"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
            <p className="text-base">
              In terms of education, I&apos;m currently a Master&apos;s student
              in Cyber Security at Liberty University. Professionally, I&apos;ve
              had the privilege of wearing multiple hats, but they all fit under
              one common theme: problem-solving.
            </p>
            <p className="text-base">
              At Liberty University, my role as a Software Developer involves a
              range of responsibilities. From leading the development of a new
              React-based WordPress Gutenberg theme to optimizing database
              queries for faster page loading—everyday is a learning journey.
              The Agile methodology powers my workflow, and my skillset includes
              JavaScript, TypeScript, Python, and different React.js libraries.
              Before diving into the tech world, I served as a Deputy Sheriff in
              southeastern Wisconsin. As a Deputy Sheriff, I had a unique role
              as an internationally certified Drug Recognition Expert (DRE), and
              recognized as one of the top-10 DREs in Wisconsin. This experience
              not only instilled in me a strong sense of community service and
              duty but also provided a unique perspective that I bring into my
              current role.
            </p>
            <div className="flex flex-col w-full max-w-[500px] mx-auto">
              <Image
                src={"/images/about/justin-law-enforcement.jpg"}
                height={456}
                width={608}
                sizes={
                  "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }
                alt={
                  "Justin receiving a meritorious service award in law enforcement"
                }
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex text-2xl">What Sets Me Apart</h2>
            <p className="text-base">
              You might find it unusual, but my earlier career in law
              enforcement deeply influences my present work in tech. One example
              is by striving to find ways to contribute to criminal justice and
              to bring aid to victims across the nation. In the era of modern
              technology, the need for advanced tools to track down offenders
              and protect innocent victims is imperative. This is where I wish
              to make my mark. My ambition lies in merging my tech skills with
              my law enforcement background to develop solutions that can really
              make a difference in the criminal justice and public safety
              system.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex text-2xl">My Mission</h2>
            <p className="text-base">
              So, what&apos;s the endgame? It&apos;s about making an impactful
              difference. Whether it&apos;s automating a laborious task,
              refining an application for enhanced user experience, or
              contributing to a cause that&apos;s bigger than myself—I find
              fulfillment in creating change. When I&apos;m not coding or
              brainstorming new ideas, you&apos;ll find me reading, working out,
              woodworking, or adventuring on hikes or biking trails with my
              wife.
            </p>
            <p className="text-base">
              Feel free to browse through my portfolio, read up on my latest
              projects, or send me a message. I&apos;m glad you&apos;re here,
              and I can&apos;t wait to share my journey with you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
