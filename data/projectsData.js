import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'touristic website',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'touristic website',
			publishDate: 'march 20, 2023',
			tags: 'Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'touristic website',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'touristic website',
				img: '/images/web-project-1-2.jpg',
			},
			
		],
		ProjectInfo: {	
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'a touristic app that provide for visitors the ability to see the most beautiful places to visit and provide realistic prices for hotels and all services can be needed',
			 Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'React Js'
					],
				},
			], 
			ProjectDetailsHeading: 'description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Embark on a journey of boundless exploration with our cutting-edge touristic platefor app, designed to elevate your travel experience. Immerse yourself in the beauty of the world's most enchanting destinations as we bring you a meticulously curated selection of awe-inspiring places. From iconic landmarks to hidden gems, our app serves as your personal guide, unveiling the secrets of each locale.",
				},
				{
					id: uuidv4(),
					details:
						"But it's not just about the sights – our app goes beyond, providing you with real-time hotel prices so you can plan your stay with ease. Say goodbye to the guesswork and hello to seamless travel arrangements. Each destination comes to life with detailed information, ensuring you have everything you need at your fingertips.",
				},
				{
					id: uuidv4(),
					details:
						"Whether you're a solo adventurer, a couple seeking a romantic getaway, or a family on a quest for unforgettable memories, our touristic platefor app is your travel companion of choice. Navigate through a world of possibilities, uncover hidden treasures, and make every journey an unforgettable chapter in your travel story. Your wanderlust deserves the best – let our app be the key to unlocking your next extraordinary adventure"
				},
				
			],
		
		},
	},
	//do not fucking touch this part its done now 

	{
		id: 2,
		title: 'task manager App',
		category: 'frontend',
		img: '/images/ui-project-12.jpg',
		ProjectHeader: {
			title: 'task manager App',
			publishDate: 'Nov 15, 2023',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'task manager',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'task manager',
				img: '/images/ui-project-12.jpg',
			},
		
		],
		ProjectInfo: {
		
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
			"Streamline your life with our Task Manager project. Effortlessly manage your to-dos, take quick notes, and schedule tasks all in one place. Simplify your day and boost productivity with this user-friendly solution.",
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'next js 13',
						'TailwindCSS',
						'chadCn',
						'Figma',
					],
				},
			], 
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Introducing our revolutionary Task Manager project — your ultimate ally in mastering productivity and organization. Seamlessly blending task management, note-taking, and scheduling, this intuitive platform empowers you to take control of your to-dos and transform your daily routine."
				},
				{
					id: uuidv4(),
					details:
						"Effortlessly create, organize, and prioritize tasks with our user-friendly interface. Jot down important notes and ideas alongside your tasks, ensuring that no detail escapes your attention. The scheduling feature adds another layer of efficiency, allowing you to allocate time strategically and maximize productivity."
				},
				{
					id: uuidv4(),
					details:
				      "Introducing our revolutionary Task Manager project — your ultimate ally in mastering productivity and organization. Seamlessly blending task management, note-taking, and scheduling, this intuitive platform empowers you to take control of your to-dos and transform your daily routine."
				},
				{
					id: uuidv4(),
					details:
						"Whether you're a professional aiming to streamline your workday or an individual seeking balance in personal life, our Task Manager project is tailored to meet your needs. Embrace a clutter-free, organized life where tasks are conquered, notes are captured, and time is optimized. Elevate your productivity game — your future self will thank you"
				},
			],
		
		},
	},
	
];
