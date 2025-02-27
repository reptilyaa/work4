import { cn } from "@/lib/utils";


interface Props {
    className?: string;
}


const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктели', 'Кофе', 'Напитки', 'Десерты', 'Ещё'];



const activiIndex = 0;


export const Categories: React.FC<Props> = ({ className }) => {
    return (

        <div className={cn('inline-flex gap-1 bg-gray-50 p1 rounded-2xl', className)}>
            {cats.map((cat, index) => (
                <a
                key={index}
                className={cn(

                    'flex items-center font-bold h-11 rounded-2xl px-5',

                    activiIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}

            >
                <button>
                    {}
                    {cat}
                </button>
            </a>
            ))}
        </div>
    )
}


