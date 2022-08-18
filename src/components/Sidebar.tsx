import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function Sidebar() {
    const { data } = useGetLessonsQuery()

    return (
        <aside className="w-[348px] bg-white p-6 border-l border-gray-600 dark:bg-gray-700">
            <span className="font-bold text-2xl text-gray-600 pb-6 mb-6 border-b border-gray-500 block dark:text-gray-200">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
            {data?.lessons.map(lesson => {
                return (
                    <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                )
            })}
               

            </div>
        </aside>
    )
}