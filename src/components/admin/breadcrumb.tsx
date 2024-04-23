import { classNames } from '@/utils/className'

export default function Breadcrumb(
    pages: Array<{ name: string; href: string; current: boolean }> = []
) {
    return (
        <div>
            <ol role="list" className="flex items-center space-x-4">
                {Array.from(pages).map((page, index) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            {index > 0 ? <span className="text-gray-500">•</span> : ``}
                            <a
                                href={page.href}
                                className={classNames(
                                    index > 0 ? "ml-4" : "ml-0",
                                    index + 1 == pages.length
                                        ? "text-black/90 cursor-text"
                                        : " text-gray-500 hover:text-gray-700",
                                    "font-poppins text-sm font-medium"
                                )}
                                aria-current={page.current ? "page" : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
            <h1 className='text-3xl'>Helelellelel</h1>
        </div>
    );
}
