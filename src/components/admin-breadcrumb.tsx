"use client"
import { Breadcrumb } from "@/lib/client-types";
// import { useRouter } from "next/navigation";
import AdminTitle from "./admin-title";
import { classNames } from "@/lib/class-name";

const AdminBreadcrumb: React.FC<{
    pages: Breadcrumb
}> = (
    { pages }
) => {
    const title = pages[pages.length - 1];

    return (
        <nav>
            <ol role="list" className="flex text-xs sm:text-sm items-center space-x-4">
                {Array.from(pages).map((page, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            {index > 0 ? <span className="text-gray-500">•</span> : ``}
                            <a
                                href={page.href ?? '#'}
                                className={classNames(
                                    index > 0 ? "ml-4" : "ml-0",
                                    index + 1 == pages.length
                                        ? "text-black/90 dark:text-white cursor-text"
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
            <AdminTitle title={title.name}/>
        </nav>
    );
};

export default AdminBreadcrumb