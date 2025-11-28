"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@node_modules/sonner/dist/index.mjs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Checkbox } from "@components/ui/checkbox";
import Link from "@node_modules/next/link";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
  keep_logged_in: z.boolean(),
});

const Sign_In_Form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      keep_logged_in: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast.success("Login Successful.");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 max-w-[410px] inter-font"
      >
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[#2B3674] text-4xl font-bold">Sign In</h1>
          <p className="text-cyanText">
            Enter your email and password to sign in!
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-cyanText">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="email@domain.com"
                  {...field}
                  className="outline-0 text-base placeholder:text-[#767676] w-full lg:min-w-[410px] py-[18px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Password <span className="text-cyanText">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="●●●●●●●●●●●●●●●"
                  {...field}
                  className="outline-0 text-base placeholder:text-[#767676] w-full lg:min-w-[410px] py-[18px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="keep_logged_in"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="keep_logged_in"
                    />
                  </FormControl>
                  <FormLabel className="text-sm">Keep me logged in</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href={"/"} className="text-sm font-medium text-cyanText">
            Forgot Password?
          </Link>
        </div>
        <Button type="submit" className="h-[54px] font-semibold">
          Sign In
        </Button>
        <p className="text-sm font-medium">
          Don’t have an account?{" "}
          <Link href={"/"} className="text-sm font-semibold text-cyanText">
            Create an Account
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default Sign_In_Form;
