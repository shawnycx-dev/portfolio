import { cn } from "@/utils/cn";

interface ShapeProps {
  innerClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

interface CircleProps extends ShapeProps {
  radius: number;
}

export const Circle = ({
  className,
  children,
  radius,
  innerClassName,
}: CircleProps) => {
  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-full p-1 aspect-square",
        className
      )}
      style={{
        width: `${radius * 2}px`,
      }}
    >
      <div className={cn("w-full h-full rounded-full", innerClassName)}>
        {children}
      </div>
    </div>
  );
};

interface SquareProps extends ShapeProps {
  size: number;
}

export const Square = ({
  className,
  children,
  size,
  innerClassName,
}: SquareProps) => {
  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-md p-1 aspect-square",
        className
      )}
      style={{
        width: `${size}px`,
      }}
    >
      <div className={cn("w-full h-full rounded-md", innerClassName)}>
        {children}
      </div>
    </div>
  );
};
