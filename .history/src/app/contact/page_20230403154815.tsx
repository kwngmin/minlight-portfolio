import ContactForm from "@/components/ContactForm";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
export default function ContactPage() {
  const LINKS = [
    { icon: <AiFillGithub />, url: "https://github.com/kwngmin" },
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EA%B9%80-52b83a25a/",
    },
  ];
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <a
        href="mailto:kwngmin.k@gmail.com"
        className="px-6 rounded-full bg-zinc-100 hover:bg-zinc-200 py-2"
      >
        kwngmin.k@gmail.com
      </a>
      <ul className="flex justify-center items-center gap-4">
        {LINKS.map(({ url, icon }, index) => (
          <a
            href={url}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}