import { useEffect, useRef } from "react";

const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const commentsElement = commentsRef.current;
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "apenasgabs/devpedia");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    if (commentsElement) {
      commentsElement.appendChild(script);
    }

    return () => {
      if (commentsElement) {
        commentsElement.innerHTML = "";
      }
    };
  }, []);

  return <div ref={commentsRef} />;
};

export default Comments;
