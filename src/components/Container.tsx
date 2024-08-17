export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1136px] mx-auto ${className} md:max-lg:px-4`}>
      {children}
    </div>
  );
}
