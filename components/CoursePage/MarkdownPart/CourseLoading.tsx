export default function CourseLoading() {
    return (
        <div
            id="loading"
            class="flex-grow h-full-minus-bar w-full absolute bg-base-300 z-[9999] transition-opacity duration-500 ease-in-out opacity-100"
        >
            <div className="flex flex-col justify-center items-center h-[89%] bg-base-100 opacity-90 dark:opacity-100 dark:bg-transparent p-5 rounded-lg">
                <div className="code-loader">
                    <span>{"{"}</span>
                    <span>{"}"}</span>
                </div>
                <p className="text-2xl">جاري تحميل المحتوى</p>
            </div>
        </div>
    );
}