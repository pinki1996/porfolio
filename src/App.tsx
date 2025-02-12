import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Server,
  Globe,
  Cpu,
  Download,
  Terminal,
  ChevronRight,
  Copy,
  Check,
  Menu, X
} from "lucide-react";

const personalData = {
  name: "Pinki Saraswat",
  role: "Full Stack Developer || Frontend Developer || Backend Developer",
  experience: "2+ years",
  location: "India",
  education: {
    degree: "Master of Computer Applications",
    university: "Indira Gandhi National Open University",
    year: 2020,
  },
  languages: ["English", "Hindi"],
  interests: ["Problem Solving", "Drawing", "Sketching"],
  skills: {
    frontend: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "php", "Express", "Laravel"],
    database: ["MongoDB", "MySQL"],
    devops: ["AWS", "CI/CD", "cPanlen"],
  },
};

const technologies = [
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      {
        name: "React.js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="#00D8FF"
                d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
              />
              <path
                stroke="#00D8FF"
                stroke-width="8.911"
                d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
                clip-rule="evenodd"
              />
              <path
                stroke="#00D8FF"
                stroke-width="8.911"
                d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
                clip-rule="evenodd"
              />
              <path
                stroke="#00D8FF"
                stroke-width="8.911"
                d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                clip-rule="evenodd"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#F0DB4F" rx="60" />
              <path
                fill="#323330"
                d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="url(#skillIconsTailwindcssDark0)"
                fill-rule="evenodd"
                d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
                clip-rule="evenodd"
              />
              <defs>
                <linearGradient
                  id="skillIconsTailwindcssDark0"
                  x1="86.5"
                  x2="163.5"
                  y1="74"
                  y2="185.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#32B1C1" />
                  <stop offset="1" stop-color="#14C6B7" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#563D7C" rx="60" />
              <path
                fill="url(#bootstrapGradient)"
                d="M105 45h46c35 0 57 20 57 50 0 22-12 39-32 45 25 5 39 20 39 45 0 32-25 55-63 55h-59V45zm38 77h10c12 0 20-8 20-19 0-12-8-19-20-19h-10v38zm0 64h12c15 0 24-8 24-20s-9-20-24-20h-12v40z"
              />
              <defs>
                <linearGradient
                  id="bootstrapGradient"
                  x1="86.5"
                  x2="163.5"
                  y1="74"
                  y2="185.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A17EC2" />
                  <stop offset="1" stop-color="#7952B3" />
                </linearGradient>
              </defs>
            </g>
          </svg>


        ),
      },
      {
        name: "TypeScript",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#007ACC" rx="60" />
              <path
                fill="#fff"
                d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
              />
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      {
        name: "Node.js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="#81CD39"
                d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.56 2.56 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.35 2.35 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.298 1.646c3.59-1.288 6.107-4.953 6.039-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.182-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728"
              />
              <path
                fill="#81CD39"
                d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.686-2.673c-4.577.242-9.499.639-13.377 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.998 3.856c12.949 3.387 26.671 3.049 39.373 7.506c5.259 1.817 10.403 5.35 12.203 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.255-.09 2.184.994 2.249 2.176c.578 3.791 2.003 7.771 5.31 10.018c6.38 4.117 14.387 3.835 21.693 3.95c6.053-.268 12.848-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"
              />
            </g>
          </svg>
        ),
      },

      {
        name: "Express",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="#fff"
                d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "PHP",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="#fff"
                d="M49.158 100.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14H34zM61.56 112.33l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.271.106-2.438.106h-2.226zM116.186 80h14.628l-4.134 20.246h13.144q10.811.213 16.112 4.452q5.406 4.24 3.18 16.112l-7.102 35.298h-14.84l6.784-33.708q1.059-5.3-.636-7.526t-7.314-2.226l-11.766-.106l-8.692 43.566h-14.628zm58.638 20.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14h-14.734zm12.402 12.084l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.272.106-2.438.106h-2.226z"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "Laravel",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="none"
                stroke="#FF2D20"
                stroke-width="12"
                d="M38 86l38-22 38 22-38 22zm76 0l38-22 38 22-38 22zm-38 22l38-22v44l-38 22zm38 22l38-22v44l-38 22zM38 86v44l38 22v-44zm76-22l38-22v44l-38 22zm38 66l38-22v44l-38 22z"
              />
            </g>
          </svg>


        ),
      },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      {
        name: "MongoDB",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#023430" rx="60" />
              <path
                fill="#10AA50"
                d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
              />
              <path
                fill="#B8C4C2"
                d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
              />
              <path
                fill="#12924F"
                d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "MySQL",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <g clip-path="url(#skillIconsMysqlDark0)">
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M203.801 178.21c-9.79-.272-17.385.731-23.75 3.409c-1.833.736-4.774.736-5.016 3.043c.98.968 1.098 2.552 1.957 3.894c1.467 2.435 4.041 5.715 6.365 7.417l7.834 5.598c4.774 2.917 10.16 4.622 14.811 7.542c2.694 1.704 5.386 3.894 8.08 5.721c1.372.973 2.203 2.558 3.918 3.163v-.368c-.856-1.091-1.103-2.672-1.956-3.894l-3.677-3.526c-3.547-4.744-7.957-8.884-12.731-12.287c-3.918-2.677-12.484-6.326-14.076-10.825l-.241-.273c2.689-.272 5.872-1.219 8.445-1.949c4.165-1.091 7.957-.851 12.238-1.945l5.88-1.704v-1.091c-2.204-2.189-3.795-5.11-6.119-7.176c-6.242-5.353-13.102-10.586-20.203-14.965c-3.794-2.432-8.692-4.017-12.731-6.081c-1.473-.731-3.918-1.096-4.774-2.312c-2.209-2.672-3.43-6.204-5.021-9.369l-10.037-21.168c-2.203-4.745-3.553-9.49-6.242-13.869c-12.611-20.683-26.324-33.212-47.38-45.502c-4.527-2.555-9.913-3.654-15.64-4.99l-9.18-.49c-1.962-.851-3.919-3.164-5.633-4.26c-6.978-4.38-24.974-13.868-30.12-1.363c-3.305 7.907 4.899 15.692 7.684 19.709c2.085 2.798 4.774 5.96 6.247 9.124c.823 2.067 1.098 4.259 1.957 6.449c1.956 5.352 3.794 11.316 6.365 16.306c1.372 2.555 2.813 5.235 4.527 7.545c.98 1.363 2.695 1.947 3.06 4.136c-1.715 2.435-1.833 6.081-2.813 9.127c-4.409 13.748-2.694 30.78 3.548 40.902c1.962 3.04 6.585 9.734 12.858 7.177c5.509-2.19 4.28-9.124 5.871-15.208c.37-1.458.124-2.432.856-3.408v.273l5.021 10.097c3.795 5.961 10.408 12.167 15.914 16.306c2.936 2.19 5.263 5.964 8.934 7.3v-.368h-.241c-.736-1.091-1.839-1.582-2.818-2.433c-2.203-2.189-4.651-4.867-6.366-7.299c-5.139-6.812-9.666-14.357-13.708-22.142c-1.961-3.771-3.676-7.908-5.262-11.679c-.741-1.461-.741-3.654-1.962-4.379c-1.839 2.672-4.527 4.99-5.88 8.273c-2.327 5.23-2.568 11.679-3.424 18.371c-.494.122-.275 0-.494.272c-3.913-.97-5.263-4.99-6.73-8.393c-3.672-8.638-4.287-22.507-1.104-32.484c.856-2.555 4.533-10.585 3.065-13.018c-.74-2.312-3.183-3.648-4.533-5.475c-1.591-2.312-3.3-5.23-4.403-7.785c-2.936-6.817-4.404-14.357-7.59-21.17c-1.473-3.164-4.041-6.45-6.124-9.367c-2.327-3.286-4.892-5.599-6.73-9.49c-.612-1.363-1.468-3.528-.489-4.99c.242-.973.735-1.363 1.71-1.581c1.59-1.364 6.124.365 7.715 1.09c4.527 1.827 8.322 3.529 12.117 6.081c1.715 1.216 3.553 3.529 5.756 4.14h2.574c3.918.85 8.322.272 11.99 1.363c6.49 2.072 12.364 5.11 17.632 8.398c16.035 10.098 29.26 24.454 38.193 41.611c1.468 2.798 2.08 5.353 3.43 8.273c2.574 5.964 5.757 12.045 8.322 17.888c2.574 5.718 5.021 11.562 8.693 16.306c1.838 2.555 9.18 3.891 12.484 5.23c2.45 1.091 6.242 2.073 8.451 3.409c4.159 2.555 8.322 5.475 12.237 8.273c1.956 1.456 8.081 4.499 8.445 6.926zM78.958 72.487a19.6 19.6 0 0 0-5.015.608v.273h.241c.98 1.947 2.695 3.286 3.918 4.99l2.818 5.84l.242-.272c1.714-1.216 2.573-3.163 2.573-6.08c-.735-.851-.856-1.705-1.468-2.556c-.735-1.216-2.326-1.827-3.309-2.797z"
                  clip-rule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="skillIconsMysqlDark0">
                  <path fill="#fff" d="M38 38h180v180H38z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    name: "DevOps",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      {
        name: "AWS",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="#fff"
                d="M84.745 111.961c0 2.434.263 4.407.723 5.855a35 35 0 0 0 2.106 4.737c.329.526.46 1.052.46 1.513c0 .658-.395 1.316-1.25 1.973l-4.145 2.764c-.592.394-1.184.592-1.71.592c-.658 0-1.316-.329-1.974-.921a20.4 20.4 0 0 1-2.368-3.092a51 51 0 0 1-2.04-3.882q-7.697 9.08-19.342 9.079c-5.526 0-9.934-1.579-13.158-4.737c-3.223-3.158-4.868-7.368-4.868-12.631c0-5.593 1.974-10.132 5.987-13.553s9.342-5.132 16.118-5.132c2.237 0 4.54.198 6.974.527s4.934.855 7.566 1.447v-4.803c0-5-1.053-8.487-3.092-10.526c-2.106-2.04-5.658-3.026-10.724-3.026c-2.303 0-4.671.263-7.105.855s-4.803 1.316-7.106 2.237a19 19 0 0 1-2.302.855c-.46.132-.79.198-1.053.198c-.92 0-1.382-.658-1.382-2.04v-3.224c0-1.052.132-1.842.461-2.302s.921-.921 1.842-1.382q3.454-1.776 8.29-2.96c3.223-.856 6.644-1.25 10.263-1.25c7.829 0 13.552 1.776 17.237 5.328c3.618 3.553 5.46 8.948 5.46 16.185v21.316zm-26.71 10c2.17 0 4.407-.395 6.776-1.185c2.368-.789 4.473-2.237 6.25-4.21c1.052-1.25 1.842-2.632 2.236-4.211s.658-3.487.658-5.723v-2.764a55 55 0 0 0-6.052-1.118a50 50 0 0 0-6.185-.395c-4.408 0-7.631.856-9.802 2.632s-3.224 4.276-3.224 7.566c0 3.092.79 5.394 2.434 6.973c1.58 1.645 3.882 2.435 6.908 2.435m52.828 7.105c-1.184 0-1.974-.198-2.5-.658c-.526-.395-.987-1.316-1.381-2.566l-15.46-50.855c-.396-1.316-.593-2.171-.593-2.632c0-1.052.526-1.645 1.579-1.645h6.447c1.25 0 2.106.198 2.566.658c.526.395.921 1.316 1.316 2.566l11.052 43.553l10.264-43.553c.329-1.316.723-2.17 1.25-2.566c.526-.394 1.447-.657 2.631-.657h5.263c1.25 0 2.106.197 2.632.657c.526.395.987 1.316 1.25 2.566l10.395 44.079l11.381-44.079c.395-1.316.856-2.17 1.316-2.566c.526-.394 1.382-.657 2.566-.657h6.118c1.053 0 1.645.526 1.645 1.644c0 .33-.066.658-.132 1.053c-.065.395-.197.92-.46 1.645l-15.855 50.855q-.593 1.974-1.382 2.566c-.526.394-1.382.658-2.5.658h-5.658c-1.25 0-2.105-.198-2.631-.658c-.527-.461-.987-1.316-1.25-2.632l-10.198-42.434l-10.131 42.368c-.329 1.316-.724 2.171-1.25 2.632c-.527.46-1.448.658-2.632.658zm84.54 1.776c-3.421 0-6.842-.395-10.132-1.184c-3.289-.79-5.855-1.645-7.566-2.632c-1.052-.592-1.776-1.25-2.039-1.842a4.65 4.65 0 0 1-.395-1.842v-3.355c0-1.382.526-2.04 1.513-2.04q.593 0 1.184.198c.395.131.987.394 1.645.658a35.8 35.8 0 0 0 7.237 2.302a39.5 39.5 0 0 0 7.829.79c4.145 0 7.368-.724 9.605-2.171c2.237-1.448 3.421-3.553 3.421-6.25c0-1.842-.592-3.356-1.776-4.606s-3.421-2.368-6.645-3.421l-9.539-2.96c-4.803-1.513-8.356-3.75-10.527-6.71c-2.171-2.895-3.289-6.12-3.289-9.54q0-4.144 1.776-7.303c1.184-2.105 2.763-3.947 4.737-5.394c1.974-1.514 4.211-2.632 6.842-3.422c2.632-.79 5.395-1.118 8.29-1.118c1.447 0 2.96.066 4.408.263c1.513.197 2.894.46 4.276.724c1.316.329 2.566.658 3.75 1.053q1.776.591 2.763 1.184c.921.526 1.579 1.052 1.974 1.644q.592.79.592 2.172v3.092c0 1.381-.526 2.105-1.513 2.105c-.527 0-1.382-.263-2.5-.79q-5.625-2.565-12.632-2.565c-3.75 0-6.71.592-8.75 1.842s-3.092 3.158-3.092 5.855c0 1.842.658 3.421 1.974 4.671s3.75 2.5 7.237 3.618l9.342 2.96c4.736 1.514 8.158 3.619 10.197 6.317s3.026 5.789 3.026 9.21c0 2.829-.592 5.395-1.71 7.632c-1.184 2.237-2.763 4.21-4.803 5.789c-2.039 1.645-4.474 2.829-7.302 3.685c-2.961.921-6.053 1.381-9.408 1.381"
              />
              <path
                fill="#F90"
                fill-rule="evenodd"
                d="M207.837 162.816c-21.645 15.987-53.092 24.474-80.132 24.474c-37.894 0-72.04-14.014-97.829-37.303c-2.04-1.842-.197-4.342 2.237-2.895c27.895 16.184 62.303 25.987 97.895 25.987c24.013 0 50.395-5 74.671-15.263c3.618-1.645 6.71 2.368 3.158 5"
                clip-rule="evenodd"
              />
              <path
                fill="#F90"
                fill-rule="evenodd"
                d="M216.85 152.553c-2.763-3.553-18.289-1.711-25.329-.856c-2.105.264-2.434-1.579-.526-2.96c12.368-8.684 32.697-6.184 35.066-3.29c2.368 2.961-.658 23.29-12.237 33.027c-1.777 1.513-3.487.723-2.698-1.25c2.632-6.513 8.487-21.185 5.724-24.671"
                clip-rule="evenodd"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "CI/CD",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.6 6.62C21.58 6.62 24 9 24 12c0 2.96-2.42 5.37-5.4 5.37c-1.45 0-2.8-.56-3.82-1.57L12 13.34l-2.83 2.51c-.97.97-2.33 1.53-3.77 1.53C2.42 17.38 0 14.96 0 12s2.42-5.38 5.4-5.38c1.44 0 2.8.56 3.82 1.58L12 10.66l2.83-2.51c.97-.97 2.33-1.53 3.77-1.53M7.8 14.39L10.5 12L7.84 9.65c-.68-.68-1.53-1.03-2.44-1.03C3.53 8.62 2 10.13 2 12s1.53 3.38 3.4 3.38c.91 0 1.76-.35 2.4-.99m8.4-4.78L13.5 12l2.66 2.35c.68.68 1.54 1.03 2.44 1.03c1.87 0 3.4-1.51 3.4-3.38s-1.53-3.38-3.4-3.38c-.91 0-1.76.35-2.4.99"
            />
          </svg>
        ),
      },
      {
        name: "cPanel",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 407.66 240"
            width="32"
            height="32"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  fill="#ff6c2c"
                  d="M89.69,59.1h67.8L147,99.3a25.38,25.38,0,0,1-9,13.5,24.32,24.32,0,0,1-15.3,5.1H91.19a30.53,30.53,0,0,0-19,6.3,33,33,0,0,0-11.55,17.1,31.91,31.91,0,0,0-.45,15.3A33.1,33.1,0,0,0,66,169.35a30.29,30.29,0,0,0,10.8,8.85,31.74,31.74,0,0,0,14.4,3.3h19.2a10.8,10.8,0,0,1,8.85,4.35,10.4,10.4,0,0,1,2,9.75l-12,44.4h-21a84.77,84.77,0,0,1-39.75-9.45A89.78,89.78,0,0,1,18.29,205.5,88.4,88.4,0,0,1,1.94,170,87.51,87.51,0,0,1,3,129l1.2-4.5A88.69,88.69,0,0,1,35.84,77.25a89.91,89.91,0,0,1,25-13.35A87,87,0,0,1,89.69,59.1Z"
                />
                <path
                  fill="#ff6c2c"
                  d="M123.89,240,183,18.6a25.38,25.38,0,0,1,9-13.5A24.28,24.28,0,0,1,207.29,0H270a84.8,84.8,0,0,1,39.75,9.45,89.21,89.21,0,0,1,46.65,60.6,83.8,83.8,0,0,1-1.2,41l-1.2,4.5a89.88,89.88,0,0,1-12,26.55,87.65,87.65,0,0,1-73.2,39.15h-54.3l10.8-40.5a25.38,25.38,0,0,1,9-13.2,24.32,24.32,0,0,1,15.3-5.1H267a31.56,31.56,0,0,0,30.6-23.7A29.5,29.5,0,0,0,298,84a33.1,33.1,0,0,0-5.85-12.75,31.85,31.85,0,0,0-10.8-9A30.61,30.61,0,0,0,267,58.8h-33.6l-43.8,162.9a25.38,25.38,0,0,1-9,13.2,23.88,23.88,0,0,1-15,5.1Z"
                />
                <path
                  fill="#ff6c2c"
                  d="M361.18,32.31h-3.71V3.71h-10.1V.42h23.91V3.71h-10.1Z"
                />
                <path
                  fill="#ff6c2c"
                  d="M390.19,32.31,379.37,4h-.17q.3,3.36.3,8V32.31h-3.42V.42h5.58l10.1,26.3h.18L402.12.42h5.54V32.31H404V11.76c0-2.36.11-4.91.31-7.68h-.17L393.18,32.31Z"
                />
              </g>
            </g>
          </svg>
        ),
      },
    ],
  },
];

const projects = [
  {
    title: "GTS-Catering",
    description:
      "Full-stack e-commerce platform with real-time inventory management for catering service providers.",
    image:
      "https://raw.githubusercontent.com/pinki1996/porfolio/8bbce2d1169aef69fb450ba93d1bb5bf4a81e60d/src/Assets/gts.jpg",
    tech: ["React", "PHP", "MySQL"],
    link: "https://gtscatering.com/",
  },
  {
    title: "ATTICA INTERIO",
    description:
      "Full-stack e-commerce platform with real-time inventory management for home textiles, handcrafted décor accents, and corporate gifts.",
    image:
      "https://github.com/pinki1996/porfolio/blob/8bbce2d1169aef69fb450ba93d1bb5bf4a81e60d/src/Assets/attica.jpg?raw=true",
    tech: ["React", "PHP", "MySQL"],
    link: "https://atticainterio.com/",
  },
  {
    title: "Cron-Media",
    description:
      "Full-stack e-commerce platform with real-time inventory management for media products",
    image:
      "https://github.com/pinki1996/porfolio/blob/8bbce2d1169aef69fb450ba93d1bb5bf4a81e60d/src/Assets/cronmedia.png?raw=true",
    tech: ["React", "PHP", "MySQL"],
    link: "https://cron-media.com/",
  },
  {
    title: "Cypera",
    description:
      "Website Template with React.js and Python backend for a digital media company",
    image:
      "https://github.com/pinki1996/porfolio/blob/8bbce2d1169aef69fb450ba93d1bb5bf4a81e60d/src/Assets/cypera.png?raw=true",
    tech: ["React.js", "Python", "MySQL"],
    link: "https://cyperadigital.com/",
  },
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}

function ConsoleCard() {
  const [copied, setCopied] = useState(false);

  // Function to syntax highlight JSON
  const formatJSON = (obj: unknown) => {
    return JSON.stringify(obj, null, 2)
      .replace(/"([^"]+)":/g, '<span class="text-purple-400">"$1"</span>:') // Keys
      .replace(/: "([^"]+)"/g, ': <span class="text-yellow-300">"$1"</span>') // String values
      .replace(/: (\d+)/g, ': <span class="text-blue-400">$1</span>') // Number values
      .replace(/: \[([\s\S]*?)\]/g, ': <span class="text-green-400">[$1]</span>') // Arrays
      .replace(/[{}[\]]/g, '<span class="text-gray-500">$&</span>'); // Braces and brackets
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(personalData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto border border-gray-700"
    >
      <div className="flex items-center justify-between bg-gray-900 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center ml-4">
            <Terminal className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm font-mono text-gray-400">developer.json</span>
          </div>
        </div>
        <motion.button
          onClick={copyToClipboard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-gray-700"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </motion.button>
      </div>
      <div className="p-6 text-sm font-mono overflow-x-auto bg-gray-900/50 h-96">
        <pre
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatJSON(personalData) }}
        />
      </div>
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-2 rounded-md shadow-lg"
        >
          Copied to clipboard!
        </motion.div>
      )}
    </motion.div>
  );
}

function ResumeDownload() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.a
        href="https://raw.githubusercontent.com/pinki1996/porfolio/8bbce2d1169aef69fb450ba93d1bb5bf4a81e60d/src/Assets/resume.pdf" 
        download="resume.pdf"
        className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 bg-blue-500"
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 1, borderRadius: "0%" }}
              exit={{ scale: 0, borderRadius: "100%" }}
            />
          )}
        </AnimatePresence>
        <Download className="w-5 h-5 relative z-10" />
        <span className="relative z-10">Download Resume</span>
      </motion.a>
    </motion.div>
  );
}



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Technologies" },
    { id: "projects", label: "Projects" },
    // { id: "games", label: "Games" },
  ];

  return (
    <nav className="bg-gray-900 sticky w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button></a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a href={`#${item.id}`} key={item.id}>
                    <button
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded hover:bg-gray-800"
                    >
                      {item.label}
                    </button>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="flex items-center justify-center flex-col lg:flex-row">
        {/* Hero Section */}
        <Section
          id="hero"
          className="container mx-auto px-4 py-20 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 rounded-full overflow-hidden mb-8"
          >
            <img
               src="https://raw.githubusercontent.com/pinki1996/porfolio/main/src/Assets/Pinki.jpg"
                alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">Pinki Saraswat</h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer || Frontend Developer || Backend Developer
            </p>
            <div className="flex space-x-4 justify-center mb-12">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/pinki1996"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/pinki-saraswat-976614138/"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:pinkisaraswat176@gmail.com"

                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <ResumeDownload />
        </Section>

        {/* Console Card Section */}
        <Section id="about" className="container mx-auto px-4 py-12 ">
          <h2 className="text-3xl font-bold text-center mb-12 lg:hidden">
            About Me
          </h2>
          <ConsoleCard />
        </Section>
      </div>

      {/* Technologies Section */}
      <Section id="technologies" className="container mx-auto px-4 pt-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {tech.icon}
                <h3 className="text-xl font-semibold ml-2">{tech.name}</h3>
              </div>
              <ul className="space-y-2">
                {tech.skills.map((skill) => (
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                    <div className="w-full border border-gray-700 rounded-md px-4 py-2 flex flex-row items-center justify-between gap-2">
                      {skill.icon} {skill.name}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Games Section */}
      {/* <Section id="games" className="container mx-auto px-4 pt-20 ">
        <h2 className="text-3xl font-bold text-center mb-12">Fun & Games</h2>
        <div className="max-w-2xl mx-auto hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SnakeGame />
          </motion.div>
        </div>
        <div className="max-w-2xl mx-auto md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p> To play the snake game, please switch to a larger screen. 😉</p>
          </motion.div>
        </div>
      </Section> */}

      {/* Projects Section */}
      <Section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Pinki Saraswat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
