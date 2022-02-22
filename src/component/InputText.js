import React from "react";
import "../component/InputText.css"

export default function InputText() {
	return (
		<div>
			<input
				type="text"
				id="fname"
				name="firstname"
                placeholder="Email address"
			/>
		</div>
	);
}
