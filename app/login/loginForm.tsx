import { CheckBox } from "./components/util/checkbox";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
	weight:  "700",
	subsets: ['latin']
});

export function LoginForm(){
	return (
		<div className="w-full mt-24">
			<div className={poppins.className}>
				<h2 className="text-6xl text-[#393939]">Sign Into</h2>
				<h3 className="text-xl text-[#393939] my-3">Your Account</h3>
			</div>
			<form action="" className="mt-20">
				<input type="text" placeholder="✉️  email" className=" w-full h-12 rounded-md pl-2 mb-8 select-none" />
				<input type="text" placeholder="🔒  password" className=" w-full h-12 rounded-md pl-2 select-none" />
				<div className="mt-14">
					<CheckBox />
					<input 
						type="submit" 
						className="w-full h-12 mt-4 bg-[#77AB59] text-white rounded-md cursor-pointer hover:opacity-90" 
						value="Sign in"
					/>
					<input 
						type="button" 
						className="w-full h-12 mt-3 text-[#77AB59] bg-white rounded-md cursor-pointer" 
						value="Sign up"
					/>
				</div>
			</form>
		</div>
	);
}