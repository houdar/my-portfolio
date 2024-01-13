import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block mt-10 sm:flex sm:gap-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.jpg"
					width={300}
					height={300}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="w-full text-left font-general-regular sm:w-3/4">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-lg text-ternary-dark dark:text-ternary-light"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
