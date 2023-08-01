import { Logo } from "./components/logo";

export const metadata = {
	title: "Login"
};

export default function Login(){
	return (
		<div className="w-full h-screen flex flex-row items-center">
			<section className="w-1/2 h-screen bg-[#F0F7DA] px-24 py-20">
				<Logo />
			</section>
			<section className="w-1/2 h-screen bg-login-background bg-cover bg-no-repeat">

			</section>
		</div>
	);
}