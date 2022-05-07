import Image from "next/image";
import Link from "next/link";
import Layout from "../sections/Layout";

const NotFound = () => (
    <Layout pageMeta={{
        title:"Oops! You found a missing page ..."
    }}>
        <div className="text-center py-28 px-4 lg:py-20 pb-32 flex flex-col items-center justify-center">
        <div className="grid place-content-center">
        <Image src="https://i.ibb.co/ncJJqTq/undraw-page-not-found-su7k-2-1-1-1.png" width="418" height="178" alt="404 animation" />
        </div>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-4 md:py-8">Not Found</h1>
        <p className="text-lg text-gray-600 py-2">
            Sorry, there is nothing at this URL.
        </p>
            <div className="my-4 md:my-8 w-full">
            <Link href="/">
                <button className="text-center text-lg font-medium text-white p-4 md:w-auto w-full bg-indigo-600 border rounded-md hover:bg-indigo-700">Go back home</button>
            </Link>
            </div>
        </div>
    </Layout>
);

export default NotFound;
