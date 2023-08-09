"use client";

import { useState } from "react";
import { FiCheck } from "react-icons/fi";

export function CheckBox(){

	const [checked, setChecked] = useState(false);

	const checkboxStyle = {
		checked: 'w-6 h-6 md:max-2xl:w-[18px] md:max-2xl:h-[18px] bg-[#77AB59] border-2 border-[#77AB59] rounded flex justify-center items-center',
		unChecked: 'w-6 h-6 md:max-2xl:w-[18px] md:max-2xl:h-[18px] border-2 border-[#D9D9D9] rounded flex justify-center items-center',
	};

	function handleCheckBox(){
		setChecked(!checked);
	}

	return (
		<div className="flex flex-row items-center">
			<div 
				className={checked ? checkboxStyle.checked : checkboxStyle.unChecked}
				onClick={() => handleCheckBox()}
			>
			{checked ? <FiCheck color="white"/> : <FiCheck color="#F0F7DA"/>}
			</div>
			<h3 className="ml-2 text-[#666] text-sm select-none">Remember Me</h3>
		</div>
	);
}