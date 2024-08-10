const SkeletonLoader: React.FC<{
  className: string;
}> = ({ className }) => {
  return <div className={`bg-gray-200 animate-pulse rounded-md ${className}`}></div>;
};

export default SkeletonLoader;
