import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Switch from "../components/Switch";
import { Video } from "../components/Video";


export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black">
            <Switch />
            <Header />
            <Switch />
            <main className="flex flex-1">
                { slug 
                    ? <Video lessonSlug={slug} /> 
                    : <div className="flex-1" />
                }
                
                <Sidebar />
            </main>
            
        </div>
    
    )
}