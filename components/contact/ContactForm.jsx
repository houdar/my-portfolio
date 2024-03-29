import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

function ContactForm() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl p-6 m-4 text-left shadow-xl sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl"
				>
					<p className="mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
						Contact Me
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block mb-2 text-lg text-primary-dark dark:text-primary-light"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 border-opacity-50 rounded-md shadow-sm dark:border-primary-dark text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<span className="py-4 mt-6 font-medium tracking-wider text-center text-white duration-500 bg-indigo-500 rounded-lg font-general-medium px-7 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900">
							<Button
								title="Send Message"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
