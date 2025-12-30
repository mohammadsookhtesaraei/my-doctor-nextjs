interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto max-w-7xl px-8 transition-all duration-300 ease-linear xl:px-0">
      {children}
    </div>
  );
};

export default Container;
