import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function AnimatedText({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [showText, setShowText] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShowText(true);
      setIsRemoving(false);
    } else if (showText) {
      setIsRemoving(true);
      setTimeout(() => setShowText(false), 600); // 애니메이션 시간 후 DOM에서 제거
    }
  }, [isVisible, showText]);

  if (!showText) return null;

  return (
    <p
      className={twMerge(
        "text-sm text-red-500",
        isRemoving ? "animate-fadeOut" : "animate-insideout",
      )}
    >
      {children}
    </p>
  );
}

export default AnimatedText;
