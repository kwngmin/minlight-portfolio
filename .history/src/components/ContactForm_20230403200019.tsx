"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./banner";
import TextareaAutosize from "react-textarea-autosize";
import { BsSendCheck } from "react-icons/bs";

type Form = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    setBanner({ message: "성공했어", state: "success" });
    // setTimeout(() => {
    //   setBanner(null);
    // }, 5000);
    // setForm({
    //   from: "",
    //   subject: "",
    //   message: "",
    // });
  };
  const INPUT_LABEL = "font-medium text-black/40 mb-1";
  const INPUT_BOX = "mb-4 resize-none px-3 py-3 border rounded bg-zinc-50";
  return (
    <section className="w-full">
      {/* {banner && <Banner banner={banner} />}
       */}
      <div className="bg-green-50 px-4 py-8 mb-6 rounded flex flex-col items-center text-emerald-800">
        <div>
          <BsSendCheck
            size={80}
            className="mb-4 text-black bg-white rounded-full"
          />
        </div>
        <span>{`이메일을 발송했습니다`}</span>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col border p-8 w-full rounded-lg"
      >
        <label htmlFor="from" className={INPUT_LABEL}>
          Your Email
        </label>
        <input
          type="email"
          id="from"
          required
          autoFocus
          name="from"
          value={form.from}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <label htmlFor="subject" className={INPUT_LABEL}>
          Subject
        </label>
        <input
          type="string"
          id="subject"
          required
          name="subject"
          value={form.subject}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <label htmlFor="message" className={INPUT_LABEL}>
          Message
        </label>
        <TextareaAutosize
          rows={6}
          minRows={6}
          id="message"
          required
          name="message"
          value={form.message}
          onChange={onChange}
          className={INPUT_BOX}
        />
        <button className="bg-zinc-100 hover:bg-zinc-300 rounded-lg h-12">
          Send Email
        </button>
      </form>
    </section>
  );
}
