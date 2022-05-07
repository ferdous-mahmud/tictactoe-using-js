import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Howl } from 'howler';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";

const Header = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);

    const playSound = (src) => {
        const sound = new Howl({
          src,
          html5: true,
          volume: 0.5,
        })
        sound.play()
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if(currentTheme === "dark") {
            return (
                <MoonIcon
                className="w-7 h-7" 
                role="button" 
                onClick={() => {
                    playSound("/sounds/switch-on.mp3");
                    setTheme("light");
                }}
                 />
            )
        }else{
            return (
                <SunIcon 
                className="w-7 h-7"
                role="button" 
                onClick={() => {
                    playSound("/sounds/switch-off.mp3");
                    setTheme("dark");
                }}
                />
            )
        }
    }
    return (
        <div className="pt-16">
            <header className="border-b border-gray-100 dark:border-gray-700 fixed top-0 inset-x-0 h-16 dark:bg-gray-900 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Logo />
            {/* theme switcher */}
            {renderThemeChanger()}
            </div>
            </header>
        </div>
    )
}

export default Header;
