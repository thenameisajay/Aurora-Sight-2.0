export default function HeadBanner({
    heading,
    description,
}: {
    heading: string;
    description: string;
    customStyles?: string;
}) {
    return (
        <div className="   mt-6 flex w-full items-center justify-center text-center ">
            <div className="container flex  w-dvw flex-col ">
                <h1 className="mb-2  text-center text-2xl font-bold md:text-5xl 2xl:mb-6 2xl:text-7xl ">
                    {heading}
                </h1>
                <p className=" mx-auto w-full text-center text-xs font-light sm:text-sm  md:text-2xl 2xl:text-3xl ">
                    {description}
                </p>
            </div>
        </div>
    );
}
