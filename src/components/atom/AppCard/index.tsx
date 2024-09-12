import { ReactNode } from "react";

export interface AppCardProps {
  children: ReactNode,
  className?: string,
}

const AppCard = (props: AppCardProps) => {
  return (
    <>
      <div className={`
        bg-gradient-to-br from-white/20 to-white/5 
        dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0
        backdrop-blur-md
        border
        border-white/80
        dark:border-white/10
        transition-all duration-300 ${props.className}`
      }>
        {props.children}
      </div>
    </>
  );
}

export default AppCard;