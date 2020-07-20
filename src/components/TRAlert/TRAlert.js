import React from 'react';

const TRAlert = () => {
	return (
		<article className="fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 p-2 bg-white shadow-2xl border-t-8">
			<section className="grid grid-row-2" id="content">
				<div className="grid grid-cols-3 gap-2">
					<div className="col-span-2" id="heading">
						Heading
					</div>
					<div id="closeButton">Close button</div>
				</div>
				<div id="message">Message</div>
			</section>
		</article>
	);
};

export default TRAlert;
