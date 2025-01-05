import { toast } from "@/hooks/use-toast";
import { Field, Input, Label, Textarea } from "@headlessui/react";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const [loading, setLoading] = useState(false);
  if (formState?.errors?.email?.message) {
    toast({
      title: "Error",
      description: `${formState?.errors?.email?.message}`,
    });
  }
  const handleForm = (data) => {
    setLoading(true);
    const service_id = "prapoo_cd3hxdh";
    const user_id = "DSDJdnB6UWp20LhN9";
    const template_id = "template_0aig95o";
    const template_params = {
      from_name: data?.name,
      from_email: data?.email,
      to_email: "albart2022@SiGmail.com",
      message: data?.message,
    };
    emailjs
      .send(service_id, template_id, template_params, user_id)
      .then(() => {
        toast({
          title: "Success",
          description:
            "Got it! Your message is on its way. I’ll reply shortly!",
        });
        setLoading(false);
        reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Oops! Something went wrong. Please try again later.",
        });
        setLoading(false);
        reset();
      });
  };
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 5 }}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.6, // Animation duration in seconds
        ease: "easeInOut", // Easing function
      }}
      className="max-w-3xl mx-auto px-6 pb-16 text-white relative"
    >
      <div className="text-center">
        <div className="w-fit mx-auto rounded-lg text-black bg-white px-3 py-1 mb-3 text-sm">
          Contact
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
          Get in Touch
        </h1>
        <p className="text-[#a3a3a3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Want to chat? Just drop me a message here with a direct question.
          <br /> I'll respond whenever I can.
        </p>
      </div>
      <div className="mt-10 md:w-4/5 mx-auto">
        <form
          className={`space-y-4 ${loading && "opacity-50"}`}
          onSubmit={handleSubmit(handleForm)}
        >
          {loading && (
            <div className="flex items-center justify-center absolute inset-0">
              <div className="w-10 h-10 border-4 border-t-neutral-400 border-neutral-800 rounded-full animate-spin"></div>
            </div>
          )}
          <Field>
            <Label className="text-sm/6 font-medium text-white">Name</Label>
            <Input
              placeholder="Enter your name"
              {...register("name")}
              className={clsx(
                "mt-2 block w-full placeholder-white/10 rounded-lg border-none bg-white/5 py-2 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Email</Label>
            <Input
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className={clsx(
                "mt-2 block w-full placeholder-white/10 rounded-lg border-none bg-white/5 py-2 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Message</Label>
            <Textarea
              rows={4}
              placeholder="Write your message here"
              {...register("message", { required: true })}
              className={clsx(
                "mt-2 block w-full placeholder-white/10 rounded-lg border-none bg-white/5 py-2 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <button
            type="submit"
            disabled={loading === true}
            className="rounded-lg bg-white/5 py-2 px-4 text-sm text-white/80 hover:text-black hover:bg-white transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
