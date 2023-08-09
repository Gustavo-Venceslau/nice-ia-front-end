import { Logo } from "./components/logo";
import { LoginForm } from "./loginForm";

import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
	weight:  "700",
	subsets: ['latin']
});

export const metadata = {
	title: "Login"
};

export default function Login(){
	return (
		<div className="w-full h-screen flex flex-row items-center">
			<section className="w-[45%] h-screen bg-[#F0F7DA] px-28 py-20 flex flex-col">
				<Logo />
				<LoginForm />
			</section>
			<section className="w-[55%] h-screen bg-login-background bg-cover bg-no-repeat">
				<div className="w-[55%] h-full bg-black opacity-40 absolute text-center text-6xl text-white pt-20">
					<h2 className={poppins.className}>Join our community!</h2>
					<h3 className="text-2xl text-white">Learn about anything you want with the biggest students community.</h3>
				</div>
			</section>
		</div>
	);
}