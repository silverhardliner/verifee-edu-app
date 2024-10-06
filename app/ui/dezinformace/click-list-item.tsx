import clsx from "clsx";
import React from "react";

export default function ClickListItem({
    displayedImage,
    setDisplayedImage,
    itemIndex,
    content,
}: {
    displayedImage: number;
    setDisplayedImage: (value: number) => void;
    itemIndex: number;
    content: React.ReactNode;
}) {
    return (
        <div>
            <li
                onClick={() => {
                    setDisplayedImage(itemIndex);
                }}
                className={clsx(
                    "cursor-pointer p-2 transition-colors duration-200",
                    { "opacity-50": displayedImage !== itemIndex },
                    { "bg-blue-500 text-white": displayedImage === itemIndex }
                )}
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    margin: "4px 0",
                }}
            >
                {content}
            </li>
        </div>
    );
}
