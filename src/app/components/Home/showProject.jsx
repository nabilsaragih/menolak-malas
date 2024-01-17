import Image from "next/image";

const ShowProject = ({ src, className }) => {
  return (
    <div className={className}>
      <Image src={src} width={550} height={550} />
    </div>
  )
};

export default ShowProject;
