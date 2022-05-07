import { TerminalIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Logo = () => (
    <Link href="/">
        <a className="flex items-center space-x-1 text-blue-600">
            <TerminalIcon className="w-8 h-8 flex-shrink-0"/>
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">iOS developer blog</span>
        </a>
    </Link>
);

export default Logo;