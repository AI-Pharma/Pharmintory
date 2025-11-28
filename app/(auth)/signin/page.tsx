import Sign_In_Form from "@components/signin/signin-form";
import Image from "@node_modules/next/image";

const Login_Page = () => {
  return (
    <main className="grid md:grid-cols-10 lg:grid-cols-11 gap-10 poppins-font py-10 px-4 md:px-[30px]">
      <div className="md:col-span-5 flex items-center justify-center">
        <Sign_In_Form />
      </div>
      <div className="md:col-span-5 lg:col-span-6 md:flex justify-center items-center hidden">
        <Image
          alt="Sign in frame"
          src={"/images/signin/signin.jpg"}
          width={1000}
          height={1000}
          quality={100}
          className="md:max-h-[410px] lg:max-h-[520px] h-full w-auto"
        />
      </div>
    </main>
  );
};

export default Login_Page;
