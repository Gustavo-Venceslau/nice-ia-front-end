import Image from "next/image";

const LOGO = "/icon.svg";

export function Logo(){
	return (
		<div className="flex flex-row">
			<Image src={LOGO} alt="logo" width={66} height={50} className="drop-shadow-lg"/>
			<span className="flex items-center text-4xl font-semibold text-[#393939] ml-2">
				Nice-ia
			</span>
		</div>
	);
}