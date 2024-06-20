import { motion, useAnimation } from "framer-motion";

const GalleryItem = ({ src }: { src: string }) => {
  const controls = useAnimation();

  const galleryChildVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      className="rounded aspect-video"
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
          <GalleryItem src="https://img.freepik.com/free-photo/cute-winter-model-covering-eye_23-2148320531.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais" />
        </div>
        <div className="col-span-4 space-y-3">
          <GalleryItem src="https://www.coalitionforthehomeless.org/wp-content/uploads/2024/01/1-3.png" />
          <GalleryItem src="https://bsfashionsurat.com/wp-content/uploads/2023/06/Womens-Shelter-Clothing-Donations.jpg" />
        </div>
        <div className="col-span-4 space-y-3">
          <GalleryItem src="https://www.donatetocharities.org/wp-content/uploads/2020/04/Clothing-Drop-Off-Arlington-TX.jpg" />
          <GalleryItem src="https://donatestuff.com/wp-content/uploads/2023/01/schedule-donation-pickup-1.jpeg" />
        </div>
        <div className="col-span-8">
          <GalleryItem src="https://img.freepik.com/free-photo/volunteers-organizing-clothing-drive-those-need_1258-289596.jpg?w=996&t=st=1718911922~exp=1718912522~hmac=7b4524c69aa1c244c3e5edf1402ae576d3c06afc9e40a7760c1c4298543da9de" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://keystonenewsroom.com/wp-content/uploads/sites/10/2023/12/GettyImages-1340758325-jpg.webp" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://ffl.org/app/uploads/2022/10/A-nonprofit-worker-carrying-a-pile-of-recently-donated-clothes.jpg" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://philanthropyconnections.org/wp-content/uploads/2016/09/06-DSC02548-1.jpg" />
        </div>
        <div className="col-span-6">
          <GalleryItem src="https://www.portstephensexaminer.com.au/images/transform/v1/crop/frm/pHZcEtCHpLnAajcu3Rdcpx/dd35063c-b525-4cdd-81e1-7f2a5ed628b2.jpg/r0_0_5261_3507_w1200_h678_fmax.jpg" />
        </div>
        <div className="col-span-6">
          <GalleryItem src="https://media.istockphoto.com/id/936497196/photo/woman-donates-warm-clothing-during-clothing-drive.jpg?s=612x612&w=0&k=20&c=6p8YMSn0UsxZ4jiWJIg1xcdRa6u-M0Pq9jWE0MhxL_Q=" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://www.athensinsider.com/wp-content/uploads/2020/12/DOREA-900x600.jpg" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://hissenglobal.com/wp-content/uploads/2021/05/used-clothes.jpg" />
        </div>
        <div className="col-span-4">
          <GalleryItem src="https://www.vmcdn.ca/f/files/via/import/2018/12/19102914_Donate-to-Street-Store-Vancouver-in-the-Downtown-Eastside-Mike-Wu-Photography.jpg;w=960" />
        </div>
        <div className="col-span-8">
          <GalleryItem src="https://img.freepik.com/free-vector/flat-illustration-clothing-donation-concept_52683-55515.jpg?w=1380&t=st=1718912313~exp=1718912913~hmac=bbc6940d3f337dc6da00d40504e3253f14f6e0c5b60697d1151617857d3d73b2" />
        </div>
        <div className="col-span-4 space-y-3">
          <GalleryItem src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/12/soundofhope-600x400.jpg" />
          <GalleryItem src="https://old.bidyanondo.org/uploads/projects/12/Winter-Clothes-Distribution-small-1704364188.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
