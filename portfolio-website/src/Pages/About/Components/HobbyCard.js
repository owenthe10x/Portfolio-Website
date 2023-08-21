const HobbyCard = (props) => {
    const defaultImgStyles =
		'aspect-video object-cover rounded-xl h-40 mx-auto md:w-[100%] md:h-auto mb-5 md:mb-0'
	const imgStyles = props.customImgStyles
		? `${defaultImgStyles} ${props.customImgStyles}`
		: defaultImgStyles
	return (
		<section className=" text-forth p-10 sm:grid md:grid-cols-2 ">
			<img
				src={props.image}
				alt="image"
				className={imgStyles}
			/>
			<section className="text-justify md:px-5 my-auto">
				<h2 className="font-kollektifBoldItalic text-3xl text-center">{props.name}</h2>
				<p className="font-kollektif">{props.desc}</p>
			</section>
		</section>
	)
}

export default HobbyCard
