import { MediaModal } from "@/components/ui/MediaModal";
import "./imagegrid.css";
import { projectPageImages } from "@/data/data";

const ImageGrid = () => {
  return (
    <div className="max-lg:mt-28">
        <h2 className="font-GoodTiming text-4xl text-h2 lg:text-6xl max-w-xl mt-2 mb-6">Clients projects</h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[300px]">
            {
                projectPageImages.map((item, i) => (
                    <MediaModal 
                    imgSrc={item.imgSrc}
                    />
                ))
            }
            
        </div>
    </div>
  )
}

export default ImageGrid;