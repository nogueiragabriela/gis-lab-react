import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-white border-b border-gray-600 dark:bg-gray-700">
            <Logo />
        </header>
        
    )
}