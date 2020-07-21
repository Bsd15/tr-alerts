import React from 'react';
import useAlertConfig from './hooks/useAlertConfig';
import classes from './TRAlert.module.css';
const TRAlert = () => {
	const [alertConfig, , closeAlert] = useAlertConfig();
	return (
		<article
			className={`fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 p-2 bg-white shadow-2xl border-t-8 ${
				classes.alertBox
			} ${alertConfig.show ? classes.alertBoxShow : ''}`}
		>
			<section className="grid grid-row-2" id="content">
				<div className="flex items-center justify-between">
					<div className=" h-8 text-lg font-bold overflow-hidden" id="heading">
						{alertConfig.heading}
					</div>
					<div id="closeButton" onClick={() => closeAlert()}>
						<div className="w-6 h-6">
							<svg
								// height="512pt"
								viewBox="0 0 512 512"
								// width="512pt"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
									fill="#f44336"
								/>
								<path
									d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
									fill="#fafafa"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div id="message" className="h-20 overflow-y-auto">
					{alertConfig.message}
				</div>
			</section>
		</article>
	);
};

export default TRAlert;
