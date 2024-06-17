import { motion, useAnimation } from "framer-motion";

const GalleryItem = ({ src }: { src: string }) => {
  const controls = useAnimation();

  const galleryChildVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      className="rounded aspect-square"
      initial="hidden"
      animate={controls}
      variants={galleryChildVariant}
      viewport={{  amount: 0.1 }}
      onViewportEnter={() => controls.start("visible")}
      onViewportLeave={() => controls.start("hidden")}
    >
      <img className="w-full object-cover" src={src} alt="" />
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-12 gap-3 my-10 w-full">
        <div className="col-span-8">
          <GalleryItem src="https://picsum.photos/200" />
        </div>
        <div className="col-span-4 space-y-3">
          <GalleryItem src="https://picsum.photos/201" />
          <GalleryItem src="https://picsum.photos/2014" />
        </div>
        <div className="col-span-4 space-y-3">
          <GalleryItem src="https://picsum.photos/202" />
          <GalleryItem src="https://picsum.photos/2029" />
        </div>
        <div className="col-span-8">
          <GalleryItem src="https://picsum.photos/203" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://picsum.photos/204" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://picsum.photos/205" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://picsum.photos/218" />
        </div>
        <div className="col-span-6">
          <GalleryItem src="https://picsum.photos/206" />
        </div>
        <div className="col-span-6">
          <GalleryItem src="https://picsum.photos/207" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://picsum.photos/208" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://picsum.photos/209" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://picsum.photos/210" />
        </div>
        <div className="col-span-8">
          <GalleryItem src="https://picsum.photos/211" />
        </div>
        <div className="col-span-4 space-y-3">
          <GalleryItem src="https://picsum.photos/212" />
          <GalleryItem src="https://picsum.photos/2124" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
