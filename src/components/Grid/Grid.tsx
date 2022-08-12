interface GridProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ title, children, className }) => (
  <div className={className}>
    <h2 className="text-xl font-bold pb-4">{title}</h2>
    <div className="grid grid-cols-auto-fill gap-8">{children}</div>
  </div>
);
