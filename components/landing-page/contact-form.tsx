"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { HiEnvelope, HiPhone, HiUser } from "@node_modules/react-icons/hi2";
import { toast } from "@node_modules/sonner/dist/index.mjs";

const formSchema = z.object({
  full_name: z
    .string()
    .min(2, { message: "Invalid Name" })
    .max(50, { message: "Invalid Name" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Invalid phone" })
    .max(10, { message: "Invalid phone" }),
});
const Contact_Form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast.success("Message sent successfully.");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1110px] inter-font"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "max-h-[54px] border border-[#D2D2D2] rounded-md flex items-center gap-x-2 px-4 py-3.5",
                    "focus-within:border-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
                  )}
                >
                  <HiUser size={24} />
                  <Input
                    placeholder="Username"
                    {...field}
                    className="p-0 outline-0 rounded-none border-0 shadow-none text-base placeholder:text-[#767676]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "max-h-[54px] border border-[#D2D2D2] rounded-md flex items-center gap-x-2 px-4 py-3.5",
                    "focus-within:border-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
                  )}
                >
                  <HiEnvelope size={24} />
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="p-0 outline-0 rounded-none border-0 shadow-none text-base placeholder:text-[#767676]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "max-h-[54px] border border-[#D2D2D2] rounded-md flex items-center gap-x-2 px-4 py-3.5",
                    "focus-within:border-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
                  )}
                >
                  <HiPhone size={24} />
                  <Input
                    placeholder="Phone"
                    {...field}
                    className="p-0 outline-0 rounded-none border-0 shadow-none text-base placeholder:text-[#767676]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="col-span-full lg:col-span-1 h-[54px] urbanist-font font-semibold"
        >
          Get Started
        </Button>
      </form>
    </Form>
  );
};

export default Contact_Form;
