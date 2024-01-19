import Link from "next/link";
import React from "react";
import ContentContainer from "./ContentContainer";

const Breadcrumbs = ({ path }: { path: string }) => {
  const splitPath = React.useMemo(() => {
    return path.split("/");
  }, [path]);
  return (
    <ContentContainer>
      <p className="py-5">
        {splitPath.map((p, i) => {
          const isLast = splitPath.length - 1 === i;
          const isFirst = i === 0;
          const text = p.trim();
          return (
            <>
              <span className={isLast ? "text-[#274A68] font-semibold" : ""}>
                {isFirst ? (
                  <Link href={"/"} className="hover:underline">
                    {text}
                  </Link>
                ) : (
                  text
                )}
              </span>

              {!isLast && <span> / </span>}
            </>
          );
        })}
      </p>
    </ContentContainer>
  );
};

export default Breadcrumbs;
