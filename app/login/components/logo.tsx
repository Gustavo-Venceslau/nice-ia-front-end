import Image from "next/image";
import { Poppins } from 'next/font/google';

const LOGO = "/icon.svg";

const poppins = Poppins({ 
	weight: "700",
	subsets: ['latin']
});

export function Logo(){
	return (
		<div className="flex flex-row items-center text-4xl font-black text-[#393939]">
			<Image src={LOGO} alt="logo" width={66} height={50} className="drop-shadow-lg mr-2"/>
			<span 
				className={poppins.className}>
				Nice-ia
			</span>
		</div>
	);
}