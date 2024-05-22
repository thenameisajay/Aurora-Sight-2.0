import Image from 'next/image';

import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import Footer from '@/components/footer/Footer';

const heading = 'Acknowledgements';

const description =
    ' The alert status and data are generated by AuroraWatch UK.';

const Header = () => {
    return (
        <>
            <HeadBanner heading={heading} description={description} />
            <div className=" mt-4 flex  h-14 w-14 items-center justify-center  rounded-md bg-black sm:h-20 sm:w-20 md:h-28  md:w-28 ">
                <Image
                    src="/aurora-watch-logo.png"
                    alt="Aurora Sight 2.0 Logo"
                    width={200}
                    height={200}
                    loading="lazy"
                    className="rounded-full "
                />
            </div>
        </>
    );
};

const Content = () => {
    return (
        <div className=" mx-4  flex-col space-y-2   rounded-md border border-gray-100 p-2 text-center   md:w-96  md:text-base  lg:w-[1000px] lg:text-xl">
            <div>
                <h2>
                    This app uses data from{' '}
                    <a
                        href="http://aurorawatch.lancs.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 hover:underline"
                    >
                        AuroraWatch UK
                    </a>
                    .
                </h2>
            </div>
            <div>
                <p>
                    AuroraWatch UK is a service provided by the Space and
                    Planetary Physics group at Lancaster University. The data
                    used by AuroraWatch UK has specific data acknowledgement
                    requirements which are reflected here.
                </p>
            </div>
            <div>
                <p>
                    For more information, visit the{' '}
                    <a
                        href="http://aurorawatch.lancs.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 hover:underline"
                    >
                        AuroraWatch UK website
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Header />
            <div className=" h-10  md:h-20"></div> <Content />
            <Footer />
        </div>
    );
}