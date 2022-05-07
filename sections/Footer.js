import Link from "next/link";

const Footer = () => (
    <footer className="px-4 sm:px-6 py-6 mt-24">
        <div className="text-center">
            <p className="text-sm text-gray-500 inline-flex">© 2021-{new Date().getFullYear()} 
            <Link href="https://github.com/ferdous-mahmud">
            <a className="text-blue-600 cursor-pointer hover:text-blue-700" target="_blank">&nbsp;Ferdous Mahmud.</a>
            </Link>&nbsp;All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;